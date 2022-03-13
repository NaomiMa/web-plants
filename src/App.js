import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import SinginPage from "./pages/singin";


function App() {
  return (
    <Router>
     
      <Routes>
        <Route path="/" component={Home} exact />
        <Route path="/singin" component={SinginPage} exact />
      </Routes>
      <Home />
    </Router>
  );
}

export default App;
