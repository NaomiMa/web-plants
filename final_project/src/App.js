import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AddPost from "./components/AddPost";
import ForumCard from "./components/ForumCard";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Plants from "./pages/Plants";
import Signup from "./pages/Signup";
import { useLogout } from "./hook/useLogout";
import { useAuthContext } from "./hook/useAuthContext";
import OnlineUsers from "./components/OnlineUsers";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      <header className="App-header">
        {authIsReady && (
          <BrowserRouter>
            <Navbar />

            <Routes>
              <Route path="/" element={<Plants />} />
              <Route
                path="/login"
                element={user ? <Navigate to="/" /> : <Login />}
              />
              <Route
                path="/signup"
                element={user ? <Navigate to="/" /> : <Signup />}
              />
              <Route
                path="/logout"
                element={user ? <useLogout /> : <Navigate to="/login" />}
              />
              <Route path="/plants" element={<Plants />} />
              <Route
                path="/forum"
                element={user ? <ForumCard /> : <Navigate to="/login" />}
              />
            </Routes>
            <AddPost />
          </BrowserRouter>
        )}
      </header>
    </div>
  );
}

export default App;
