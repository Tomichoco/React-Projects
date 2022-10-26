import React, { useState } from "react";


export default function Register(props) {
    const [fullName, setFullName] = useState({fName: "", lName: ""});
    function handleChange (event) {
        const {name, value} = event.target;
        setFullName(prevValue => {
            return {
                ...prevValue,
                [name]: value
                }

                // ALTERNATIVE
            // if (name === "fName") {
            //     return {
            //         fName: value,
            //         lName: prevValue.lName
            //     } 
            // } else if (name === "lName") {
            //     return {
            //         fName: prevValue.fName,
            //         lName: value
            //     }
            // }
        })
        event.preventDefault();
    }
    const [user, setUser] = useState("");
    function handleClick () {
        const userName = fullName.fName + " " + fullName.lName;
        setUser(userName)
    }
    const [state, setState] = useState(false);
    function handleMouseOver() {
        setState(true)
    }

    function handleMouseOut() {
        setState(false)
    }

    
    
    return (
            <form className="login-form">
                <h1 className="login-header">Welcome {user}</h1>
                <label className="login-label" for="firstname">Firstname:</label><br/>
                <input className="login-input" onChange={handleChange} type="text" value={fullName.fName} name="fName" required/><br/>
                 <label className="login-label" for="lastname">Lastname:</label><br/>
                <input className="login-input" onChange={handleChange} type="text" value={fullName.lName} name="lName" required/><br/>
                 <label className="login-label" for="password">Password:</label><br/>
                 <input className="login-input" type="password" value="" name="password"/><br/>
                <button 
                onClick={handleClick} 
                onMouseOver={handleMouseOver} 
                onMouseOut={handleMouseOut} 
                type="button" 
                class="login-btn" 
                style={{backgroundColor: state ? "white" : "black", color: state ? "black" : "white"}}>Sign-up</button>
            </form>
    )
}
