import React from "react";
import './OutletComponent.css';
import slika from '../../assets/colmarPic.png';
import { Link } from "react-router-dom";

const OutletComponent = (props) => {

    return(
        
            <div className="insideoutletContainer">
                <div className="rightContImg">
                    <Link to='/muskarci/outlet/brend'><img src={slika} alt='' /></Link>
                </div>
            </div>
    )
}

export default OutletComponent;