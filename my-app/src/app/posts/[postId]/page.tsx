import { getSinglePost } from "@/data";
import { Metadata } from "next";

type Props = {
  params: { postId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { postId } = params;
  const post = await getSinglePost(postId);

  return {
    title: post.title,
    description: post.body,
  };
}

const PostDetails: React.FC<Props> = async ({ params }) => {
  const { postId } = params;
  const post = await getSinglePost(postId);
  console.log(post);
  const { title, body, id } = post;
  return (
    <div>
      <h1>Post id: {postId}</h1>
      <h1>{title}</h1>
      <p>{body}</p>
      <h1>{id}</h1>
    </div>
  );
};

export default PostDetails;
