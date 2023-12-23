import PostItem from "./PostItem";
import Style from "./posts-grid.module.css";

export default function PostsGrid(props) {

    return (
        <ul className={Style.grid}>
            {props.posts.map((post) => <PostItem key={post.slug} item={post} />)}
        </ul>
    )
}
