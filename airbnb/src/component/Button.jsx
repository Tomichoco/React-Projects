import React from "react";

function Button(props) {
    return <button type={props.type} className="btn">{props.name}</button>
}

export default Button;