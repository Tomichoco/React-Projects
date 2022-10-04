import React from "react";
import Todo from "./Todo";
import Login from "./Login";


function App(props) {
    const isLoggedIn = props.isLoggedIn;

    return (
        <div>{isLoggedIn ? <Todo /> : <Login />}</div>
    )
}

export default App;