import { Grass } from "@mui/icons-material";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useLogout } from "../hook/useLogout";
import "./Navbar.css";

export default function Navbar() {
  const {logout, isPending} = useLogout()
  return (
   
    <div className="navbar">
      <Container maxWidth="x1">
        <ul>
          <li className="logo">
            <Grass fontSize="medium" /> הצמח שלי
          </li>

          <Button>
            <Link to="/">Home</Link>
          </Button>

          <Button>
            <Link to="/login">Login</Link>
          </Button>
          <Button>
            <Link to="/signup">Signup</Link>
          </Button>
          <Button>
            <Link to="/plants">Plants</Link>
          </Button>
          <Button>
            <Link to="/forum">Forum</Link>
          </Button>
          {!isPending && <Button className="btn" variant="outlined" onClick={logout && Navigate}>LOGOUT</Button>}
          {isPending && <Button className="btn" variant="outlined" disabled>Logout</Button>}

        </ul>
      </Container>
      </div>
   
  );
}
