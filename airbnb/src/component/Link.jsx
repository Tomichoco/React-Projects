import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navlinks(props) {
    const [isHover, setIsHover] = useState(false);

    function handleMouseOver(event) {
        setIsHover(true)
        console.log(event.target.href)

    }

    function handleMouseOut() {
        setIsHover(false)
    }
    
    
    return (

        <ul className="navbar-nav">
            <li className="nav-item">
                <Link onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{color: isHover 
                ? "#000f1f" : "#5c5543", backgroundColor: isHover ? "rgb(243, 231, 207)" 
                : "rgb(243, 231, 207)"}} className="link nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{color: isHover 
                ? "#5c5c5b" : "#5c5543", backgroundColor: isHover ? "#000f1f" 
                : "rgb(243, 231, 207)"}}  className="link nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
                <Link onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{color: isHover 
                ? "rgb(243, 231, 207)" : "#5c5543", backgroundColor: isHover ? "#473e02" 
                : "rgb(243, 231, 207)"}} className="link nav-link" to="/login">Login</Link>
            </li>
        </ul>

    )
}


