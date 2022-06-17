// styles
import { Link } from "react-router-dom";

// import Avatar from "./Avatar";
import "./PostList.css";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Container, IconButton, Grid, Typography, Avatar } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useFirestore } from "../hook/useFirestore";

export default function PostList({ posts }) {
  const { deleteDocument } = useFirestore("posts");

  const handleClick = () => {
    deleteDocument(posts.id);
    // navigate("/");
  };

  
  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  // }));

  console.log(posts.createdBy);
  return (
    <Container>
      <div className="project-list">
        <Grid container rowSpacing={1}>
          {posts.length === 0 && <p>No posts yet!</p>}
          {posts.map((post) => (
            <Link to={`/posts/${post.id}`} key={post.id}>
              <Grid container spacing={3}>
                <Card elevation={3}>
                  <CardHeader
                    avatar={<Avatar src={post.createdBy.photoURL} />}
                    action={
                      <IconButton
                        onClick={handleClick
                        }
                      >
                        <DeleteOutlinedIcon />
                      </IconButton>
                    }
                    title={post.name}
                    subheader={post.dueDate.toDate().toString()}
                    //
                  />
                  <CardContent>
                    <Typography>{post.details}</Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    height="250"
                    src={post.photoURL}
                  />
                </Card>
              </Grid>
            </Link>
          ))}
        </Grid>
      </div>
    </Container>
  );
}

