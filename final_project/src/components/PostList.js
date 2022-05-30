// styles
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import "./PostList.css";

export default function PostList({ posts }) {
  console.log(posts.createdBy);
  return (
    <div>
      {posts.length === 0 && <p>No posts yet!</p>}
      {posts.map((post) => (
        <Link to={`/posts/${post.id}`} key={post.id}>
          <h4>{post.name}</h4>
          <p>נכתב בתאריך {post.dueDate.toDate().toDateString()}</p>
          <div className="assigned-to">
            <p>
                      <strong>Assigned to:</strong>
                      <p>{ post.createdBy.displayName}</p>
             
            </p>
                  <div className="avatar"> <img src={post.createdBy.photoURL} /></div>
            <ul>
              <div></div>
            
            </ul>
          </div>
        </Link>
      ))}
    </div>
  );
}

