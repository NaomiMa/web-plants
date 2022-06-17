import { NavLink } from "react-router-dom"
import { useAuthContext } from '../hook/useAuthContext'
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';

// components
import Avatar from "./Avatar"

// styles & images
import "./Sidebar.css"


export default function Sidebar() {
  const { user } = useAuthContext()

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          <Avatar src={user.photoURL} />
          <p>Hey {user.displayName}</p>  
        </div>  
        <nav className="links">
          <ul>
            <li>
              <NavLink exact to="/">
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
              <Icon sx={{ color: green[500] }}>add_circle</Icon>
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
