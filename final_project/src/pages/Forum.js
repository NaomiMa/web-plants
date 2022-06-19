import { useCollection } from "../hook/useCollection";

// components
import ForumCard from "../components/ForumCard";
import Dashboard from "./Dashboard";
// styles
import "./Forum.css";
import Sidebar from "../components/Sidebar";


export default function Forum() {
  const { documents, error } = useCollection("posts");

  return (
    <div>
      <Dashboard />
      {/* <h2 className="page-title">פורום צמחים</h2>
      {error && <p className="error">{error}</p>}
      {documents && <PostList posts={documents} />} */}

    </div>
  );
}
