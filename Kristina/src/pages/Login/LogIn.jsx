import { useState } from "react";
import altrinLogo from "../../assets/altrin.jpg";
import studdyLogo from "../../assets/studdy.png";
import "./LogIn.css";
import Header from "../../components/Header/Header.jsx";
import Button from "../../components/Button/Button.jsx";

import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const navigate = useNavigate();
  function hendleClick() {
    navigate("/dashboard");
  }

  return (
    <>
      <main className="login-page">
        <div className="LoginBlock">
          <img
            src={studdyLogo}
            className="Logo"
            alt="Studdy logo"
            width="60"
            height="60"
          />
          <h1>Log In</h1>
          <h3>Створіть свій затишний простір для навчання</h3>
          <form className="LoginForm">
            <label htmlFor="email">Електронна пошта</label>
            <input type="email" id="email" placeholder="Електронна пошта" />
            <label htmlFor="password">Пароль</label>
            <input type="password" id="password" placeholder="Пароль" />
          </form>
          <br></br>
          <br></br>
          <Button onClick={hendleClick}>Увійти</Button>
          <br></br>
          <label htmlFor="login">
            Вже маєте акаунт? <a href="/signup">Зареєструватися</a>
          </label>
        </div>
      </main>
    </>
  );
}
