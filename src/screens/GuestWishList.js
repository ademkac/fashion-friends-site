import React, { useState } from 'react';
import DropdownMeni from '../components/HomeScreen/DropdownMeni';
import Footer from '../components/HomeScreen/Footer';
import FooterInfo from '../components/HomeScreen/FooterInfo';
import Header from '../components/HomeScreen/Header';
import SocialInfo from '../components/HomeScreen/SocialInfo';
import Newsletter from '../components/Newsletter';
import './GuestWishList.css'
import slika from '../assets/colmarPic.png'

const listOfDesiredProducts = [
    {
        opis: 'Colmar proizvod hardkodirano',
        cena: 27000,
        popust: 30,
        velicina: 'M',
        boja: 'crna'
    },
     {
        opis: 'Colmar proizvod hardkodirano',
        cena: 27000,
        popust: 20,
        velicina: 'L',
        boja: 'plava'
    }, 

]

const GuestWishList = () => {

    const [productDeleted, setProductDeleted] = useState(true)
    const [productAddedInCart, setProductAddedInCart] = useState(true)

    return(
    <div className="mainGuestWishCOn">
        <SocialInfo />
        <Header />
        <DropdownMeni />
        <div className="guestWishContainer">
            <div className="insideGuestWishContainer">
                <h3>LISTA ZELJA GOSTA</h3>
                {productDeleted && (
                    <div className='divSuccess'>
                        <i id='checkItem' className='fa fa-check'></i>
                        {
                            productAddedInCart ? (
                                <p>Guess - 2u1 muška jakna i prsluk je dodat u korpu za kupovinu</p>
                            ) : (
                                <p>Artikal je uklonjen</p>
                            )
                        }
                    </div>
                )}
                {listOfDesiredProducts.length === 0 && (
                    <div className='divInfo'>
                        <i className='fa fa-flag'></i>
                        <p>Lista želja ne sadrži proizvode</p>
                    </div>
                )}

                <ul className='productsListContainer'>
                    {listOfDesiredProducts.map((obj, idx)=> {
                        return (
                            <li key={idx} className='listItemDiv'>
                                <span className='iconContX'>
                                    <i id='xMark' className='fa fa-times'></i>
                                </span>
                                <img src={slika} alt='' />
                                <button>Dodajte u korpu</button>
                                <p>{obj.opis}</p>
                                <p className='oldprice'>{obj.cena} RSD</p>
                                <p className='discountP'>{obj.cena-(obj.cena*obj.popust/100)} RSD</p>
                                <p className='ptitle'>Velicina: </p>
                                <p className='descp'>{obj.velicina}</p>
                                <p className='ptitle'>Boja: </p>
                                <p className='descp'>{obj.boja}</p>
                            </li>
                        )
                    })}
                </ul>
                <button className='addAllInCart'>Dodajte sve u korpu</button>
            </div>
        </div>
        <Newsletter />
        <Footer />
        <FooterInfo />
    </div>
    )
}

export default GuestWishList;