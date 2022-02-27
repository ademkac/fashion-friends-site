import React from "react";
import './GridCards.css';
import slika from '../assets/editorial.jpg';
import slika1 from '../assets/moonboot.png';

const GridCards = () => {
    return(
        <div className="gridContainer">
            <div className="cardsContainer">
                <div className="imgContainer">
                    <img src={slika} alt="" />
                    <div className="content">
                        <p>Paragraf</p>
                        <h1>Editorial</h1>
                    </div>
                </div>
                <div className="imgContainer">
                    <img src={slika1} alt="" />
                    <div className="content">
                        <p>Paragraf2</p>
                        <h1>Brend</h1>
                    </div>
                </div>
                <div className="imgContainer">
                    <img src={slika} alt="" />
                    <div className="content">
                        <p>Paragraf3</p>
                        <h1>Heading</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GridCards;