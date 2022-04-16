import React from "react";
import { useSelector } from "react-redux";
import '../../screens/HomeScreen.css'

const SocialInfo = () =>{
    const auth = useSelector(state=>state.auth)
    return (
        <div className="socialInfo">
            <div className="leftSocial">
            <a href="https://www.facebook.com/parnice" target='_blank' rel='noreferrer'><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/blocktoinlinechanger/" target='_blank' rel='noreferrer'><i className="fab fa-instagram"></i></a>
            <a href="https://twitter.com/Ademk40821476" target='_blank' rel='noreferrer'><i className="fab fa-twitter"></i></a>
            <i className="fab fa-pinterest-p"></i>
            <a href="https://www.youtube.com/channel/UC4lq1V4kSP6c1K91eCIo-pQ" target='_blank' rel='noreferrer'><i className="fab fa-youtube"></i></a>
            </div>
            {auth.name !== null && (<span className="rightNameSocial">{auth.name}</span>)}
        </div>
    )
}

export default SocialInfo