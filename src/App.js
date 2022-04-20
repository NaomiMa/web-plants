import React , { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import SinginPage from "./pages/singin";
import { createMuiTheme, ThemeProvider } from "@mui/material";
import { green } from "@mui/material/colors";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";



const theme = createMuiTheme({

  //Change all primary color from mui to green color with themeProvider.
  palette: {
    primary: green
  },

  //Change all fonts from mui.
  typography: {
    fontFamily: 'Rubik',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    
  }
});



function App() {

const [plants, setPlants] = useState(null);

useEffect(() => {
  const ref = collection(db, "plants");
  getDocs(ref).then((snapshot) => {
    let results = [];
    snapshot.docs.forEach((doc) => {
      results.push({ id: doc, ...doc.data() });
    });
    setPlants(results);
    console.log(plants);
  });
}, []);  
  
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" component={Home} exact />
          <Route path="/singin" component={SinginPage} exact />
        </Routes>
        <Home />
      </Router>
    </ThemeProvider>
  );
}

export default App;
