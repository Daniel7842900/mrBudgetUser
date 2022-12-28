import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import React from "react";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Routes>
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/" element={<Login />} />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
