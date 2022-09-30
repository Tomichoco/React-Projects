import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro';

function Home() {
    return (
        <div id="main">
            <div className="main-div">
                <div className="sub-div">
                    <h1> The <span className="heading-span">Design-Haus</span></h1>
                    <p>Modern Homes with <span className="para1-span">Exquisite Architectural Designs</span> Made <span className="para2-span">For You</span></p>
                    <div className="colblabla">
                        <div className="globe-icon">
                            <FontAwesomeIcon icon={solid('globe')} />
                        </div>
                        <div className="envelope-icon">
                            <FontAwesomeIcon icon={solid('envelope')} />
                        </div>
                        <div className="twitter-icon">
                            <FontAwesomeIcon icon={brands('Twitter')} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="decor-div">
                <h1>Hello!</h1>
            </div>
        </div>
    )
}

export default Home;

