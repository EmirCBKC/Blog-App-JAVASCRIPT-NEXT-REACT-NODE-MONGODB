import Style from "./all-posts.module.css";
import PostGrid from "../Posts/PostsGrid";

export default function AllPosts(props) {
    return (
        <section className={Style.posts}>
            <h1>All Posts</h1>
            <PostGrid posts={props.posts} />
        </section>
    )
}
