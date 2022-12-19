import React from "react";
import './ChatIntro.css';
import logo from '../assets/logo.png'

export default function ChatIntro () {
    return (
        <div className="chatIntro">
            <img src={logo} alt="" />
            <h1>Bem vindo ao Lector Chat</h1>
            <h2>Escolha alguem para conversar.</h2>
        </div>
    )
}