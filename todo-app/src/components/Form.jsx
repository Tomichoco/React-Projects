import React from "react";

function Form(props) {
    return (
        <div>
            <form>
            <input type="text" name="item" placeholder="Enter an item"/>
            <button type="button" className="btn btn-light">Add</button>
            </form>
        </div>
    )
}


export default Form;
