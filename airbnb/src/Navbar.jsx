import React from "react";
import List from "./component/Multipage/List";

function Navbar() {
    return (
        <div>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="www.tomiaffar.com">Design-Haus</a>
                    <ul className="navbar-nav">
                        <List />
                    </ul>
                </nav>
            </div>
        </div>
    )

}

export default Navbar;



