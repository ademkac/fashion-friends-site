import React from "react";
import './AccessoriesComponent.css';
import slika from '../../assets/aksesoariDrop.png';
import { Link } from "react-router-dom";

const AccessoriesComponent = (props) => {

    return(
        
            <div className="insideaccessoriesContainer">
                <ul id="accessoriesList">
                    <li><Link className="accessoriesLink" to='/muskarci/aksesoari/Kaisevi'>Kaisevi </Link></li>  
                    <li><Link className="accessoriesLink" to='/muskarci/aksesoari/Kacketi'>Kacketi </Link></li>
                    <li><Link className="accessoriesLink" to='/muskarci/aksesoari/Carape'>Carape </Link></li>
                    <li><Link className="accessoriesLink" to='/muskarci/aksesoari/Ostalo'>Ostalo </Link></li>
            
                </ul>
                <ul id="accessoriesList1">
                    <li><Link className="accessoriesLink" to='/muskarci/aksesoari/Kape&Rukavice'>Kape i rukavice </Link></li>
                    <li><Link className="accessoriesLink" to='/muskarci/aksesoari/Novcanici'>Novcanici</Link></li>
                    <li><Link className="accessoriesLink" to='/muskarci/aksesoari/Salovi&Marame'>Salovi i marame</Link></li>

                </ul>
                <div className="rightContImg">
                    <Link to='/muskarci/aksesoari/brend'><img src={slika} alt='' /></Link>
                </div>
            </div>
    )
}

export default AccessoriesComponent;