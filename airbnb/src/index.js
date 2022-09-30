import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./component/Home";
import Services from "./component/Service";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Rental from "./component/Rental";
import NoPage from "./component/NoPage";

//Import ReactDOM from react-dom
//Create a container which is basically the DOM style = document.getElementById("root")
//Create a root; const root = ReactDOM.createRoot(container)
//Render App to root; root.render(<App />)

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="services" element={<Services />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="login" element={<Login />} />
                    <Route path="rental" element={<Rental />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

