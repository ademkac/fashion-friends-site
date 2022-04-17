import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DropdownMeni from '../components/HomeScreen/DropdownMeni';
import Footer from '../components/HomeScreen/Footer';
import FooterInfo from '../components/HomeScreen/FooterInfo';
import Header from '../components/HomeScreen/Header';
import {uiActions} from '../store/ui-slice'
import { useDispatch, useSelector } from "react-redux";
import SocialInfo from '../components/HomeScreen/SocialInfo';
import Newsletter from '../components/Newsletter';
import Notification from "../custom/Notification";
import LoadingSpinner from "../custom/LoadingSpinner";
import {validate, VALIDATOR_EMAIL, VALIDATOR_REQUIRE} from '../util/validators'
import './LoginScreen.css';
import { authActions } from '../store/auth-slice';

const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword]= useState('')
    const [emailInputTouched, setEmailInputTouched] = useState(false)
    const [passwordInputTouched, setPasswordInputTouched] = useState(false)
    const [emailInputValid, setEmailInputValid] = useState(false)
    const [passwordInputValid, setPasswordInputValid] = useState(false)
    const [validEmail, setValidEmail] = useState(false)
    const [emailReq, setEmailReq] = useState(false)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const notification = useSelector((state)=>state.ui.notification)
    let mess = '';
    let navigate = useNavigate()



    const loginBtnHandler = async (e) => {
        e.preventDefault();
        setLoading(true)
        const sendData = async () => {
           const res =  await fetch('https://localhost:7263/api/UserControler/login',{
                method: 'POST',
                headers: {
                    "Accept":"text/plain",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            
            setLoading(false);
            if(!res.ok){
                const error = await res.json()
                mess = JSON.stringify(error.error)
            }
            const data = await res.json()
            return data
        }
        try {
            
            await sendData().then((data)=>{
                localStorage.setItem("userData", JSON.stringify({
                    userId: data.data.id,
                    name: data.data.name,
                    token: data.data.token,
                    expires: data.data.tokenExpirationTime,
                    email: data.data.email
                }))
                
            }).then(()=>{
                dispatch(uiActions.showNotification({
                    status: 'success',
                    title: 'Uspesna prijava!',
                    message: "Dobrodosli!"
                }))
            }).then(() => {
                const storedData = JSON.parse(localStorage.getItem('userData'))
                dispatch(authActions.login(storedData))
               }).then(()=>{
                    setTimeout(()=>{
                        dispatch(uiActions.closeNotification(null))
                        navigate('/', {replace: true})
                    }, 2000)
            })
        } catch (error) {
            setLoading(false);
            console.log("Neuspesno je")
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Neuspesna prijava!',
                message: mess
            }))
        }
    }

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
                        <input 
                        type='email' 
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value)
                            setValidEmail(validate(e.target.value, [VALIDATOR_EMAIL()]))
                            setEmailReq(validate(e.target.value, [VALIDATOR_REQUIRE()]))
                            setEmailInputValid(validEmail)
                        }}
                        onBlur={()=>setEmailInputTouched(true)}
                        placeholder='Email adresa' />
                        {(emailInputTouched && !emailInputValid) && (
                                <div className="errorText">
                                    {(emailInputTouched && !emailReq)?(
                                        <p>Molimo vas da popunite ovo polje!</p>
                                    ): (emailInputTouched && !validEmail) &&(
                                        <p>Molimo vas da unesete ispravan email!</p>
                                    )}
                                </div>
                            )}
                        <p className='labelText'>
                            Lozinka <span className='labelSpan'><sup>*</sup></span>
                        </p>
                        <input 
                        type='password' 
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value)
                            setPasswordInputValid(validate(e.target.value, [VALIDATOR_REQUIRE()]))
                        }}
                        onBlur={()=>setPasswordInputTouched(true)}
                        placeholder='Lozinka' />
                        {(passwordInputTouched && !passwordInputValid) &&(
                            <div className="errorText">
                                <p>Molimo vas da popunite ovo polje!</p>
                            </div>
                        )}
                        <div className='checkContainer'>
                            <input type='checkbox'  />
                            <span>Zapamti me</span>
                            <div className='spanIcon'><i className='fa fa-info'></i></div>
                        </div>

                        <div className='formButtonContainer'>
                            <button onClick={loginBtnHandler}>Prijava</button>
                            <p>Zaboravili ste lozinku?</p>
                        </div>
                        {loading && (
                            <LoadingSpinner asOverlay />
                        )} 
                        
                    </div>
                </div>
                <div className="insideRight">
                    <h4>NOVI KORISNICI</h4>
                    <p>Kreiranjem naloga u našoj prodavnici bićete u mogućnosti da brže prolazite kroz proces naplate, čuvate veći broj adresa za dostavu,
                        pregledate i pratite porudžbine na Vašem nalogu i još mnogo toga.
                    </p>
                    <Link to='/customer/register'>Kreirajte korisnicki nalog</Link>
                </div>
                {notification && (
                            <Notification 
                            showHandler={()=>uiActions.closeNotification(null)}
                            status={notification.status}
                            title={notification.title}
                            message={notification.message} />
                        )}
            </div>
        </div>
        <Newsletter />
        <Footer />
        <FooterInfo />
    </div>
    )
}

export default LoginScreen;