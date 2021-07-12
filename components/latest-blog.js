import BlogCard from "./blog-card";

export default function LatestBlog({ homePosts: { edges } }) {
  const posts = edges.slice(0);

  return <>{posts.length > 0 && <BlogCard posts={posts} />}</>;
}
