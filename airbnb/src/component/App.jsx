import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Services from "./Services";
import Login from "./Login";
import Signup from "./Signup";
import Rental from "./Rental";
import NoPage from "./NoPage";



export default function App(props) {

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