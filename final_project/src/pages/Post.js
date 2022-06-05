import { useParams } from "react-router-dom";
import { useDocument } from "../hook/useDocument";
import PostComments from "./PostComments";
import PostSummary from "./PostSummary";

// styles
import "./Post.css";

export default function Post() {
  const { id } = useParams();
  const { document, error } = useDocument("posts", id);

  if (error) {
    return <div className="error">{error}</div>;
  }
  if (!document) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="post-details">
      <PostSummary post={document} />
      <PostComments post={document} />
    </div>
  );
}
