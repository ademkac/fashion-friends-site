import React, { useState } from "react";
import {Link} from 'react-router-dom'
import './CheckoutCartScreen.css'
import DropdownMeni from "../components/HomeScreen/DropdownMeni";
import Footer from "../components/HomeScreen/Footer";
import FooterInfo from "../components/HomeScreen/FooterInfo";
import Header from "../components/HomeScreen/Header";
import SocialInfo from "../components/HomeScreen/SocialInfo";
import Newsletter from "../components/Newsletter";
import slika from '../assets/colmarPic.png'

const CheckoutCartScreen = () => {

    const [inputValue, setInputValue] = useState(1)

    const inputHandler =(e) => {
        setInputValue(e.target.value)
    }

    return(
    <div className="mainCheckoutContainer">
        <SocialInfo />
        <Header />
        <DropdownMeni />
        <div className='breadcrumbContainer'>
            <div className='insideBreadcrumbb'>
                <ul className='breadcrumblist'>
                    <li><Link to='/' className='breadcrumbLink'>Pocetna</Link></li>
                    <li><Link to='/#' className='activeBreadcrumb'>Korpa za kupovinu</Link></li>
                </ul>
            </div>
        </div>
        <div className="h2Container">
            <h2>Korpa za kupovinu</h2>
        </div>
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

                        <div className="cartInfoBody">
                            <div className="leftCartInfoBody">
                                <div className="insideLeftCartInfoBody">
                                    <div className="imageContainer">
                                       <Link to='/Guess'><img src={slika} alt=""/></Link> 
                                    </div>
                                    <div className="iconsContainer">
                                        <span><i id='pen' className="fa fa-pen"></i></span>
                                        <span><i id="xMark" className='fa fa-times'></i></span>
                                    </div>
                                </div>

                                <div className="productInfoContain">
                                    <p>Guess - 2u1 muška jakna i prsluk</p>
                                    <p><b>Velicina</b>: M</p>
                                    <p><b>Boja</b>: Multikolor</p>
                                </div>
                            </div>
                            <div className="rightCartInfoBody">
                                <p><span id="phoneSpan">Cena: </span>22.690,00 RSD</p>
                                <div className="inlineDiv"><span id="phoneSpan">Kolicina: </span><input type='number' value={inputValue} onChange={inputHandler}/></div>
                                <p><span id="phoneSpan">Ukupno: </span>22.690,00 RSD</p>
                            </div>
                            <div className="phone">
                                <span><i id='pen' className="fa fa-pen"></i></span>
                                <span><i id="xMark" className='fa fa-times'></i></span>
                            </div>
                        </div>

                        <div className="cartInfoBody">
                            <div className="leftCartInfoBody">
                                <div className="insideLeftCartInfoBody">
                                    <div className="imageContainer">
                                    <Link to='/Guess'><img src={slika} alt=""/></Link> 
                                    </div>
                                    <div className="iconsContainer">
                                        <span><i id='pen' className="fa fa-pen"></i></span>
                                        <span><i id="xMark" className='fa fa-times'></i></span>
                                    </div>
                                </div>

                                <div className="productInfoContain">
                                    <p>Guess - 2u1 muška jakna i prsluk</p>
                                    <p><b>Velicina</b>: M</p>
                                    <p><b>Boja</b>: Multikolor</p>
                                </div>
                            </div>
                            <div className="rightCartInfoBody">
                                <p><span id="phoneSpan">Cena: </span>22.690,00 RSD</p>
                                <div className="inlineDiv"><span id="phoneSpan">Kolicina: </span><input type='number' value={inputValue} onChange={inputHandler}/></div>
                                <p><span id="phoneSpan">Ukupno: </span>22.690,00 RSD</p>
                            </div>
                            <div className="phone">
                                <span><i id='pen' className="fa fa-pen"></i></span>
                                <span><i id="xMark" className='fa fa-times'></i></span>
                            </div>
                        </div>
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
                            <p>38.083,00 RSD</p>
                            <p>Dostava</p>
                            <p>0,00 RSD</p>
                        </div>
                        <div className="bottomPriceCont">
                            <p><b>Ukupno</b> <span className="pSpan">sa PDV-om</span></p>
                            <p>38.083,00 RSD</p>
                        </div>
                    </div>
                    <button>NASTAVI NA PLACANJE</button>
                </div>
            </div>
        </div>
        <Newsletter />
        <Footer />
        <FooterInfo />
    </div>
    )
}

export default CheckoutCartScreen;