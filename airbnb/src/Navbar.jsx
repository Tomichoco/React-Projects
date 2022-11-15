import React from "react";
import Navlinks from "./component/Link";

function Navbar() {
    return (
        <div>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg">
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navig" aria-controls="navbarTogglerDemo02" aria-expanded="false"  aria-label="Toggle navigation">
                        <span className=" btn navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="www.tomiaffar.com">d<span className="span-h">Haus.</span></a>
                    <div className="collapse navbar-collapse" id="navig">
                        <Navlinks />
                    </div>
                </nav>
            </div>
        </div>
    )

}

export default Navbar;



