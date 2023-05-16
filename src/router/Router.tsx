import Markdown from "../markdown/Markdown";
import Docs from "../components/docs/Docs";
import { Route, Routes } from "react-router-dom";
import { PageRoutes } from "./PageRoutes";

const pageRoutes = PageRoutes();
const md = new Markdown(Docs);
const markdownPagesRoutes = md.getDocuments();

export default function Router() {
    return (
        <>
            <Routes>
                {/* pages*/}
                {pageRoutes.map(({ path, component: RouteComponent }) => {
                    // @ts-ignore
                    return <Route key={path} path={path} element={<RouteComponent />} />
                })}
                {/* docs */}
                {markdownPagesRoutes.map(({ path, data }) => {
                    return <Route key={path} path={path} element={<Docs markdown={data} />} />
                })}
            </Routes>
        </>
    )
}
