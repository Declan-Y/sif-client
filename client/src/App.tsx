import React from "react";
import logo from "./logo.svg";
import LoginButton from "./login";
import "./App.css";
import LogoutButton from "./logout";

function App() {
  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
    </div>
  );
}

export default App;
