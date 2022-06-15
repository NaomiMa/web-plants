// styles
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import "./PostList.css";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Container, Box, Grid } from "@mui/material";

export default function PostList({ posts }) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  console.log(posts.createdBy);
  return (
    <Container>
      <div className="project-list">
        <Grid container rowSpacing={1}>
          {posts.length === 0 && <p>No posts yet!</p>}
          {posts.map((post) => (
            <Link to={`/posts/${post.id}`} key={post.id}>
              {/* <Grid item xs={10}>
                <div className="assigned-to">
                  <p>
                    <p>{post.createdBy.displayName}</p>
                  </p>
                  <div className="avatar">
                    <img src={post.createdBy.photoURL} />
                  </div>
                  <p>נכתב בתאריך {post.dueDate.toDate().toDateString()}</p>
                  <h3>{post.name}</h3>
                  <h4>{post.details}</h4>
                </div>
              </Grid> */}
            </Link>
          ))}
        </Grid>
        {/* </Grid> */}
      </div>
    </Container>
  );
}
