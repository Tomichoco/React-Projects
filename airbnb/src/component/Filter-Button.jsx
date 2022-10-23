import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Buttons from "./Carousel-Button";
import { filterData1, filterData2 } from "./Filter-data";



export default function FilterButtons (props) {
    const filter1 = filterData1.map(item => 
        <Buttons 
        key={item.id}
        {...item} 
    
        />)
    const filter2 = filterData2.map(item => 
        <Buttons 
            key={item.id}
            {...item} 
            
        />)
    return (
        <Carousel slide={false} variant="dark">
            <Carousel.Item>
            {filter1}
            </Carousel.Item>

            <Carousel.Item>
            {filter2}
            </Carousel.Item>
        </Carousel>
    )
}