// import React from "react";

// //import style
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardContent from "@mui/material/CardContent";
// import { Container, IconButton, Grid, Typography, Avatar } from "@mui/material";
// import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
// import { useFirestore } from "../hook/useFirestore";
// import { useAuthContext } from "../hook/useAuthContext";

// export default function PostCard({ post }) {
//     const { deleteDocument } = useFirestore("posts");
//     const { user } = useAuthContext();

//     const handleClick = () => {
//         deleteDocument(post.id);
//         // navigate("/");
//       };

//   return (
//     <div>
//       <Grid container spacing={3}>
//         <Card elevation={3}>
//           <CardHeader
//             avatar={<Avatar src={user.photoURL} />}
//             action={
//               <IconButton
//                 onClick={() => console.log("צריך להוסיף את פונקציית המחיקה")}
//               >
//                 <DeleteOutlinedIcon />
//               </IconButton>
//             }
//             title={user.name}
//             subheader={post.dueDate.toDate().toAteString()}
//             //
//           />
//           <CardContent>
//             <Typography>{post.details}</Typography>
//           </CardContent>
//         </Card>
//       </Grid>
//     </div>
//   );
// }
