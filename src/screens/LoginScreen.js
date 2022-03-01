import React from 'react';
import DropdownMeni from '../components/HomeScreen/DropdownMeni';
import Footer from '../components/HomeScreen/Footer';
import FooterInfo from '../components/HomeScreen/FooterInfo';
import Header from '../components/HomeScreen/Header';
import SocialInfo from '../components/HomeScreen/SocialInfo';
import Newsletter from '../components/Newsletter';
import './LoginScreen.css';

const LoginScreen = () => {
    return(
    <div className='mainLoginContainer'>
        <SocialInfo />
        <Header />
        <DropdownMeni />
        <div className="loginScreenContainer">
            <div className="insideLoginScreenContainer">
                <div className="insideLeft">
                    <h3>Prijava korisnika</h3>
                    <button className="facebookBtn">
                        <div className='iconContainer'>
                            <i className="fab fa-facebook-f"></i>
                        </div>
                        <p>Sign in with Facebook</p>
                    </button>
                    <h4>REGISTROVANI KORISNICI</h4>
                    <div className='loginFormContainer'>
                        <p>Ukoliko imate nalog, prijavite sa koristeći svoju email adresu.</p>
                        <p className='labelText'>
                            Email adresa <span className='labelSpan'><sup>*</sup></span>
                        </p>
                        <input type='text' placeholder='Email adresa' />
                        <p className='labelText'>
                            Lozinka <span className='labelSpan'><sup>*</sup></span>
                        </p>
                        <input type='text' placeholder='Lozinka' />

                        <div className='checkContainer'>
                            <input type='checkbox'  />
                            <span>Zapamti me</span>
                            <div className='spanIcon'><i className='fa fa-info'></i></div>
                        </div>

                        <div className='formButtonContainer'>
                            <button>Prijava</button>
                            <p>Zaboravili ste lozinku?</p>
                        </div>
                    </div>
                </div>
                <div className="insideRight">
                    <h4>NOVI KORISNICI</h4>
                    <p>Kreiranjem naloga u našoj prodavnici bićete u mogućnosti da brže prolazite kroz proces naplate, čuvate veći broj adresa za dostavu,
                        pregledate i pratite porudžbine na Vašem nalogu i još mnogo toga.
                    </p>
                    <button>Kreirajte korisnicki nalog</button>
                </div>
            </div>
        </div>
        <Newsletter />
        <Footer />
        <FooterInfo />
    </div>
    )
}

export default LoginScreen;