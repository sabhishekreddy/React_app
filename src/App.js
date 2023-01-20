import React, { useEffect } from "react";
import "./App.css";
import SubApp from "./SubApp";
import { BrowserRouter } from "react-router-dom"

function App() {
  return (<BrowserRouter>
    <SubApp />
  </BrowserRouter>);
}

export default App;

/*
Ui Page elements
1) Introduction Page
2) Home Page
3) Seller Page
4) Profile Page
5) SignIn
6) Sign Up
7) Recovery
8) About Page
9) Contact Page
10) Error Page
11) Product Page 
*/
