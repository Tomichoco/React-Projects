import React from "react";
import {data} from "./data";
import FilterButtons from "./Filter-Button"
import Card from "./Cards";

export default function Services(props) {

    

    return (
        <div className="service-div">
            <FilterButtons />
            {
                data.map(data => (
                    <Card key={data.id} item={data} />
                ))
            }
        </div>
    )
}