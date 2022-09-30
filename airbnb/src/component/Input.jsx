import React from "react";

function Input(props) {
    return <input className="text-area" type={props.type} name={props.name} placeholder={props.placeholder}/>
}

export default Input;