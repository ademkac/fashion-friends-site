import React, {useState} from "react";
import Footer from "../components/HomeScreen/Footer";
import FooterInfo from "../components/HomeScreen/FooterInfo";
import Header from "../components/MensScreen/Header";
import SocialInfo from "../components/HomeScreen/SocialInfo";
import DropdownMeni from "../components/MensScreen/DropdownMeni";
import Newsletter from "../components/Newsletter";
import './HomeScreen.css';

import logo from '../assets/popust.jpg'
import logo1 from '../assets/levisMuski.jpg';
import logo2 from '../assets/versace.jpg';
import logo3 from '../assets/hugo.jpg';
import logo4 from '../assets/colmar.jpg';
import logo5 from '../assets/scotchsoda.jpg';
import logo6 from '../assets/tommyMuski.jpg';
import Carousel from "../custom/Carousel";
import GridUnderSlider from "../components/MensScreen/GridUnderSlider";

const dataSlider = [
    {
      id: 1,
      title: "Lorem ipsum",
      subTitle: "Lorem",
      pic: logo
    },
    {
      id: 2,
      title: "Lorem ipsum",
      subTitle: "Lorem",
      pic: logo1
    },
    {
      id: 3,
      title: "Lorem ipsum",
      subTitle: "Lorem",
      pic: logo2
    },
    {
      id: 4,
      title: "Lorem ipsum",
      subTitle: "Lorem",
      pic: logo3
    },
    {
      id: 5,
      title: "Lorem ipsum",
      subTitle: "Lorem",
      pic: logo4
    },
    {
        id: 6,
        title: "Lorem ipsum",
        subTitle: "Lorem",
        pic: logo5
      },
      {
        id: 7,
        title: "Lorem ipsum",
        subTitle: "Lorem",
        pic: logo6
      },
  ];

const MensScreen = () => {

  const [showBtn, setShowBtn] = useState(false)
  const showChatButtonHandler = (el) =>{
    setShowBtn(el)
  }
    return(
        <div className="container">
            <SocialInfo />
            <Header showChatButton={showChatButtonHandler}/>
            <DropdownMeni showSearchBtn={showBtn}/>
            <Carousel dataSlider={dataSlider} />
            <GridUnderSlider />
            <Newsletter />
            <Footer />
            <FooterInfo />

        </div>
    )
}

export default MensScreen;