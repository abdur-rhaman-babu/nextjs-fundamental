import { getSinglePost } from "@/data";

interface PostDetailsProps {
  params: {
    postId: string;
  };
}

const PostDetails: React.FC<PostDetailsProps> = async ({ params }) => {
  const { postId } = await params;
  const post = await getSinglePost(postId);
  console.log(post);
  const { title, body,id } = post;
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
