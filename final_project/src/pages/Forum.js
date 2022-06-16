import { useCollection } from "../hook/useCollection";

// components
import ForumCard from "../components/ForumCard";
import Dashboard from "./Dashboard";
import PostCard from "../components/PostCard";
// styles
import "./Forum.css";


export default function Forum() {
  const { documents, error } = useCollection("posts");

  return (
    <div>
      <Dashboard />
      {/* <PostCard /> */}
      {/* <h2 className="page-title">פורום צמחים</h2>
      {error && <p className="error">{error}</p>}
      {documents && <PostList posts={documents} />} */}

      <ForumCard />
    </div>
  );
}
