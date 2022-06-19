import { useCollection } from "../hook/useCollection";
import { useState } from "react";
import { useAuthContext } from "../hook/useAuthContext";
import { IoIosAddCircleOutline } from "react-icons/io";

import { green } from '@mui/material/colors';


// components
import PostList from "../components/PostList";
import PostFilter from "./PostFilter";

// styles
import "./Dashboard.css";
import { Container, Grid } from "@mui/material";
import OnlineUsers from "../components/OnlineUsers";
import { Icon } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection("posts");
  const [filter, setFilter] = useState("all");

  const changeFilter = (newFilter) => {
    setFilter(newFilter);
  };
  console.log(filter);

  const posts = documents
    ? documents.filter((document) => {
        switch (filter) {
          case "all":
            return true;
          case "mine":
            let assignedToMe = false;
            document.createdBy.forEach((u) => {
              if (u.id === user.uid) {
                assignedToMe = true;
              }
            });
            return assignedToMe;

          case "questions":
          case "tips":
          case "news":
          case "sharings":
          case "recommendations":
            console.log(document.category, filter);
            return document.category === filter;
          default:
            return true;
        }
      })
    : null;

  return (
    <div>
      <Container>
        <h4 className="page-title">פורום הצמח שלי</h4>
        {error && <p className="error">{error}</p>}
        {documents && <PostFilter changeFilter={changeFilter} />}
        <Grid>
          <Link to="/forum/:create">
            <button className="btn">  הוספת פוסט  </button>
          </Link>
        </Grid>
        {posts && <PostList posts={posts} />}
      </Container>
    </div>
  );
}
