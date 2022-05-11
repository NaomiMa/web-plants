import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AddPost from "./components/AddPost";
import ForumCard from "./components/ForumCard";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Plants from "./pages/Plants";
import Signup from "./pages/Signup";
import { useLogout } from "./hook/useLogout";
import { useAuthContext } from "./hook/useAuthContext";

function App() {
  // const [authIsReady] = useAuthContext()
  
  return (
    <div className="App">
      <header className="App-header">
        
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Plants />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/logout" element={<useLogout /> } />
            <Route path="/plants" element={<Plants />} />
              <Route path="/forum" element={<ForumCard />} />
              {/* <Route path="/logout" element={  authIsReady ? <Navigate to = "/forum" /> : <Navigate to = "/login" />} />      */}
          </Routes>
          <AddPost />
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
