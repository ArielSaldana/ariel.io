import ReactMarkdown from "react-markdown";
import React from "react";
import styles from '@/scss/Document.module.scss'
import children = ReactMarkdown.propTypes.children;
import remarkGfm from "remark-gfm";

interface DocProps {
    markdown: string
}

interface DefaultProps {
    children: any,
    href?: any
}

function Link(props: DefaultProps) {
    return <a href={props.href} className="my-link-class">{props.children}</a>
}

function BlockQuote(props: DefaultProps) {
    return <blockquote className="my-block-quote">{props.children}</blockquote>
}

const renderers = {
    paragraph: (props: any) => {
        if (props.children && props.children[0].props && props.children[0].props.value === "This is a warning!") {
            return <p className="warning">{props.children}</p>
        }
        return <p>{props.children}</p>
    },
};

export default function Docs(docProps: DocProps) {
    const innerHtml = docProps.markdown
    return (
        <>
            <div className={styles.document}>
                <div className={styles.header}>
                    <img src="/nativelabs-logo-no-fill-no-bg.svg" alt="nativelabs logo"/>
                    <h1>NativeLabs</h1>
                </div>
                <div className={styles.content}>
                    <ReactMarkdown
                        children={innerHtml}
                        remarkPlugins={[remarkGfm]}
                        components={{
                            p({node, className, children, ...props}) {
                                if (children.toString().startsWith("|warning")) {
                                    const comp = children.toString().replace("|warning ", "")
                                    return <p className={styles.warning}>{comp}</p>
                                } else {
                                    return <p>{children}</p>;
                                }
                            },
                            // h1({node, className, children, ...props}) {
                            //     const match = /language-(\w+)/.exec(className || '')
                            //     return <h1 className="cat">{children}</h1>
                            // }
                            // code({node, inline, className, children, ...props}) {
                            //     const match = /language-(\w+)/.exec(className || '')
                            //     return !inline && match ? (
                            //         <SyntaxHighlighter
                            //             children={String(children).replace(/\n$/, '')}
                            //             style={dark}
                            //             language={match[1]}
                            //             PreTag="div"
                            //             {...props}
                            //         />
                            //     ) : (
                            //         <code className={className} {...props}>
                            //             {children}
                            //         </code>
                            //     )
                            // }
                        }}

                    />
                    {/*{innerHtml}*/}
                    {/*</ReactMarkdown>*/}
                </div>
            </div>
        </>
    )
}
