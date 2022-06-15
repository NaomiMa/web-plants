import { useCollection } from "../hook/useCollection";

// components
import PostList from "../components/PostList";

// styles
import "./Forum.css";
import ForumCard from "../components/ForumCard";
import Dashboard from "./Dashboard";

export default function Forum() {
  const { documents, error } = useCollection("posts");

  return (
    <div>
      <Dashboard />
      {/* <h2 className="page-title">פורום צמחים</h2>
      {error && <p className="error">{error}</p>}
      {documents && <PostList posts={documents} />} */}
      <ForumCard />
    </div>
  );
}