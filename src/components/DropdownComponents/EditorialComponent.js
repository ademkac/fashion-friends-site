import React from "react";
import './EditorialComponent.css';
import slika from '../../assets/colmarPic.png';
import { Link } from "react-router-dom";

const EditorialComponent = (props) => {

    return(
        
            <div className="insideeditorialContainer">
                <div className="editorialImg">
                    <Link to='/muskarci/editorial/brend'><img src={slika} alt='' /></Link>
                    <p>Opis</p>
                </div>
                <div className="editorialImg">
                    <Link to='/muskarci/editorial/brend'><img src={slika} alt='' /></Link>
                    <p>Opis</p>
                </div>
                <div className="editorialImg">
                    <Link to='/muskarci/editorial/brend'><img src={slika} alt='' /></Link>
                    <p>Opis</p>
                </div>
                <div className="editorialImg">
                    <Link to='/muskarci/editorial/brend'><img src={slika} alt='' /></Link>
                    <p>Opis</p>
                </div>
            </div>
    )
}

export default EditorialComponent;