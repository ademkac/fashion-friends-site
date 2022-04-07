import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropdownMeni from "../components/HomeScreen/DropdownMeni";
import Footer from "../components/HomeScreen/Footer";
import FooterInfo from "../components/HomeScreen/FooterInfo";
import Header from "../components/HomeScreen/Header";
import SocialInfo from "../components/HomeScreen/SocialInfo";
import Newsletter from "../components/Newsletter";
import './RegisterScreen.css'

const RegisterScreen = () => {

    const [name, setName] = useState('')
    const [surname,setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmedPass, setConfirmedPass] = useState('')
    const [term, setTerm] = useState('')
    const [newsletter, setNewsletter] = useState('')

    const onCreateHandler = async (e)=>{
        e.preventDefault()
        try {
            await fetch('https://localhost:7263/api/UserControler/register',
            {
                method: 'POST',
                headers: {
                    "Accept":"text/plain",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    surname: surname,
                    email: email,
                    password:password,
                    newsletter: newsletter
                })
            })
        } catch (error) {
            
        }

    }

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
                            <input 
                            type='text' 
                            placeholder="Ime" 
                            value={name}
                            onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className="secondInputCon">
                            <p className="inputLabelContainer">
                                Prezime <span className="spanLabelInput"><sup>*</sup></span>
                            </p>
                            <input 
                            type='text' 
                            placeholder="Prezime" 
                            value={surname}
                            onChange={(e)=>setSurname(e.target.value)}/>
                        </div>
                    </div>
                </div>

                <div className="loginInfoDataContainer">
                    <h5>Informacije prijave</h5>
                    <div className="emailContainerInput">
                        <p className="labelInputEmail">Email <span className="spanLabelInput"><sup>*</sup></span></p>
                        <input 
                        type='text' 
                        placeholder="Email"
                        value={email} 
                        onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="checkInputCon">
                        <input 
                        type='checkbox'
                        value='da'
                        onChange={(e)=>{
                            if(newsletter === ''){
                                setNewsletter(e.target.value)
                            }else{
                                setNewsletter('')
                            }
                        }} />
                        <span>Prijava na Newsletter</span>
                    </div>
                    <div className="emailContainerInput">
                        <p className="labelInputEmail">Lozinka <span className="spanLabelInput"><sup>*</sup></span></p>
                        <input 
                        type='password' 
                        required
                        placeholder="Lozinka" 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}/>
                        <div className="grayBackgroundDiv">
                            {password === '' ? (<p>Snaga lozinke: Bez lozinke</p>) : password.split('').length <= 5 ? (<p>Snaga lozinke: Slaba</p>) : <p>Snaga lozinke: Jaka</p>}
                        </div>
                    </div>
                    <div className="emailContainerInput">
                        <p className="labelInputEmail">Potvrdite lozinku <span className="spanLabelInput"><sup>*</sup></span></p>
                        <input 
                        type='password' 
                        required
                        placeholder="Potvrdite lozinku" 
                        value={confirmedPass}
                        onChange={(e)=>setConfirmedPass(e.target.value)}/>
                    </div>
                    <div className="checkInputCon">
                        <input 
                        type='checkbox'
                        value='da'
                        checked={term === 'da'}
                        onChange={(e)=>{
                            if(term === ''){
                                setTerm(e.target.value)
                            }else{
                                setTerm('')
                            }
                        }} />
                        <span>Saglasan sam sa uslovima koriscenja</span>
                    </div>
                    <div className="checkInputCon">
                        <input type='checkbox' />
                        <span>Zapamti me</span>
                        <div className='spanIcon'><i className='fa fa-info'></i></div>
                    </div>
                </div>

                <button onClick={onCreateHandler} className="createAccountBtt">Kreirajte korisnicki nalog</button>
                <Link to='/customer/login' className="backToBtt">Nazad</Link>
            </div>
        </div>
        <Newsletter />
        <Footer />
        <FooterInfo />
    </div>
    )
}

export default RegisterScreen;