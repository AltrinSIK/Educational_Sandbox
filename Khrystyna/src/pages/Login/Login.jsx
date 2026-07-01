import { useState } from 'react'
import altrinLogo from '../../assets/altrin.jpg'
import studdyLogo from '../../assets/studdy.png'
import './Login.css'
import Header from "../../components/Header/Header.jsx";
import Button from '../../components/Button/Button.jsx'

export default function Login(){
  function hendleClick() {
        console.log("Button clicked");
    }

  return (
    <>
        <div className="LoginBlock">
            <img src={studdyLogo} className="Logo" alt="Studdy logo" width="60" height="60" />
            <h1>Login</h1>
            <h3>Створіть свій затишний простір для навчання</h3>
            <form className="LoginForm">
                <h4>Ім'я</h4>
                <input type="text" placeholder="Ім'я" />
                <h4>Прізвище</h4>
                <input type="text" placeholder="Прізвище" />
                <h4>Електронна пошта</h4>
                <input type="email" placeholder="Електронна пошта" />
                <h4>Пароль</h4>
                <input type="password" placeholder="Пароль" />
                <h4>Підтвердіть пароль</h4>
                <input type="password" placeholder="Пароль" />
            </form>
        </div>
    </>
  )
}