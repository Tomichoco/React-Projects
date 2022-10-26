import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <form className="login--form">
            <Link className="link-class" to="/register">Sign-up</Link><br/>
            <label className="login-label" for="Firstname">Firstname:</label><br/>
            <input className="login-input" type="text" /><br/>
            <label className="login-label" for="Password">Password:</label><br/>
            <input className="login-input" type="password" name="password" value=""/><br/>
            <button className="login-btn" type="text">Login</button>
        </form>
    )
}