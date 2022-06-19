import { useParams } from "react-router-dom";
import { useDocument } from "../hook/useDocument";
import PlantComments from "./PlantComments";
import PlantSummary from "./PlantSummary";

// styles
import "../pages/Post.css";
import { Container, Grid, Typography } from "@mui/material";

export default function PlantCard() {
  const { id } = useParams();
  const { document, error } = useDocument("plants", id);

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
            <PlantComments plant={document} />
          </Grid>
          <Grid item xs>
            <PlantSummary plant={document} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
