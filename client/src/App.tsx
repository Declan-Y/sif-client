import React from "react";
import logo from "./logo.svg";
import LoginButton from "./login";
import "./App.css";
import LogoutButton from "./logout";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CallBack } from "./pages/CallBack";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/callback" element={<CallBack />} />
    </Routes>
  );
}

export default App;
