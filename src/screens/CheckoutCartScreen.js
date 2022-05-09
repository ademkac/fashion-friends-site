import React, { useEffect, useState } from "react";
import './CheckoutCartScreen.css'
import DropdownMeni from "../components/HomeScreen/DropdownMeni";
import Footer from "../components/HomeScreen/Footer";
import FooterInfo from "../components/HomeScreen/FooterInfo";
import Header from "../components/HomeScreen/Header";
import SocialInfo from "../components/HomeScreen/SocialInfo";
import Newsletter from "../components/Newsletter";
import Breadcrumb from "../custom/Breadcrumb";
import { useSelector } from "react-redux";
import CheckoutCartItem from "./CheckoutCartItem";
import { Link } from "react-router-dom";

const breadcrumbList = [
    {name: 'Pocetna' , to: '/'},
    {name: 'Korpa za kupovinu', to: '/checkout/cart'},
]

const CheckoutCartScreen = () => {
    const [showBtn, setShowBtn] = useState(false)
    const [totalPrice, setTotalPrice] = useState(null)
    const cartItems = useSelector(state=>state.cart.items)
    let price = 0;

    useEffect(()=>{
        cartItems.map(item=>{
            return price+=item.price*item.quantity
         })
         console.log("price: "+price)
         setTotalPrice(price)
    }, [cartItems])

    const showChatButtonHandler = (el) =>{
        setShowBtn(el)
      }

    return(
    <div className="mainCheckoutContainer">
        <SocialInfo />
        <Header showChatButton={showChatButtonHandler} />
        <DropdownMeni showSearchBtn={showBtn}/>
        <Breadcrumb list={breadcrumbList} />
        <div className="h2Container">
            <h2>Korpa za kupovinu</h2>
        </div>
        {cartItems.length === 0 ? (
            <div className="noItemsContainer">
                <p>Nemate proizvoda u vašoj korpi za kupovinu.</p>
                <p>Kliknite <span className="inlineSpanText"><Link to='/'>ovde</Link></span> kako biste nastavili kupovinu.</p>
            </div>
        ): (
            <div className="checkoutContainer">
            <div className="insideCheckoutContainer">
                <div className="insideLeftCheckoutCon">
                    <div className="cartInfo">
                        <div className="cartInfoHeader">
                            <div className="leftCartInfoHeader">
                                <p>Proizvod</p>
                            </div>
                            <div className="rightCartInfoHeader">
                                <p>Cena</p>
                                <p>Kolicina</p>
                                <p>Ukupno</p>
                            </div>
                        </div>
                        {cartItems.map((obj, idx)=>{
                            return <CheckoutCartItem 
                            key={idx} 
                            id={obj.id}
                            slika={obj.slika}
                            title={obj.title}
                            size={obj.size}
                            color={obj.color}
                            price={obj.price}
                            />
                        })}
                        <div className="buttonsContainer">
                            <div className="leftButtonCont">
                                <button>Nastavi sa kupovinom</button>
                            </div>
                            <div className="rightButtonCont">
                                <button>Azurirajte korpu</button>
                                <button id="grayButt">Isprazni korpu za kupovinu</button> 
                            </div>
                        </div>
                        <div className="couponContainer">
                            <button>Iskoristite kupon za popust</button>
                            <div className="inputButtonCont">
                                <input type='text' placeholder="Unesite kod popusta"/>
                                <button>Iskoristite popust</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="priceInCartContainer">
                    <div className="priceInCart">
                        <div className="topPriceCont">
                            <p>Ukupno</p>
                            <p>{totalPrice},00 RSD</p>
                            <p>Dostava</p>
                            <p>0,00 RSD</p>
                        </div>
                        <div className="bottomPriceCont">
                            <p><b>Ukupno</b> <span className="pSpan">sa PDV-om</span></p>
                            <p>{totalPrice},00 RSD</p>
                        </div>
                    </div>
                    <button>NASTAVI NA PLACANJE</button>
                </div>
            </div>
        </div>
        )}
        <Newsletter />
        <Footer />
        <FooterInfo />
    </div>
    )
}

export default CheckoutCartScreen;