import React from "react";

function Footer() {
    var time = new Date();
    var currentYear = time.getFullYear()
    return (
        <div>
            <footer>
                <p>All Rights Reserved, Tomi Affar ©{currentYear}</p>
            </footer>
        </div>

    )
}

export default Footer;