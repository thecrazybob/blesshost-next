import { getAllPostsForHome } from "../../lib/api";
import BlogCard from "../../components/blog-card";

export default function Page({ allPosts: { edges } }) {
  const morePosts = edges.slice(1);
  return <>
  {morePosts.length > 0 && <BlogCard posts={morePosts} />}
  </>;
}

export async function getStaticProps() {
  const allPosts = await getAllPostsForHome();
  return {
    props: { allPosts },
  };
}
