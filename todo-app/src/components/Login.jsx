import React, { useState } from "react";
import { backgroundStyle, boxStyle } from "./Styles";
import Footer from "./Footer";
 


function Login(props) {

    const [fullName, setFullName] = useState({fName: "", lName: ""});

    const [headingText, setHeadingText] = useState("");



    function handleChange(event) {
        const newValue = event.target.value;
        const inputName = event.target.name;

        setFullName( prevValue => {
            if (inputName === "fName") {
                return {
                    fName: newValue,
                    lName: prevValue.lName
                }
            } else if (inputName === "lName") {
                return {
                    lName: newValue,
                    fName: prevValue.fName
                }
                
                
            }
        })

        event.preventDefault();


    }

    function handleClick(event) {
        const newName= fullName.fName + " " + fullName.lName;
        setHeadingText(newName)

        
    
    }

    const [isMouseOver, setIsMouseOver] = useState(false);
    
    function handleMouseOver () {
        setIsMouseOver(true)

    }
    function handleMouseOut() {
        setIsMouseOver(false)
    }


    return (
        <div style={backgroundStyle}>
            <h1>Hello, {headingText}</h1>
            <form style={boxStyle} className="login-box-div">
              <input onChange={handleChange} className= "login-text-area" type="text" placeholder="Firstname" name="fName" value={fullName.fName} required/><br/>
              <input onChange={handleChange} className= "login-text-area" type="text" placeholder="Lastname" name="lName" value={fullName.lName} required/><br/>
              <input className= "login-text-area" type="password" name="password" placeholder="Password" required/><br/>
              <button 
              onClick={handleClick}
              onMouseOver={handleMouseOver} 
              onMouseOut={handleMouseOut} 
              style={{backgroundColor: isMouseOver ? "#3d5353" : "#d0e7e7"}} 
              className="login-btn" 
              type="submit">Sign-up</button>
            </form>
            <Footer year={new Date().getFullYear()}/>
        </div>
    )
}

export default Login;