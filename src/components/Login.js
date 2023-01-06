import React from "react";
import "./Login.css";
import Api from "../Api.js"

export default function Login ({onReceive}) {
    async function handleGoogleLogin () {
        let result = await Api.googlePopup();
        if(result) {
            onReceive(result.user)
        }
        else {
            alert("Erro!");
        }
    }
    return (
        <div className="login">
            <button className="login--btn" onClick={handleGoogleLogin} > Logar com Google</button>
        </div>
    )
}