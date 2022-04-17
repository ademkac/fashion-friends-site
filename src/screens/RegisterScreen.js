import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DropdownMeni from "../components/HomeScreen/DropdownMeni";
import Footer from "../components/HomeScreen/Footer";
import FooterInfo from "../components/HomeScreen/FooterInfo";
import Header from "../components/HomeScreen/Header";
import SocialInfo from "../components/HomeScreen/SocialInfo";
import Newsletter from "../components/Newsletter";
import './RegisterScreen.css'
import {uiActions} from '../store/ui-slice'
import {authActions} from '../store/auth-slice'
import { useDispatch, useSelector } from "react-redux";
import Notification from "../custom/Notification";
import LoadingSpinner from "../custom/LoadingSpinner";
import {validate, VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_PASSWORD, VALIDATOR_REQUIRE} from '../util/validators'

const RegisterScreen = () => {

    const [name, setName] = useState('')
    const [surname,setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmedPass, setConfirmedPass] = useState('')
    const [term, setTerm] = useState('')
    const [newsletter, setNewsletter] = useState('')
    const [loading, setLoading] = useState(false)
    const [formValid, setFormValid] = useState(false)
    const [nameInputTouched, setNameInputTouched] = useState(false)
    const [nameInputValid, setNameInputValid] = useState(false)
    const [surnameInputTouched, setSurnameInputTouched] = useState(false)
    const [surnameInputValid, setSurnameInputValid] = useState(false)
    const [emailInputTouched, setEmailInputTouched] = useState(false)
    const [emailInputValid, setEmailInputValid] = useState(false)
    const [validEmail, setValidEmail] = useState(false)
    const [emailReq, setEmailReq] = useState(false)
    const [passwordInputTouched, setPasswordInputTouched] = useState(false)
    const [passwordInputValid, setPasswordInputValid] = useState(false)
    const [validPassword, setValidPassword] = useState(false)
    const [passwordReq, setPasswordReq] = useState(false)
    const [validPasswordLength, setValidPasswordLength] = useState(false)
    const [confirmedTouched, setConfirmedTouched]= useState(false)
    const [confirmedValid, setConfirmedValid]= useState(false)
    const [termErr, setTermErr] = useState(false)
    const dispatch = useDispatch()
    const notification = useSelector((state) => state.ui.notification);
    const createBtnClasses = formValid ? 'createAccountBtt' : 'createAccountBtt disabledBtn'
    let message = ''
    let navigate = useNavigate()

    useEffect(()=>{
        if(nameInputValid && surnameInputValid && emailInputValid && ((password !== '') && (password === confirmedPass))){
            setFormValid(true)
        }else{
            setFormValid(false)
        }
    },[nameInputValid, surnameInputValid, emailInputValid, password, confirmedPass])

    const onCreateHandler = async (e)=>{
        e.preventDefault();
        setLoading(true)
        const sendData = async () => {
            const response = await fetch('https://localhost:7263/api/UserControler/create',
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
            setLoading(false)
            if(!response.ok){
                const error = await response.json()
                message = JSON.stringify(error.error)
            }
            const data = await response.json()
            return data;
         }
        try {
           await sendData().then(data=>{
            localStorage.setItem("userData", JSON.stringify({
                userId: data.data.id,
                name: data.data.name,
                token: data.data.token,
                expires: data.data.tokenExpirationTime,
                email: data.data.email
            }))
        }).then(() => {
            const storedData = JSON.parse(localStorage.getItem('userData'))
            dispatch(authActions.login(storedData))
           }).then(()=>{
            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Uspesna registacija!',
                message: "Cestitamo! Postali ste nas novi korisnik"
            }))
           }).then(()=>{
                setTimeout(()=>{
                    dispatch(uiActions.closeNotification(null))
                    navigate('/', {replace: true})
                }, 2000)
           })
        } catch (error) {
            setLoading(false)
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Neuspesna registracija!',
                message: message
            }))
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
                            onBlur={()=>setNameInputTouched(true)} 
                            value={name}
                            onChange={(e)=>{
                                setName(e.target.value)
                                setNameInputValid(validate(e.target.value,[VALIDATOR_REQUIRE()]))
                            }}/>
                            {(nameInputTouched && !nameInputValid) && (
                                <div className="errorText">
                                    <p>Molimo vas popunite ovo polje!</p>
                                </div>
                            )}
                        </div>
                        <div className="secondInputCon">
                            <p className="inputLabelContainer">
                                Prezime <span className="spanLabelInput"><sup>*</sup></span>
                            </p>
                            <input 
                            type='text' 
                            placeholder="Prezime" 
                            onBlur={()=>setSurnameInputTouched(true)}
                            value={surname}
                            onChange={(e)=>{
                                setSurname(e.target.value)
                                setSurnameInputValid(validate(e.target.value, [VALIDATOR_REQUIRE()]))
                            }}/>
                            {(surnameInputTouched && !surnameInputValid) && (
                                <div className="errorText">
                                    <p>Molimo vas popunite ovo polje!</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="loginInfoDataContainer">
                    <h5>Informacije prijave</h5>
                    <div className="emailContainerInput">
                        <p className="labelInputEmail">Email <span className="spanLabelInput"><sup>*</sup></span></p>
                        <input 
                        type='email' 
                        placeholder="Email"
                        onBlur={()=>setEmailInputTouched(true)}
                        value={email} 
                        onChange={(e)=>{
                            setEmail(e.target.value)
                            setValidEmail(validate(e.target.value, [VALIDATOR_EMAIL()]))
                            setEmailReq(validate(e.target.value, [VALIDATOR_REQUIRE()]))
                            setEmailInputValid(validEmail)
                        }}/>
                        {(emailInputTouched && !emailInputValid) && (
                                <div className="errorText">
                                    {(emailInputTouched && !emailReq)?(
                                        <p>Molimo vas da popunite ovo polje!</p>
                                    ): (emailInputTouched && !validEmail) &&(
                                        <p>Molimo vas da unesete ispravan email!</p>
                                    )}
                                    
                                </div>
                            )}
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
                        onBlur={()=>setPasswordInputTouched(true)}
                        placeholder="Lozinka" 
                        value={password}
                        onChange={(e)=>{ 
                            setPassword(e.target.value)
                            setPasswordReq(validate(e.target.value, [VALIDATOR_REQUIRE()]))
                            setValidPasswordLength(validate(e.target.value, [VALIDATOR_MINLENGTH(8)]))
                            setValidPassword(validate(e.target.value, [VALIDATOR_PASSWORD()]))
                            setPasswordInputValid(validPassword)
                        }}/>
                        <div className="grayBackgroundDiv">
                            {password === '' ? (<p>Snaga lozinke: Bez lozinke</p>) : password.split('').length <= 7 ? (<p>Snaga lozinke: Slaba</p>) : <p>Snaga lozinke: Jaka</p>}
                        </div>
                        {(passwordInputTouched && !passwordInputValid) && (
                                <div className="errorText">
                                    {(passwordInputTouched && !passwordReq)?(
                                        <p>Molimo vas da popunite ovo polje!</p>
                                    ): (passwordInputTouched && !validPasswordLength) ?(
                                        <p>Minimalna dužina ovog polja mora biti jednaka ili veća od 8 znakova.</p>
                                    ): (passwordInputTouched && validPasswordLength && !validPassword) &&(
                                        <p>Minimalno različitih tipova znakova u lozinci je 3. Tipovi znakova: mala slova, velika slova, brojevi.</p>
                                    )}
                                    
                                </div>
                            )}
                    </div>
                    <div className="emailContainerInput">
                        <p className="labelInputEmail">Potvrdite lozinku <span className="spanLabelInput"><sup>*</sup></span></p>
                        <input 
                        type='password' 
                        onBlur={()=>setConfirmedTouched(true)}
                        placeholder="Potvrdite lozinku" 
                        value={confirmedPass}
                        onChange={(e)=>{
                            setConfirmedPass(e.target.value)
                            setConfirmedValid(validate(e.target.value, [VALIDATOR_REQUIRE()]))
                        }}/>
                        {(confirmedTouched && !confirmedValid) ? (
                                <div className="errorText">
                                    <p>Molimo vas popunite ovo polje!</p>
                                </div>
                            ) : (confirmedTouched && confirmedValid && confirmedPass !== password) && (
                                <div className="errorText">
                                    <p>Molimo vas da potvrdite sifru koju ste vec uneli!</p>
                                </div>
                            )}
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
                        {(termErr && term !== 'da') && (
                            <div className="errorText">
                                <p>Morate da se slozite sa uslovima koriscenja</p>
                            </div>
                        )}
                        <span>Saglasan sam sa uslovima koriscenja</span>
                    </div>
                </div>
                {
                    !formValid ? (
                        <button  disabled className={createBtnClasses}>Kreirajte korisnicki nalog</button>
                    ) : (term !== 'da' && formValid) ? (<button onClick={()=>setTermErr(true)} className={createBtnClasses}>Kreirajte korisnicki nalog</button>) 
                    :(<button onClick={onCreateHandler} className={createBtnClasses}>Kreirajte korisnicki nalog</button>)
                }
                 {loading && (
                    <LoadingSpinner asOverlay />
                )} 
                {notification && (
                    <Notification 
                    showHandler={()=>uiActions.closeNotification(null)}
                    status={notification.status}
                    title={notification.title}
                    message={notification.message} />
                )}
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