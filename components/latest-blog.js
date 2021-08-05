import BlogCard from "./blog-card";

export default function LatestBlog({ homePosts: { edges }, className }) {
  const posts = edges.slice(0);

  return (
    <div className={className}>
      {posts.length > 0 && <BlogCard posts={posts} />}
    </div>
  );
}
