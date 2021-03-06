import React from 'react';
import './NewsGrid.css'
import slika from '../../assets/premiata_1gif_1.gif';
import slika1 from '../../assets/moda.png';
import { Link } from 'react-router-dom';

const NewsGrid = () => {
    return (
        <div className='newsContainer'>
            <div className='insideContainer'>
                <h1>Najnovije vesti</h1>
                <p>Aktuelnosti iz sveta mode</p>
                <div className='cardsCont'>
                    <div className='twoCards'>
                        <img src={slika1} alt="" />
                        <h1>KOMAD ZA SVA VREMENA</h1>
                        <p><b>TEKSAS JAKNA</b></p>
                        <Link to='/'>Procitajte vise</Link>
                    </div>
                    <div className='twoCards'>
                        <img src={slika} alt="" />
                        <h1>URBANI SPORTSKI STIL</h1>
                        <p>MATCHING PREMIATA PATIKE ZA NJU I NJEGA</p>
                        <Link to='/'>Procitajte vise</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsGrid