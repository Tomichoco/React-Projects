import React from "react";
import { Link } from "react-router-dom";

export default function Links(props) {
    return (
        <li className="nav-item">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/services">Services</Link>
            <Link className="link" to="/login">Login</Link>
        </li>
    )
}


