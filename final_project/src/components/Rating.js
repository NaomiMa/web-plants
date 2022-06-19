import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { async } from "@firebase/util";
import { increment, updateDoc } from "firebase/firestore";


export default function BasicRating({ plants }) {
  const [value, setValue] = (React.useState < plants) | (null > 2);

    
    const rating = {
        allRating: increment(+value),
    numberOfRating: increment(+1)

    }
  const handleClick = async (e) => {
    updateDoc(plants.id, rating);
  };

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <button className="btn" onClick={handleClick}>
        שמירה
      </button>
    </Box>
  );
}
