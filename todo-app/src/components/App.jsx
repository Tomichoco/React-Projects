import React from "react";
import background from "../Images/todo-app-bg.jpg";
import todo1 from "../Images/todo1.jpg";
import Heading1 from "./Heading1";
import Heading2 from "./Heading2.jsx";
import Form from "./Form";
import List from "./List";
import Footer from "./Footer.jsx";

const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    height: "650px",
    paddingTop: "2%",
}

const boxStyle = {
    backgroundImage: `url(${todo1})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover", 
}

function App() {
    return (
        <div style={backgroundStyle}>
            <Heading1 />
            <div style={boxStyle} className="box-div">
                <Heading2 />
                <Form />
                <List />
            </div>
            <Footer />
        </div>
        
    );
}


export default App;