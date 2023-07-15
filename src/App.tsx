// import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
// import "./App.css";
// import { Header } from "./Header";
import Router from "./core/router";

export function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Header /> */}
        <Router />
      </BrowserRouter>
    </div>
  );
}
