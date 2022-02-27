import React from "react";
import './HomeScreen.css';
import SocialInfo from "../components/HomeScreen/SocialInfo";
import DropdownMeni from "../components/HomeScreen/DropdownMeni";
import Header from "../components/HomeScreen/Header";
import Carousel from "../custom/Carousel";
import Autoscroll from "../custom/Autoscroll";
import GridCards from "../components/GridCards";
import NewsGrid from "../components/HomeScreen/NewsGrid";
import ProductsGrid from "../components/HomeScreen/ProductsGrid";
import CustomGrid from "../components/HomeScreen/CustomGrid";
import Newsletter from "../components/Newsletter";
import Footer from "../components/HomeScreen/Footer";
import FooterInfo from "../components/HomeScreen/FooterInfo";

import logo from '../assets/popust.jpg'
import logo1 from '../assets/ck.jpg';
import logo2 from '../assets/versace.jpg';
import logo3 from '../assets/hugo.jpg';
import logo4 from '../assets/colmar.jpg';
import logo5 from '../assets/scotchsoda.jpg';

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
  ];

const HomeScreen = () => {



    return(
        <div id="home" className="container">
            <SocialInfo />
            <Header pageId="home" />
            <DropdownMeni />
            <Carousel dataSlider={dataSlider} />
            <Autoscroll />
            <GridCards />
            <NewsGrid />
            <ProductsGrid />
            <CustomGrid />
            <Newsletter />
            <Footer />
            <FooterInfo /> 
        </div>
    )
}

export default HomeScreen;