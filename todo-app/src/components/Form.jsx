import React from "react";
import Input from "./Input";
import Button from "./Button";

function Form(props) {
    return (
        <div>
            <form className="list-form">
            <Input 
            type="text" 
            name="item" 
            placeholder="Enter an item"

            />
            <Button 
            type="submit" 
            name="Add"
            />
            </form>
        </div>
    )
}


export default Form;
