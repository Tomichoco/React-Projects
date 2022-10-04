import React from "react";

function Footer(props) {
    return (
        <div>
            <footer className="footer">
                <p className="footer-para">All Rights Reserved, Tomi Affar © {props.year}</p>
            </footer>
        </div>

    )
}

export default Footer;