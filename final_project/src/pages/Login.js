import { useState } from "react";
import { useLogin } from "../hook/useLogin";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login, error, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="auth-form">
      <Container>
        <h2>login</h2>
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
        <br/>        <br/>

 
          {/* לבדוק למה הכפתור לא מתקשר */}
          {/* <Button variant="outlined">Sign up</Button> */}
          {!isPending && <button className="btn">login</button>} 
          {isPending && <button className="btn" disabled>loading</button>} 
          {error && <div className='error'>{ error }</div>}

        </form>
      </Container>
    </div>
  );
}
