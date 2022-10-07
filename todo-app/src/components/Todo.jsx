import React, { useState } from "react";
import {backgroundStyle, boxStyle} from "./Styles";
import Heading1 from "./Heading1.jsx";
import Heading2 from "./Heading2.jsx";
import Footer from "./Footer.jsx";



function Todo() {
    var list = [];

    const [item, setItem] = useState("");
    const [listValue, setListValue] = useState(" ");

    function handleChange(event) {
        const itemValue = event.target.value;
        setItem(() => list.push(itemValue) )
    }

    function handleClick() {
        setListValue(list.map(() => <li>{listValue}</li>))
    }

    
    return (
        <div style={backgroundStyle}>
            <Heading1 />
            <div style={boxStyle} className="box-div">
                <Heading2 text="My Todo List"/>
                <form className="list-form">
                <input onChange={handleChange} type="text" name="item-list" value={item}/>
                <button onClick={handleClick} className="btn" type="submit">Add</button>
                </form>
            </div>
            <Footer year={new Date().getFullYear()}/>
        </div>
        
    );
}


export default Todo;