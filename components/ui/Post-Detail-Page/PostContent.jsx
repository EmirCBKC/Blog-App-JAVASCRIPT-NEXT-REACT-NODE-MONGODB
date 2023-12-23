import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Style from "./post-content.module.css";
import PostHeader from "./PostHeader";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function PostContent(props) {

    const { post } = props;

    const imagePath = `/images/posts/${post.slug}/${post.image}`;

    const customRenderers = {
        img(image) {
            return (
                <Image src={`/images/posts/${post.slug}/${image.src}`} alt={image.alt} width={600} height={300} />
            );
        },
        code(code) {
            const { className, children } = code;
            //* className is something like language-js => We need the "js" part here
            const language = className.split('-')[1];
            return <SyntaxHighlighter style={atomDark} language={language} children={children} />
        }
    };


    return (
        <article className={Style.content}>
            <PostHeader title={post.title} image={imagePath} />
            <ReactMarkdown components={customRenderers}>
                {post.content}
            </ReactMarkdown>
        </article>
    )
}
