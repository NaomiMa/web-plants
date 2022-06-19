import { doc } from "firebase/firestore";
import { db } from "../firebase/config";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";


//List of plants collection
export default function Results({ plants }) {


  //Delete plants function from firestore
  const handleClick = async (id) => {
    const docRef = doc(db, "plants", id);
  };

  console.log(plants);
  return (
    <Container>
      <Grid container spacing={3} dir='rtl'>
        {plants
          .sort((a, b) => Number(b.count) - Number(a.count))
          .map((plant) => (
            <Grid item key={plant.id} xs={12} sm={6} md={3}>
              <ul onClick={() => handleClick(plant.id)}>
                <Card>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="250"
                      src={plant.photoURL}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {plant.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {plant.description}
                      </Typography>
                      <br />

                      <Typography variant="body2" color="text.secondary">
                        <h2> אחוז התאמה: { parseInt((plant.count/9)*100)}%</h2>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">מידע נוסף</Button>
                    </CardActions>
                  </Card>
                </Card>
                <br />
              </ul>{" "}
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
