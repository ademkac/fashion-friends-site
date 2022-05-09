import React, {useState} from "react";
import DropdownMeni from "../components/HomeScreen/DropdownMeni";
import Footer from "../components/HomeScreen/Footer";
import FooterInfo from "../components/HomeScreen/FooterInfo";
import Header from "../components/HomeScreen/Header";
import SocialInfo from "../components/HomeScreen/SocialInfo";
import Newsletter from "../components/Newsletter";
import './ForgotPasswordScreen.css'

const ForgotPasswordScreen = () => {

    const [showBtn, setShowBtn] = useState(false)

    const showChatButtonHandler = (el) =>{
        setShowBtn(el)
      }

    return(
    <div className="mainForgotPasswordContainer">
        <SocialInfo />
        <Header showChatButton={showChatButtonHandler}/>
        <DropdownMeni showSearchBtn={showBtn}/>
        <div className="forgotPassScreenContainer">
            <div className="insideForgotPass">
                <h3>Zaboravljena lozinka</h3>
                <div className="userEmailCon">
                    <p>Unesite svoju email adresu kako biste primili link za novo podešavanje lozinke.</p>
                    <input type='text' placeholder="Unesite Vas email"/>
                </div>

                <button className="createAccountBtt">Resetuj moju lozinku</button>
                <button className="backToBtt">Vratite se</button>
            </div>
        </div>
        <Newsletter />
        <Footer />
        <FooterInfo />
    </div>
    )
}

export default ForgotPasswordScreen;