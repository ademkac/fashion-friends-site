import React, { useState } from 'react';
import DropdownMeni from '../components/HomeScreen/DropdownMeni';
import Footer from '../components/HomeScreen/Footer';
import FooterInfo from '../components/HomeScreen/FooterInfo';
import Header from '../components/HomeScreen/Header';
import SocialInfo from '../components/HomeScreen/SocialInfo';
import Newsletter from '../components/Newsletter';
import './GuestWishList.css'

const listOfDesiredProducts = [

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
            </div>
        </div>
        <Newsletter />
        <Footer />
        <FooterInfo />
    </div>
    )
}

export default GuestWishList;