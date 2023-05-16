import MarkdownDocument from "./MarkdownDocument";

export default class Markdown {
    routes: any;
    documents: MarkdownDocument[];
    markdownDocumentViewerComponent: any;

    constructor(markdownDocumentViewerComponent: any) {
        this.markdownDocumentViewerComponent = markdownDocumentViewerComponent;
        const documentFiles = this.findDocuments();
        this.documents = this.initDocuments(documentFiles);
    }

    findDocuments() {
        return import.meta.glob('@/**/*.md', { eager: true, as: "raw" }) as any;
    }

    parseTitle(yamlConfig: string): string {
        const titleRegex = /^title: (.*)/gm;
        const titleRegexResult = titleRegex.exec(yamlConfig);

        if (titleRegexResult !== null) {
            return titleRegexResult[1];
        }

        throw Error("Failed to parse title");
    }

    parseImage(yamlConfig: string): string {
        const imageRegex = /^image: (.*)/gm;
        const imageRegexResult = imageRegex.exec(yamlConfig);

        if (imageRegexResult !== null) {
            return imageRegexResult[1];
        }
        throw Error("Failed to parse image");

    }

    parseTags(yamlConfig: string): string[] {
        const tagsRegex = /^tags: \[(.*)]/gm;
        const tagsRegexResult = tagsRegex.exec(yamlConfig);
        if (tagsRegexResult !== null) {
            return tagsRegexResult[1].replace(" ", "").split(',');
        }
        throw Error("Failed to parse tags");

    }

    parseCategory(yamlConfig: string) {
        const categoryRegex = /^category: (.*)/gm;
        const categoryRegexResult = categoryRegex.exec(yamlConfig);

        if (categoryRegexResult !== null) {
            return categoryRegexResult[1];
        }
        throw Error("Failed to parse image");
    }

    parsePath(category: string, name: string): string {
        return `/${category}/${name}`
    }

    parseName(documentEntry: string) {
        const fileNameRegex = /([\w-]+)\.md/gm;
        const fileNameRegexResult = fileNameRegex.exec(documentEntry);

        let name = "";
        if (fileNameRegexResult !== null) {
            return fileNameRegexResult[1];
        }

        return "";
    }


    initDocuments(documentFiles: any) {
        return Object.entries(documentFiles).map((entry: [string, any]) => {
            const fileName = entry[0] as string;
            const fileContents = entry[1] as string;
            const documentYAMLAndMDRegex = /^---\n\n(.*)\n\n---\n\n(.*)/gs;

            let md = "";
            let yaml = "";
            let m;
            while ((m = documentYAMLAndMDRegex.exec(fileContents)) !== null) {
                // This is necessary to avoid infinite loops with zero-width matches
                if (m.index === documentYAMLAndMDRegex.lastIndex) {
                    documentYAMLAndMDRegex.lastIndex++;
                }
                yaml = m[1];
                md = m[2];
            }

            const name = this.parseName(fileName);
            const title = this.parseTitle(yaml);
            const category = this.parseCategory(yaml);
            const path = this.parsePath(category, name);
            const tags = this.parseTags(yaml);
            const image = this.parseImage(yaml);

            let mdDocument: MarkdownDocument = {
                category: category,
                tags: tags,
                image: image,
                title: title,
                path: path,
                data: md,
                documentViewer: this.markdownDocumentViewerComponent
            };
            return mdDocument

        }) as MarkdownDocument[]
    }

    getDocuments() {
        return this.documents;
    }
}
