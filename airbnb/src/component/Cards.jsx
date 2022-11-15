import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular, solid} from '@fortawesome/fontawesome-svg-core/import.macro';


export default function Card (props) {
    const [pop, setPop] = useState(false);
    function handleClick(event) {
        setPop((prevState) => {
            return !prevState;
        })
    }
    return (
        <div className="card--div">
                <div className="badge">
                    {

                        props.item.soldOut ? <span className="badgeText">Soldout</span> : 
                        <div onClick={handleClick}> {pop ? <FontAwesomeIcon className="heart-icon" style={{color: "f20833"}} icon={solid('heart')} /> : <FontAwesomeIcon className="heart-icon" style={{color: "e48899"}} icon={regular('heart')} />}
                        
                        </div>
                    }
                        
                </div>
            <section className="grid card--section">

                
                <Carousel slide={false} variant="dark" controls={true} interval={null}>
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

