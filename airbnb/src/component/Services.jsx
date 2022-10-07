import React from "react";
import data from "./data";
import Card from "./Cards";

export default function Services(props) {
    const details = data.map(item => 
    <Card 
    key={item.id} 
    img={item.imgURL}
    description={item.title}
    price={item.price}
    location={item.location}
    phone={item.phone}
    email={item.email}

    />)

    return <div>{details}</div>
}