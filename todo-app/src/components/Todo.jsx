import React from "react";
import {backgroundStyle, boxStyle} from "./Styles";
import Heading2 from "./Heading2.jsx";
import Form from "./Form";
import List from "./List";
import Footer from "./Footer.jsx";



function Todo() {
    return (
        <div style={backgroundStyle}>
            <div style={boxStyle} className="box-div">
                <Heading2 text="My Todo List"/>
                <Form />
                <List />
            </div>
            <Footer year={new Date().getFullYear()}/>
        </div>
        
    );
}


export default Todo;