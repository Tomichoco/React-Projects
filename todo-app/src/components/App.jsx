import React from "react";
import {backgroundStyle, boxStyle} from "./Styles";
import Heading1 from "./Heading1";
import Heading2 from "./Heading2.jsx";
import Form from "./Form";
import List from "./List";
import Footer from "./Footer.jsx";



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