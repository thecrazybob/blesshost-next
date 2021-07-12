import { getAllPostsForHome } from "../../lib/api";
import BlogCard from "../../components/blog-card";

export default function Page({ allPosts: { edges } }) {
  const posts = edges.slice(0);
  return <>{posts.length > 0 && <BlogCard posts={posts} />}</>;
}

export async function getStaticProps() {
  const allPosts = await getAllPostsForHome();
  return {
    props: { allPosts },
  };
}
