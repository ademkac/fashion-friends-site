import React from 'react'
import './Autoscroll.css'
import slika from '../assets/disel.jpg'
import slika1 from '../assets/levisLogo.jpg'
import slika2 from '../assets/paciottiLogo.jpg'
import slika3 from '../assets/premiataLogo.jpg'
import slika4 from '../assets/tommyLogo.jpg'
import slika5 from '../assets/ckLogo.jpg'
import slika6 from '../assets/replayLogo.jpg'


import { Link } from 'react-router-dom'

const Autoscroll = () => {

    

    return(
        <div className='slider'>
            <div className='slider-track'>
                
                    <Link className='link' to='/brendovi/Diesel'><img src={slika} alt="" /> </Link >
                    <Link className='link' to='/brendovi/Levis'><img src={slika1} alt="" /> </Link >
                    <Link className='link' to='/brendovi/Cesare Paciotti'><img src={slika2} alt="" /> </Link >
                    <Link className='link' to='/brendovi/Premiata'><img src={slika3} alt="" /> </Link >
                    <Link className='link' to='/brendovi/Tommy Hilfiger'><img src={slika4} alt="" /> </Link >
                    <Link className='link' to='/brendovi/Calvin Klein'><img src={slika5} alt="" /> </Link >
                    <Link className='link' to='/brendovi/Replay'><img src={slika6} alt="" /> </Link >
                   
                   {/*  ////////////////////////// */}

                    <Link className='link' to='/brendovi/Diesel'><img src={slika} alt="" /> </Link >
                    <Link className='link' to='/brendovi/Levis'><img src={slika1} alt="" /> </Link >
                    <Link className='link' to='/brendovi/Cesare Paciotti'><img src={slika2} alt="" /> </Link >
                    <Link className='link' to='/brendovi/Premiata'><img src={slika3} alt="" /> </Link >
                    <Link className='link' to='/brendovi/Tommy Hilfiger'><img src={slika4} alt="" /> </Link >
                    <Link className='link' to='/brendovi/Calvin Klein'><img src={slika5} alt="" /> </Link >
                    <Link className='link' to='/brendovi/Replay'><img src={slika6} alt="" /> </Link >
                   
                   
            </div>
            
        </div>
    )
}

export default Autoscroll