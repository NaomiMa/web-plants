import { useParams } from "react-router-dom";
import { useDocument } from "../hook/useDocument";
import PostComments from "./PostComments";
import PostSummary from "./PostSummary";

// styles
import "./Post.css";
import { Container, Grid, Typography } from "@mui/material";

export default function Post() {
  const { id } = useParams();
  const { document, error } = useDocument("posts", id);

  if (error) {
    return <div className="error">{error}</div>;
  }
  if (!document) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="post-details">
      <Container>
        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 2, sm: 4, md: 6 }}
          justifyContent="space-evenly"
          alignItems="baseline"
          wrap="nowrap"
        >
          <Grid item xs={6}>
            <PostSummary post={document} />
          </Grid>
          <Grid item xs>
            <PostComments post={document} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
