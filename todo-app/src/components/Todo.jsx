import React, { useState } from "react";
import {backgroundStyle, boxStyle} from "./Styles";
import Heading1 from "./Heading1.jsx";
import Heading2 from "./Heading2.jsx";
import Footer from "./Footer.jsx";



function Todo(props) {


    const [inputText, setInputText] = useState("");
    const [list, setList] = useState([]);

    function handleChange(event) {
        const value = event.target.value;
        setInputText(value)
    }

    function handleClick(event) {
        setList((prevItems) => {
            return [...prevItems, inputText]
        })

         setInputText("");
         event.preventDefault();
    }

    function deleteItem(id) {
        setList(prevItems => {
            return prevItems.filter((item, index) => index !== id)
        })

    }

    
    return (
        <div style={backgroundStyle}>
            <Heading1 />
            <div style={boxStyle} className="box-div">
                <Heading2 text="My Todo List"/>
                <form className="list-form">
                <input onChange={handleChange} type="text" name="input-text" value={inputText}/>
                <button onClick={handleClick} className="btn" type="submit"><span>Add</span></button>
                <ul>{list.map((todoItem, index) => <li key={index} onClick={deleteItem}>{todoItem}</li>)}</ul>
                </form>
            </div>
            <Footer year={new Date().getFullYear()}/>
        </div>
        
    );
}


export default Todo;