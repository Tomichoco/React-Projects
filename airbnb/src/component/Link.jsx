import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Links(props) {
    const [isHover, setIsHover] = useState(false);

    function handleMouseOver() {
        setIsHover(true)
    }

    function handleMouseOut() {
        setIsHover(false)
    }
    return (
        <li className="nav-item">
            <Link onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{color: isHover ? "white" : "black", backgroundColor: isHover ? "black" : "white"}} className="link" to="/">Home</Link>
            <Link className="link" to="/services">Services</Link>
            <Link className="link" to="/login">Login</Link>
        </li>
    )
}



