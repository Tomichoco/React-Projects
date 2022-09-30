import React from "react";
import { Link } from "react-router-dom";

function List(props) {
    return (
        <li className="nav-item">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/services">Property</Link>
            <Link className="link" to="/signup">Signup</Link>
            <Link className="link" to="/login">Login</Link>
            <Link className="link" to="/rental">Rental</Link>
        </li>
    )
}

export default List;

