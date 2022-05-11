import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { green } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { getAuth } from "firebase/auth";
import Avatar from "./Avatar.js";
import React from "react";
import { Container } from "@mui/material";
import { useAuthContext } from "../hook/useAuthContext";

export default function ForumCard() {
  const auth = getAuth();
  const user = auth.currentUser;

  const res = useAuthContext();

 

  return (
    <Container>
      <Card>
        
      </Card>
      <Card>
        <CardHeader
          avatar={
            <Avatar src={user.photoURL}>
              <p> שלום {user.displayName}</p>
            </Avatar>
          }
          title="קיר צמחיה"
          subheader={`${new Date().toLocaleString()}`}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            האם מישהו עשה ״קיר צמחיה״ או הסתרה משכנים עם צמחים מטפסים?
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
