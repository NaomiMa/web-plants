import Avatar from "../components/Avatar";
import { useFirestore } from "../hook/useFirestore";
import { useAuthContext } from "../hook/useAuthContext";
import { useNavigate } from "react-router-dom";

export default function PostSummary({ post }) {
  const { deleteDocument } = useFirestore("posts");
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleClick = () => {
    deleteDocument(post.id);
    navigate.push("/");
  };

  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{post.name}</h2>
        <p className="due-date">
          Project due by {post.dueDate.toDate().toDateString()}
        </p>
        <p className="details">{post.details}</p>
        <h4>Project assigned to:</h4>
        <div className="assigned-users">
          {/* {post.assignedUsersList.map(user => (
            <div key={user.id}>
              <Avatar src={user.photoURL} />
            </div>
          ))} */}
        </div>
      </div>
      {user.uid === post.createdBy.id && (
        <button className="btn" onClick={handleClick}>
          מחיקת פוסט
        </button>
      )}
    </div>
  );
}

//לסדר את התמונת פרופיל PostList and PostSummary
