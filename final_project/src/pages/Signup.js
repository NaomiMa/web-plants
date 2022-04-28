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
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const { error, signup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password == confirmPassword){
      signup(email, password, phoneNumber)
    }
    else console.log('סיסמא לא תואמת')
  };

  return (
    <div>
      <Container>
        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary",
          }}
        >
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
              <br />
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
              <br />
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
            <br /> <br />
            {/* לבדוק למה הכפתור לא מתקשר */}
            {/* <Button variant="outlined">Sign up</Button> */}

            <button>sign up</button>
            {error && <p> {error} </p>}
          </form>
        </Box>
      </Container>
    </div>
  );
}
