import { useState } from 'react'
import altrinLogo from '../../assets/altrin.jpg'
import studdyLogo from '../../assets/studdy.png'
import './Login.css'
import Header from "../../components/Header/Header.jsx";
import Button from '../../components/Button/Button.jsx'

import { useNavigate } from 'react-router-dom';

export default function LogIn(){
  const navigate = useNavigate();
  function hendleClick() {
        navigate('/dashboard');
    }

  return (
    <>
        <div className="LoginBlock">
            <img src={studdyLogo} className="Logo" alt="Studdy logo" width="60" height="60" />
            <h1>Log In</h1>
            <h3>Створіть свій затишний простір для навчання</h3>
            <form className="LoginForm">
                <label htmlFor="firstName">Ім'я</label>
                <input type="text" id="firstName" placeholder="Ім'я" />
                <label htmlFor="lastName">Прізвище</label>
                <input type="text" id="lastName" placeholder="Прізвище" />
                <label htmlFor="email">Електронна пошта</label>
                <input type="email" id="email" placeholder="Електронна пошта" />
                <label htmlFor="password">Пароль</label>
                <input type="password" id="password" placeholder="Пароль" />
                <label htmlFor="confirmPassword">Підтвердіть пароль</label>
                <input type="password" id="confirmPassword" placeholder="Пароль" />
            </form>
            <br></br>
            <checkbox>
                <input type="checkbox" id="agreement" />
                <label htmlFor="agreement">Реєструючись, ви погоджуєтеся з нашими <a href="/terms" target="_blank" rel="noopener noreferrer">Умовами використання</a> та <a href="/privacy" target="_blank" rel="noopener noreferrer">Політикою конфіденційності</a>.</label>
            </checkbox>
            <br></br>
            <Button onClick={hendleClick}>Зареєструватися</Button>
            <br></br>
            <label htmlFor="login">Вже маєте акаунт? <a href="/login">Увійти</a></label>
        </div>
    </>
  )
}