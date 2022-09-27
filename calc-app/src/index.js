import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";

//Import ReactDOM from react-dom
//Create a container which is basically the DOM style = document.getElementById("root")
//Create a root; const root = ReactDOM.createRoot(container)
//Render App to root; root.render(<App />)

ReactDOM.createRoot(document.getElementById("root")).render(<App />);