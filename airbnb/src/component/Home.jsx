import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro';

function Home() {
    return (
        <div id="main">
            <div className="main-div">
                <div className="sub-div">
                    <h1 className="home-header"> The <span className="header-span">Design-Haus</span></h1>
                    <p className="text">Modern Homes with Exquisite Architectural Designs<br/><span className="made-span">Made</span> <br/> <span className="para-span">For You</span></p>
                    <div className="home-icons">
                        <div className="icon globe-icon">
                            <FontAwesomeIcon icon={solid('globe')} />
                        </div>
                        <div className="icon envelope-icon">
                            <FontAwesomeIcon icon={solid('envelope')} />
                        </div>
                        <div className="icon twitter-icon">
                            <FontAwesomeIcon icon={brands('Twitter')} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;

