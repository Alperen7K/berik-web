import "./App.css";
import React from "react";
import { Router } from "./Home";
import { BrowserRouter } from "react-router-dom";

function App() {
 return (
  <BrowserRouter>
   <Router />
  </BrowserRouter>
 );
}

export default App;

