import PostsGrid from "../Posts/PostsGrid";
import Style from "./featured-posts.module.css";

export default function FeaturedPosts(props) {



    return (
        <section className={Style.latest}>
            <h2>Featured Posts</h2>
            <PostsGrid posts={props.posts} />
        </section>
    )
}
