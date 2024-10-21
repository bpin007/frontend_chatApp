import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ChatPage from "./component/chatPage";
import HomePage from "./component/homePage";
// import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/chats" Component={ChatPage} />
      </Routes>
    </div>
  );
}

export default App;
