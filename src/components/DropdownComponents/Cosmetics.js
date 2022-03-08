import React from "react";
import './Cosmetics.css';
import slika from '../../assets/colmarPic.png';
import { Link } from "react-router-dom";

const CosmeticsComponent = (props) => {

    return(
        
            <div className="insidecosmeticsContainer">
                <ul id="cosmeticsList">
                    <li><Link className="cosmeticsLink" to='/muskarci/kozmetika/Aksesoari'>Aksesoari </Link></li>  
                    <li><Link className="cosmeticsLink" to='/muskarci/kozmetika/Skin-Care '>Skin care </Link></li>
                    <li><Link className="cosmeticsLink" to='/muskarci/kozmetika/Fragrance'>Fragrance </Link></li>            
                </ul>
                <div className="rightContImg">
                    <Link to='/muskarci/kozmetika/brend'><img src={slika} alt='' /></Link>
                </div>
            </div>
    )
}

export default CosmeticsComponent;