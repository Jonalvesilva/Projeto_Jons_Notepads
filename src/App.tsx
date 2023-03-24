import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppBar from "./componentes/AppBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <AppBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
