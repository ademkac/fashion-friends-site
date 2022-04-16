import React from "react";
import './BagComponent.css';
import slika from '../../assets/colmarPic.png';
import { Link } from "react-router-dom";

const BagComponent = (props) => {

    return(
        
            <div className="insidebagContainer">
                <ul id="bagList">
                    <li><Link className="bagLink" to='/muskarci/torbe/Male-torbe'>Male torbe </Link></li>  
                    <li><Link className="bagLink" to='/muskarci/torbe/Putne-torbe'>Putne torbe </Link></li>
                    
            
                </ul>
                <ul id="bagList1">
                    <li><Link className="bagLink" to='/muskarci/torbe/Rancevi'>Rancevi </Link></li>
                    <li><Link className="bagLink" to='/muskarci/torbe/Laptop-torbe'>Laptop torbe </Link></li>
                    
                </ul>
                <div className="rightContImg">
                    <Link to='/muskarci/torbe/brend'><img src={slika} alt='' /></Link>
                </div>
            </div>
    )
}

export default BagComponent;