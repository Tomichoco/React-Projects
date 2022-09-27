import React from "react";
import Heading1 from "./Heading1";
import Image from "./Image";
import Form from "./Form";
import Footer from "./Footer";
import List from "./List";
import Heading2 from "./Heading2";


function App() {
    return (
        <div>
            <Image />
            <Heading1 />
            <div className="">
                <Heading2 />
                <Form />
                <List />
            </div>
            <Footer />
        </div>
        
    );
}


export default App;