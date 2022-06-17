import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AddPost from "./components/AddPost";
import Navbar from "./components/Navbar";
import Login from "./pages/Login/Login.js";
import Plants from "./pages/Plants";
import Signup from "./pages/Signup/Signup.js";
import { useLogout } from "./hook/useLogout";
import { useAuthContext } from "./hook/useAuthContext";
import OnlineUsers from "./components/OnlineUsers";
import Forum from "./pages/Forum";
import Post from "./pages/Post";
import Questionnaire from "./pages/Questionnaire";
import Home from "./pages/Home";
import image from "./image/background.jpg";
import { Opacity } from "@material-ui/icons";
import PlantsForm from "../src/components/PlantsForm";

import "./App.css";
import Results from "./components/Results";
import Create from "./pages/Create";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      <div
        className="image"
        style={{
          backgroundImage: "url(" + image + ")",
          width: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
        }}
      >
        <header className="App-header">
          {authIsReady && (
            <BrowserRouter>
              <Navbar />

              <Routes>
                <Route path="/" element={<Home />} />
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
                  element={user ? <Forum /> : <Navigate to="/login" />}
                />
                 <Route
                  path="/forum/:create"
                  element={user ? <Create /> : <Navigate to="/login" />}
                />
                <Route
                  path="/posts/:id"
                  element={user ? <Post /> : <Navigate to="/login" />}
                />
                <Route
                  path="/plants/:plantsForm"
                  element={user ? <PlantsForm /> : <Navigate to="/login" />}
                />
                <Route
                  path="/questionnarie"
                  element={<Questionnaire />} />
              <Route
                  path="/questionnarie/:results"
                  element={<Results />} />
              </Routes>
            </BrowserRouter>
          )}
        </header>
      </div>
    </div>
  );
}

export default App;
