import Avatar from "../components/Avatar";
import { useFirestore } from "../hook/useFirestore";
import { useAuthContext } from "../hook/useAuthContext";
import { useNavigate } from "react-router-dom";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import {  IconButton } from "@mui/material";
import { Link } from "react-router-dom";


export default function PostSummary({ plant }) {
  const { deleteDocument } = useFirestore("plants");
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleClick = () => {
    deleteDocument(plant.id);
    navigate("/plants");
  };

  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{plant.name}</h2>
        <p className="due-date">{plant.description}</p>
        <p className="details">{plant.treatmentDes}</p>
        <h4>Project assigned to:</h4>
        <div className="assigned-users">
          {/* {post.assignedUsersList.map(user => (
            <div key={user.id}>
              <Avatar src={user.photoURL} />
            </div>
          ))} */}
        </div>
      </div>
     <Link to={"/plants"}>חזרה לצמחים</Link>
    </div>
  );
}

//לסדר את התמונת פרופיל PostList and PostSummary
