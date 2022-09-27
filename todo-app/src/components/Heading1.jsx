import React from "react";
//Create a form that takes in User's name and returns it after greeting
//Create a variable "greeting" to display a greeting at the current Time
//Create a variable to get Time of day
//Set conditions to display greeting of the day

function Heading1() {


var greeting = "";
var time = new Date();
var currentTime = time.getHours();
var greetingStyle = {
    color: ""

}
if ( currentTime < 6 ) {
    greeting = "why are you up?🙂"
    greetingStyle.color="brown";
} else if (currentTime < 12 ) {
    greeting = "Good morning!🌤";
    greetingStyle.color="yellow";
}else if ( currentTime < 18 ){
    greeting = "Good afternoon🌞";
    greetingStyle.color="blue";
} else {
    greeting = "Good night.🌥";
    greetingStyle.color="green";
}

return <h1 className="" style={greetingStyle}>Tomi, {greeting}</h1>

}







export default Heading1;