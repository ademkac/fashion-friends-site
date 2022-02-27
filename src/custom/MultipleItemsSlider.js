import React from "react";
import '../components/MensScreen/GridUnderSlider.css'
import {Link} from 'react-router-dom'

const MultipleItemsSlider = (props) => {
    return (
        <div key={props.idx} className={(props.idx+1 == props.itemIndex || props.idx+1 == props.itemIn) ? 'itemContTruss' : 'nonActive'}>
            <Link className="sliderLink" key={props.idx} to={props.to}>
                <img className="imgItem" src={props.slika} alt='' />
                <div className="textCont">
                    <p>{props.opis}</p> 
                    <p>{props.cena} RSD</p>
                </div>
            </Link>
        </div>
    )
}

export default MultipleItemsSlider;