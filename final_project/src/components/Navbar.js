import { Grass } from "@mui/icons-material";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hook/useLogout";
import { useAuthContext } from "../hook/useAuthContext";
import "./Navbar.css";

import Logo from "../plant-logo.svg";
export default function Navbar() {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className="navbar">
        <ul>
          <li className="logo">
            <img src={Logo} alt="dojo logo" />
            <span>הצמח שלי</span>
          </li>
          <li>
            <Link to="/">דף הבית</Link>
          </li>

          <li>
            <Link to="/questionnarie">שאלון</Link>
          </li>

          <li>
            {" "}
            <Link to="/plants">הצמחים שלי</Link>
          </li>
          <li>
            <Link to="/forum">פורום</Link>
          </li>
          {!user && (
            <>
              <li>
                <Link to="/login">התחברות</Link>
              </li>
              <li>
                <Link to="/signup">הרשמה</Link>
              </li>
            </>
          )}
          {user && (
            <li>
              {!isPending && (
                <button className="btn" onClick={logout}>
                  Logout
                </button>
              )}
              {isPending && (
                <button className="btn" disabled>
                  Logging out...
                </button>
              )}
            </li>
          )}
        </ul>
    </nav>
  );
}
