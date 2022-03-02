import React from "react";
import DropdownMeni from "../components/HomeScreen/DropdownMeni";
import Footer from "../components/HomeScreen/Footer";
import FooterInfo from "../components/HomeScreen/FooterInfo";
import Header from "../components/HomeScreen/Header";
import SocialInfo from "../components/HomeScreen/SocialInfo";
import Newsletter from "../components/Newsletter";
import './RegisterScreen.css'

const RegisterScreen = () => {
    return(
    <div className="mainRegisterContainer">
        <SocialInfo />
        <Header />
        <DropdownMeni />
        <div className="registerScreenContainer">
            <div className="insideRegister">
                <div className="registerTitleContainer">
                    <h2>Registracija korisnika</h2>
                    <button className="facebookBtn">
                        <div className='iconContainer'>
                            <i className="fab fa-facebook-f"></i>
                        </div>
                        <p>Sign in with Facebook</p>
                    </button>
                </div>
                <div className="personalInfoContainer">
                    <h5>Licni podaci</h5>
                    <div className="inputContainers">
                        <div className="firstInputCon">
                            <p className="inputLabelContainer">
                                Ime <span className="spanLabelInput"><sup>*</sup></span>
                            </p>
                            <input type='text' placeholder="Ime" />
                        </div>
                        <div className="secondInputCon">
                            <p className="inputLabelContainer">
                                Prezime <span className="spanLabelInput"><sup>*</sup></span>
                            </p>
                            <input type='text' placeholder="Prezime" />
                        </div>
                    </div>
                </div>

                <div className="loginInfoDataContainer">
                    <h5>Informacije prijave</h5>
                    <div className="emailContainerInput">
                        <p className="labelInputEmail">Email <span className="spanLabelInput"><sup>*</sup></span></p>
                        <input type='text' placeholder="Email" />
                    </div>
                    <div className="checkInputCon">
                        <input type='checkbox' />
                        <span>Prijava na Newsletter</span>
                    </div>
                    <div className="emailContainerInput">
                        <p className="labelInputEmail">Lozinka <span className="spanLabelInput"><sup>*</sup></span></p>
                        <input type='password' placeholder="Lozinka" />
                        <div className="grayBackgroundDiv">
                            <p>Snaga lozinke: Bez lozinke</p>
                        </div>
                    </div>
                    <div className="emailContainerInput">
                        <p className="labelInputEmail">Potvrdite lozinku <span className="spanLabelInput"><sup>*</sup></span></p>
                        <input type='password' placeholder="Potvrdite lozinku" />
                    </div>
                    <div className="checkInputCon">
                        <input type='checkbox' />
                        <span>Saglasan sam sa uslovima koriscenja</span>
                    </div>
                    <div className="checkInputCon">
                        <input type='checkbox' />
                        <span>Zapamti me</span>
                        <div className='spanIcon'><i className='fa fa-info'></i></div>
                    </div>
                </div>

                <button className="createAccountBtt">Kreirajte korisnicki nalog</button>
                <button className="backToBtt">Nazad</button>
            </div>
        </div>
        <Newsletter />
        <Footer />
        <FooterInfo />
    </div>
    )
}

export default RegisterScreen;