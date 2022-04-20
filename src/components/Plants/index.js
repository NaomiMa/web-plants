import { Button, Container } from "@mui/material";
import React  from "react";
import YardOutlinedIcon from "@mui/icons-material/YardOutlined";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Icon2 from "../../images/basil.jpg";
import Rating from "@mui/material/Rating";



function Plants() {
 

  return (
    <div>
      <Container>
        <Card
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ maxWidth: 345 }}
        >
          <CardActionArea>
            <CardMedia component="img" height="140" image={Icon2} alt="basil" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                (ריחן) בזילקום
              </Typography>
              <Typography variant="body2" color="text.secondary">
                צמח תבלין מהפופולרים בעולם. הבזיליקום (נקרא גם ריחן) ידוע בזכות
                ריחו המוכר ובתיבול מאכלים רבים, בעיקר מהמטבח האיטלקי. בנוסף,
                הבזיליקום ידוע כצמח מרפא שעוזר לנקות את הגוף.
              </Typography>
            </CardContent>
            <Typography component="legend">דירוג הצמח</Typography>
            <Rating name="no-value" value={2} />
          </CardActionArea>
        </Card>

        <Button
          // className={classes.btn}
          onClick={() => console.log("click!")}
          variant="contained"
          startIcon={<YardOutlinedIcon />}
        >
          הוספת צמח חדש
        </Button>
      </Container>
    </div>
  );
}

export default Plants;

// import {
//   PlantsCard,
//   PlantsContainer,
//   PlantsH1,
//   PlantsH2,
//   PlantsIcon,
//   PlantsP,
//   PlantsWrapper,
// } from "./PlantsElements";
// import Icon1 from "../../images/aloe vera.jpg";
// import Icon2 from "../../images/basil.jpg";
// import Icon3 from "../../images/mint.jpg";
// import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";

// const Plants = () => {
//   return (
//     <PlantsContainer id="Plants">
//       <PlantsH1>הצמחים שלנו</PlantsH1>
//       <PlantsWrapper>
//         <PlantsCard>
//           <PlantsIcon src={Icon1} />
//           <PlantsH2>אלוורה</PlantsH2>
//           <PlantsP>כאן תוכלו למצוא מבחר של צמחים ולהוסיף צמחים חדשים</PlantsP>
//         </PlantsCard>
//         <PlantsCard>
//           <PlantsIcon src={Icon2} />
//           <PlantsH2>בזילקום</PlantsH2>
//           <PlantsP>כאן תוכלו למצוא מבחר של צמחים ולהוסיף צמחים חדשים</PlantsP>
//         </PlantsCard>
//         <PlantsCard>
//           <PlantsIcon src={Icon3} />
//           <PlantsH2>נענע</PlantsH2>
//           <PlantsP>כאן תוכלו למצוא מבחר של צמחים ולהוסיף צמחים חדשים</PlantsP>
//         </PlantsCard>
//         <Button variant="contained" alignItems="center" disableElevation>
//           הוספת צמח
//         </Button>
//       </PlantsWrapper>
//     </PlantsContainer>
//   );
// };

// export default Plants;
