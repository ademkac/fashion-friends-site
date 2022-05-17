import React from "react";
import './GridCards.css';
import slika from '../assets/noviteti.png';
import slika1 from '../assets/editorial.png';
import guessSlika from '../assets/guessBrand.png'
import { Link } from "react-router-dom";

const GridCards = () => {
    return(
        <div className="gridContainer">
            <div className="cardsContainer">
                <Link to='/brendovi/Guess' className="imgContainer">
                    <img src={guessSlika} alt="" />
                    <div className="content">
                        <p>Vidi</p>
                        <h1>Brend</h1>
                    </div>
                </Link>
                <Link to='/editorial' className="imgContainer">
                    <img src={slika1} alt="" />
                    <div className="content">
                        <p>Vidi</p>
                        <h1>EDITORIJAL</h1>
                    </div>
                </Link>
                <Link to='/noviteti' className="imgContainer">
                    <img src={slika} alt="" />
                    <div className="content">
                        <p>Vidi</p>
                        <h1>Noviteti</h1>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default GridCards;