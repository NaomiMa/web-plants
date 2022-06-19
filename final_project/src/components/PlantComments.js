import { useState } from "react";
import { Timestamp } from "firebase/firestore";
import { useAuthContext } from "../hook/useAuthContext";
import { useFirestore } from "../hook/useFirestore";
import Avatar from "../components/Avatar";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Link } from "react-router-dom";


export default function ProjectComments({ plant }) {
  const { updateDocument, response } = useFirestore("plants");
  const { user } = useAuthContext();
  const [newComment, setNewComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: Timestamp.fromDate(new Date()),
      id: Math.random(),
    };
    await updateDocument(plant.id, {
      comments: [...plant.comments, commentToAdd],
    });
    if (!response.error) {
      setNewComment("");
    }
  };

  return (
    <div className="project-comments" dir="rtl">
      <h4>חוות דעת לצמח:</h4>
      <ul>
        {plant.comments.length > 0 &&
          plant.comments.map((comment) => (
            <li key={comment.id}>
              <div className="comment-author">
                <Avatar src={comment.photoURL} />
                <p>{comment.displayName}</p>
              </div>
              <div className="comment-date">
                <p>
                  {formatDistanceToNow(comment.createdAt.toDate(), {
                    addSuffix: true,
                  })}
                </p>
              </div>
              <div className="comment-content">
                <p>{comment.content}</p>
              </div>
            </li>
          ))}
      </ul>

      <form className="add-comment" onSubmit={handleSubmit}>
        <label>
          <span>הוספת חוות דעת לצמח:</span>
          <textarea
            required
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
          ></textarea>
        </label>
        <button className="btn">הוספה</button>
      </form>
    </div>
  );
}
