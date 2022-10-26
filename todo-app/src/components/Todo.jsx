import React, { useState } from "react";
import {backgroundStyle, boxStyle} from "./Styles";
import Heading1 from "./Heading1.jsx";
import Heading2 from "./Heading2.jsx";
import Footer from "./Footer.jsx";



function Todo() {


    const [inputText, setInputText] = useState("");
    const [list, setList] = useState([]);

    function handleChange(event) {
        const value = event.target.value;
        setInputText(value)
    }

    function handleClick() {
        setList((prevItems) => {
            return [...prevItems, inputText]
        })

        setInputText("");
    }

    
    return (
        <div style={backgroundStyle}>
            <Heading1 />
            <div style={boxStyle} className="box-div">
                <Heading2 text="My Todo List"/>
                <form className="list-form">
                <input onChange={handleChange} type="text" name="item-list" value={inputText}/>
                <button onClick={handleClick} className="btn" type="submit"><span>Add</span></button>
                <ul>{list.map((todoItem) => <li>{todoItem}</li>)}</ul>
                </form>
            </div>
            <Footer year={new Date().getFullYear()}/>
        </div>
        
    );
}


export default Todo;