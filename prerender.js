import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/static/index.html'), 'utf-8');
const render = (await import('./dist/server/entry-server.js')).render;
// const { render } = await vite.ssrLoadModule('.dist/server/entry-server.tsx')

// determine routes to pre-render from src/pages
const pageRoutes = fs.readdirSync(toAbsolute('src/pages')).map((file) => {
    const name = file.replace(/\.tsx$/, '').toLowerCase();
    return name === 'home' ? `/` : `/${name}`;
});

const docRoutes = fs.readdirSync(toAbsolute('src/docs')).map((file) => {
    const name = file.replace(/\.md$/, '').toLowerCase();
    return name === 'home' ? `/` : `/docs/${name}`;
});

const routesToPrerender = [...pageRoutes, ...docRoutes];
console.log("routesToPrerender", routesToPrerender);


function writeFileSyncRecursive(filename, content, charset) {
    // -- normalize path separator to '/' instead of path.sep,
    // -- as / works in node for Windows as well, and mixed \\ and / can appear in the path
    let filepath = filename.replace(/\\/g, '/');

    // -- preparation to allow absolute paths as well
    let root = '';
    if (filepath[0] === '/') {
        root = '/';
        filepath = filepath.slice(1);
    } else if (filepath[1] === ':') {
        root = filepath.slice(0, 3);   // c:\
        filepath = filepath.slice(3);
    }

    // -- create folders all the way down
    const folders = filepath.split('/').slice(0, -1);  // remove last item, file
    folders.reduce(
        (acc, folder) => {
            const folderPath = acc + folder + '/';
            if (!fs.existsSync(folderPath)) {
                fs.mkdirSync(folderPath);
            }
            return folderPath
        },
        root // first 'acc', important
    );

    // -- write file
    fs.writeFileSync(root + filepath, content, charset);
}


(async () => {
    // pre-render each route...
    for (const url of routesToPrerender) {
        const appHtml = render(url);
        const html = template.replace(`<!--ssr-outlet-->`, appHtml);
        const filePath = `dist/static${url === '/' ? '/index' : url}.html`;
        writeFileSyncRecursive(filePath, html, 'utf8');
    }
})();
