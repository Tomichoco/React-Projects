import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <form className="login--form">
            <Link to="/register">Sign-up</Link><br/>
            <label className="login-label" for="Firstname">Firstname:</label><br/>
            <input className="login-input" type="text" /><br/>
            <label className="login-label" for="Password">Password:</label><br/>
            <input className="login-input" type="text" name="fname" value="fname"/><br/>
            <button className="login-btn" type="text">Login</button>
        </form>
    )
}