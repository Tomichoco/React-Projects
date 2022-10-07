import React from "react";

export default function Card (props) {
    return (
        <section className="service--section">
        <img src= {`.../Images ${props.img}`}  alt="property-img" />
        <h3 className="service--heading">{props.description}</h3>
        <span className="service--span">{props.price}</span>
        <h3 className="service--heading">{props.location}</h3>
        <p className="service--text">{props.phone}</p>
        <p className="service--text">{props.email}</p>

    </section>
    )
}