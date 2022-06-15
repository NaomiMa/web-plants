import { Grid } from "@mui/material";
import React from "react";
import Video from "../video/video.mp4";
import image from "../image/Background2.jpg";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div
      className="home-page"
    >
      <div className="text">
        <h1 className="h1" dir="rtl">
          ברוכים הבאים לאתר הצמח שלי
        </h1>
        <h4 dir="rtl">
          מכירים את זה שאתם מחליטים שבא לכם להכניס קצת ירוק הביתה ולגדל צמח, אך
          כעבור שבוע הצמח מתחיל להראות סימני מצוקה: יובש, נשירה וסתם חוסר חיות.
          <br />
          בטח אתם לא מבינים מה עשיתם לא בסדר ואיך אצל כולם הצמחים חיים ופורחים
          ורק אתם נכשלים, אז זהו הבעיה היא לא בכם.
          <br /> צמחים כמו בני אדם שונים אחד מהשני ולא כל צמח מתאים לכל מקום,
          ולא לכל אחד מתאים טיפול שלשני מתאים.
          <br /> אנחנו כאן בצמח שלי החלטנו להוציא שאלון שיעזור לכם לדעת מה הצמח
          שהכי מתאים לכם.
        </h4>
        <button className="button-home">
        <Link to="/questionnarie">למעבר לשאלון</Link></button>
      </div>
    </div>
  );
}

// import { Button } from "@mui/material";
// import {  React, useState } from "react";
// import Video from "../video/video.mp4";

// import {
//   HeroContainer,
//   HeroBg,
//   VideoBg,
//   HeroH1,
//   HeroP,
//   HeroContent,
//   HeroBtnWrapper,
//   ArrowForward,
//   ArrowRight,
// } from "./HomeElements";
// // import { Button } from "../ButtonElements";

// const Home = () => {
//   const [hover, setHover] = useState(false);

//   const onHover = () => {
//     setHover(!hover);
//   };

//   return (
//     <HeroContainer>
//       <HeroBg>
//         <VideoBg autoPlay loop muted src={Video} type="video.mp4" />
//       </HeroBg>
//       <HeroContent>
//         <HeroH1>ברוכים הבאים לאתר הצמח שלי</HeroH1>
//         <HeroP>
//           בואו למצוא את הצמח המתאים היותר עבורכם על ידי שאלון ההתאמה שלנו
//         </HeroP>
//         <HeroBtnWrapper>
//           <Button
//             to="questionnaire"
//             onMouseEnter={onHover}
//             onMouseLeave={onHover}
//             primary="true"
//             dark="true"
//           >
//             {hover ? <ArrowForward /> : <ArrowRight />} בואו נתחיל
//           </Button>
//         </HeroBtnWrapper>
//       </HeroContent>
//     </HeroContainer>
//   );
// };

// export default Home;
