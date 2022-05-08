import "./Signup.css";
import { useState } from "react";
import { useSignup } from "../hook/useSignup";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { signup, isPending, error  } = useSignup();

  const handleFileChange = (e) => {
    setThumbnail(null);
    let selected = e.target.files[0];
    console.log(selected);

    if (!selected) {
      setThumbnailError("Please select a file");
      return;
    }
    if (!selected.type.includes("image")) {
      setThumbnailError("Selected file must be an image");
      return;
    }
    if (selected.size > 100000) {
      setThumbnailError("Image file size must be less than 100kb");
      return;
    }

    setThumbnailError(null);
    setThumbnail(selected);
    console.log("thumbnail updated");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password == confirmPassword) {
      signup(email, password, displayName, thumbnail);
      console.log(email, password, displayName, thumbnail);
    } else console.log("סיסמא לא תואמת");
  };

  return (
    <div className="auth-form">
      <Container>
        <h2>הרשמה:</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <Typography variant="h6" gutterBottom component="div">
              email:
            </Typography>

            <TextField
              required
              id="outlined-password-input"
              label="email"
              type="email"
              autoComplete="username"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label>
            <Typography variant="h6" gutterBottom component="div">
              password:
            </Typography>
            <span></span>
            <TextField
              required
              id="outlined-password-input"
              label="password"
              type="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
          <label>
            <Typography variant="h6" gutterBottom component="div">
              confirm password:
            </Typography>
            <span></span>
            <TextField
              required
              id="outlined-password-input"
              label="confirm-password"
              type="password"
              autoComplete="current-password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </label>
          <label>
            <Typography variant="h6" gutterBottom component="div">
              שם משתמש:
            </Typography>
            <span></span>
            <TextField
              required
              label="שם משתמש"
              type="text"
              onChange={(e) => setDisplayName(e.target.value)}
              value={displayName}
            />
          </label>
          <label>
            <Typography variant="h6" gutterBottom component="div">
              תמונת פרופיל:
            </Typography>
            <span></span>
            <TextField
              required
              label="תמונת פרופיל"
              type="file"
              onChange={handleFileChange}
            />
            {thumbnailError && <div className="error">{thumbnailError}</div>}
          </label>
          <br /> <br />
          {/* לבדוק למה הכפתור לא מתקשר */}
          {/* <Button variant="outlined">Sign up</Button> */}
          {!isPending && <button className="btn">sign up</button>} 
          {isPending && <button className="btn" disabled>loading</button>} 
          {error && <div className='error'>{ error }</div>}

        </form>
      </Container>
    </div>
  );
}
