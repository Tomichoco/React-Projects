import React from "react";
import Input from "./Input";
import Button from "./Button";

function Form(props) {
    return (
        <div>
            <form className="list-form">
            <Input 
            type="search"  
            placeholder="Search"

            />
            <Button 
            type="submit" 
            name="Search"
            />
            </form>
        </div>
    );
}


export default Form;