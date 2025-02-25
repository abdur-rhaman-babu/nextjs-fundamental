import { getPost, Post } from "@/data";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Post",
  description: "Fetch JSON data using server side",
};

const Posts = async () => {
  const posts: Post[] = await getPost();
  return (
    <div>
      <h1>post: {posts.length}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 my-5 mx-5">
        {posts.map((post) => {
          return (
            <div key={post.id} className="border-2 shadow-lg p-2 rounded-lg">
              <h1>{post.title}</h1>
              <p>{post.body}</p>
              <Link href={`/posts/${post.id.toString()}`}><button>Details</button></Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
