import { Grass } from "@mui/icons-material";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useLogout } from "../hook/useLogout";
import { useAuthContext } from "../hook/useAuthContext";
import "./Navbar.css";

export default function Navbar() {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();

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
            <Link to="/questionnarie">שאלון</Link>
          </Button>

          {!user && (
            <>
              <Button>
                <Link to="/login">Login</Link>
              </Button>
              <Button>
                <Link to="/signup">Signup</Link>
              </Button>
            </>
          )}
          <Button>
            <Link to="/plants">Plants</Link>
          </Button>
          <Button>
            <Link to="/forum">Forum</Link>
          </Button>
         
          {user && (
            <>
              {!isPending && (
                <Button onClick={logout}>  
                  LOGOUT
                </Button>
              )}
              {isPending && (
                <Button className="btn" variant="outlined" disabled>
                  Logout
                </Button>
              )}
            </>
          )}
        </ul>
      </Container>
    </div>

    //  export default function Navbar() {
    //    const { logout, isPending } = useLogout()
    //    const { user } = useAuthContext()

    //    return (
    //      <nav className="navbar">
    //        <ul>
    //          <li className="logo">
    //            <img src={Temple} alt="dojo logo" />
    //            <span>The Dojo</span>
    //          </li>

    //            <>
    //              <li><Link to="/login">Login</Link></li>
    //              <li><Link to="/signup">Signup</Link></li>
    //            </>

    //          {user && (
    //            <li>
    //              {!isPending && <button className="btn" onClick={logout}>Logout</button>}
    //              {isPending && <button className="btn" disabled>Logging out...</button>}
    //            </li>

    //        </ul>
    //      </nav>
    //    )
    //  }
  );
}
