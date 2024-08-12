import React from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Home from "./Home";
import Signup from "./component/Signup";
function App() {
  return (
    <>
      <Routes>
        <Route
          path="https://suruchi-backend.onrender.com/"
          element={<Home />}
        />
        <Route
          path="https://suruchi-backend.onrender.com/signup"
          element={<Signup></Signup>}
        />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
