import Hero from "../components/ui/Home-Page/Hero";
import FeaturedPosts from "../components/ui/Home-Page/FeaturedPosts";
import { getFeaturedPosts } from "../helpers/posts-util";
import Head from "next/head";

const DUMMY_POSTS = [
    {
        slug: "getting-started-with-nextjs",
        title: "Getting Started With NextJS",
        image: "getting-started-nextjs.png",
        excerpt: "NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
        date: "2022-02-10"
    },
    {
        slug: "getting-started-with-nextjs2",
        title: "Getting Started With NextJS",
        image: "getting-started-nextjs.png",
        excerpt: "NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
        date: "2022-02-10"
    },
    {
        slug: "getting-started-with-nextjs3",
        title: "Getting Started With NextJS",
        image: "getting-started-nextjs.png",
        excerpt: "NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
        date: "2022-02-10"
    },
    {
        slug: "getting-started-with-nextjs4",
        title: "Getting Started With NextJS",
        image: "getting-started-nextjs.png",
        excerpt: "NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
        date: "2022-02-10"
    },
];

export default function HomePage(props) {

    return (
        <>
            <Head>
                <title>Emircan' Blog</title>
                <meta name="description" content="I post about programming and web development." />
            </Head>
            <Hero />
            <FeaturedPosts posts={props.posts} />
        </>
    )
}

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts
        }
    };
}