import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import altrinLogo from "./assets/altrin.jpg";
import "./App.css";

import Header from "./components/Header/Header.jsx";
import Button from "./components/Button/Button.jsx";

import LogIn from "./pages/Login/LogIn.jsx";
import SignUp from "./pages/Signup/SignUp.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function NavigationBar() {
  const navigate = useNavigate();

  return (
    <>
      <Button onClick={() => navigate("/login")}>Логін</Button>

      <Button onClick={() => navigate("/signup")}>Реєстрація</Button>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Dashboard />
                </>
              }
            />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
