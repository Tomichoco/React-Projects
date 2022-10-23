import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';


export default function Card (props) {
    const [pop, setPop] = useState(false);
    function handleClick(event) {
        setPop(true)
        const clickCount = event.detail;
        if (clickCount > 1) {
            setPop(false)
        }

        console.log(event);
    }
    return (
        <div className="card--div">
                <div>
                    {

                        props.item.soldOut ? <span className="badgeText">Soldout</span> : 
                        <FontAwesomeIcon onClick={handleClick}className="heart-icon" style={{color: pop ? "red" : "pink"}} icon={regular('heart')} />
                    
                    }
                        
                </div>
            <section className="grid card--section">

                
                <Carousel slide={false} variant="dark" controls={true}>
                    {
                        props.item.images.map((item,i) => (
                            <Carousel.Item key={i}>
                                <img className="details--img" src={`/Image/${item}`} alt="pic" />
                            </Carousel.Item>
                        ))
                    }
                </Carousel>

                <div className="card--details g-col-lg-3 g-col-md-4 g-col-sm-6">
                    <div>
                        <span className="card--location">{props.item.location}</span>
                    </div>
                    <div>
                        <span className="service--heading">{props.item.title}</span>
                    </div>
                    <div>
                        <span className="service--heading">${props.item.price}</span>
                    </div>
                </div>
            </section>
        </div>
    )
}

