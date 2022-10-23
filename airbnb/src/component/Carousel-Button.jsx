import React from "react";

export default function Buttons(props) {
    return (
        <div className="filter-div">
            <button className="filter-button" type="button">
                    <div className="img-text-div">
                        <span className="cover-span">
                            <a href="https://www.flaticon.com" title={props.icon}><img src={`/Image/${props.img}`} className="filter-img" alt="Filter-img" /></a>
                            <div>
                              <span className="filter-text">{props.text}</span>
                            </div>
                        </span>
                    </div>
            </button>
        </div>

        
    ) 
}