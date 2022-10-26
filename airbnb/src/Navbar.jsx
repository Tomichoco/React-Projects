import React from "react";
import Links from "./component/Link";

function Navbar() {
    return (
        <div>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="www.tomiaffar.com">Design<span className="span-h">H</span>aus</a>
                    <ul className="navbar-nav">
                        <Links />
                    </ul>
                </nav>
            </div>
        </div>
    )

}

export default Navbar;



