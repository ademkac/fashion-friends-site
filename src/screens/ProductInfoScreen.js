import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { useParams, Link } from "react-router-dom";
import {useSwipeable} from 'react-swipeable'
import DropdownMeni from "../components/HomeScreen/DropdownMeni";
import Footer from "../components/HomeScreen/Footer";
import FooterInfo from "../components/HomeScreen/FooterInfo";
import Header from "../components/HomeScreen/Header";
import SocialInfo from "../components/HomeScreen/SocialInfo";
import Newsletter from "../components/Newsletter";
import './ProductInfoScreen.css'
import slika from '../assets/colmarPic.png'
import Breadcrumb from "../custom/Breadcrumb";
import {fetchProduct} from '../store/products-actions'
import LoadingSpinner from "../custom/LoadingSpinner";
import Notification from "../custom/Notification";

const listOfSizes = [
    {name: 'S',
     quantity: 2
    },
    {name: 'M',
     quantity: 6
    },
    {name: 'L',
     quantity: 4
    },
    {name: 'XL',
     quantity: 1
    },
]

 const listOfLinkedProducts = [
    {
        slika: slika,
        opis: "colmar",
        cena: 5000
    },
    {
        slika: slika,
        opis: "colmar2",
        cena: 5000
    },
    {
        slika: slika,
        opis: "colmar3",
        cena: 5000
    },
    {
        slika: slika,
        opis: "colmar4",
        cena: 5000
    },
     {
        slika: slika,
        opis: "colmar5",
        cena: 5000
    },
    {
        slika: slika,
        opis: "colmar6",
        cena: 5000
    }, 
]

const listOfRecentlyViewed = [
    {
        slika: slika,
        opis: "colmar2",
        cena: 5000
    },
    {
        slika: slika,
        opis: "colmar3",
        cena: 5000
    },
    {
        slika: slika,
        opis: "colmar4",
        cena: 5000
    },
     {
        slika: slika,
        opis: "colmar5",
        cena: 5000
    },
    {
        slika: slika,
        opis: "colmar6",
        cena: 5000
    },
]

const ProductInfoScreen = () => {
    const nameOfProduct = useParams().productInfo
    const [chosenSize, setChosenSize] = useState('')
    const [kolicina, setKolicina] = useState(10)
    // eslint-disable-next-line
    const [productAddedInCart, setProductAddedInCart] = useState(false)
    const [openedDetails, setOpenedDetails] = useState(false)
    const [openedInfo, setOpenedInfo] = useState(false)
    // eslint-disable-next-line
    const [paused, setPaused] = useState(false)
    const [linkedPr1, setLinkedPr1] = useState(1)
    const [linkedPr2, setLinkedPr2] = useState(2)
    const [linkedPr3, setLinkedPr3] = useState(3)
    const [linkedPr4, setLinkedPr4] = useState(4)
    const [recentlyViewedPr1, setrecentlyViewedPr1] = useState(1)
    const [recentlyViewedPr2, setrecentlyViewedPr2] = useState(2)
    const [recentlyViewedPr3, setrecentlyViewedPr3] = useState(3)
    const [recentlyViewedPr4, setrecentlyViewedPr4] = useState(4)
    const [pictures, setPictures]=useState([])
    const dispatch = useDispatch();
    const product = useSelector((state)=>state.product.product);
    const isLoading = useSelector(state=>state.product.isLoading)
    const notification = useSelector(state=>state.ui.notification)
    const [showBtn, setShowBtn] = useState(false)

    const breadcrumbList = [
        {name: 'Pocetna', to: '/'},
        {name: 'Muskarci', to: '/pol'},
        {name: 'Kategorija-odeca', to: '/pol/kategorija'},
        {name: 'Podkategorija-jakne i kaputi', to: '/pol/kategorija/podkategorija'},
        {name: nameOfProduct, to: '#'},
    ]

    const sizeHandler = (name) => {
        setChosenSize(name)
    }

    const detailsHandler = () => {
        setOpenedDetails(!openedDetails)
        openedInfo === true ? setOpenedInfo(false) : setOpenedInfo(false)
    }

    const infoHandler = () => {
        setOpenedInfo(!openedInfo)
        openedDetails ? setOpenedDetails(false) : setOpenedDetails(false)
    }

    const prevItemHandler = () => {
        setLinkedPr1(linkedPr1-1)
        setLinkedPr2(linkedPr2-1)
        setLinkedPr3(linkedPr3-1)
        setLinkedPr4(linkedPr4-1)
    }

    const prevItemHandler1 = () => {
        setrecentlyViewedPr1(recentlyViewedPr1-1)
        setrecentlyViewedPr2(recentlyViewedPr2-1)
        setrecentlyViewedPr3(recentlyViewedPr3-1)
        setrecentlyViewedPr4(recentlyViewedPr4-1)
    }

    const nextItemHandler = () => {
        setLinkedPr1(linkedPr1+1)
        setLinkedPr2(linkedPr2+1)
        setLinkedPr3(linkedPr3+1)
        setLinkedPr4(linkedPr4+1)
    }

    const nextItemHandler1 = () => {
        setrecentlyViewedPr1(recentlyViewedPr1+1)
        setrecentlyViewedPr2(recentlyViewedPr2+1)
        setrecentlyViewedPr3(recentlyViewedPr3+1)
        setrecentlyViewedPr4(recentlyViewedPr4+1)
    }

    const handlers = useSwipeable({
        onSwipedLeft: ()=> nextItemHandler(),
        onSwipedRight: ()=> prevItemHandler()
    })

    const handlers1 = useSwipeable({
        onSwipedLeft: ()=> nextItemHandler1(),
        onSwipedRight: ()=> prevItemHandler1()
    })

    const showChatButtonHandler = (el) =>{
        setShowBtn(el)
      }

    useEffect(()=>{
        dispatch(fetchProduct(1))
        product.picture.map(obj=>{
           return setPictures(...pictures, URL.createObjectURL(obj.picture))
        })
    }, [dispatch])

    useEffect(()=>{
        if(chosenSize !== ''){
            const chosen = listOfSizes.find((obj)=>obj.name === chosenSize);
            setKolicina(chosen.quantity)
        }

        if(linkedPr1 === 1) {
            document.getElementById('bttback').style.display = 'none'
        }else if(linkedPr1 !== 1){
            document.getElementById('bttback').style.display = 'inline'
        }

        if(linkedPr4 === listOfLinkedProducts.length) {
            document.getElementById('bttfor').style.display = 'none'
        }else if(linkedPr4 !== listOfLinkedProducts.length){
            document.getElementById('bttfor').style.display = 'inline'
        }

        if(listOfRecentlyViewed.length > 0){
            if((recentlyViewedPr1 === 1) || (listOfRecentlyViewed.length <= 4)){
                document.getElementById('bttback1').style.display = 'none'
            }else if(recentlyViewedPr2 !== 1 && (listOfRecentlyViewed.length > 4)){
                document.getElementById('bttback1').style.display = 'inline'
            }
    
            if((recentlyViewedPr4 === listOfRecentlyViewed.length) || (listOfRecentlyViewed.length <= 4)){
                document.getElementById('bttfor1').style.display = 'none'
            }else if(recentlyViewedPr4 !== listOfRecentlyViewed.length && (listOfRecentlyViewed.length > 4)){
                document.getElementById('bttfor1').style.display = 'inline'
            }
        }

       


    }, [chosenSize, linkedPr1, linkedPr4, recentlyViewedPr1, recentlyViewedPr4, listOfRecentlyViewed])

    return(
        <div className="productInfoContainer">
            <SocialInfo />
            <Header showChatButton={showChatButtonHandler}/>
            <DropdownMeni showSearchBtn={showBtn}/>
            <Breadcrumb list={breadcrumbList} />
            {productAddedInCart ? (
                <div className='divSuccess'>
                <i id='checkItem' className='fa fa-check'></i>
                {
                    productAddedInCart ? (
                        <p>Guess - 2u1 mu??ka jakna i prsluk je dodat u korpu za kupovinu</p>
                    ) : (
                        <p>Artikal je uklonjen</p>
                    )
                }
            </div>
            ): (
                <div className='divSuccesss'>
                <i id='checkItem' className='fa fa-check'></i>
                <p>Calvin Klein - Ko??ne mu??ke ??izme je dodat u listu ??elja.</p>
            </div>
            )}
            {isLoading && (
                <LoadingSpinner asOverlay />
            )}
            { product !== null && (
                <div>
                {notification && (
                    <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message} />
                )}
                <div className="productInfoCon">
                <div className="insideProductInfo">
                    <div className="productiInfoImage"> 
                        <img src={slika} alt=""/>
                        <div className="listOfOtherPic">
                            <button className="prevPic">&#10094;</button>
                                {product.picture.map((item, idx)=>{
                                    return(
                                        <img key={idx} src={item} alt="" />
                                    )
                                })}
                            <button className="nextPic">&#10095;</button>
                        </div>
                    </div>
                    <div className="productInfoData">
                        <h3>{product.brand}</h3>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                        <p>Boja: {/* {product.color} */}</p>
                        <i className="fa fa-check"></i>
                        <p>Velicina: {chosenSize}</p>
                        <div className="listOfSizes">
                            {product.size.map((obj, idx) => {
                                return (
                                    <span onClick={()=>sizeHandler(`${obj.size}`)} className="sizeItem" key={idx}>{obj.size}</span>
                                )
                            })}
                        </div>
                        {kolicina <=2  && (
                            <p className="lastPieces">Poslednji komadi</p>
                        )}
                        <div className="listOfButtons">
                            <button className="firstButt">Dodajte u korpu</button>
                            <button id="secc" className="secondButt"><i id="itButt" className="fa fa-heart"></i><span className="spanAlongHeart">&</span></button>
                            <button id="secc" className="secondButt"><i id="itButt" className="fa fa-share"></i></button>
                        </div>
                        <div className="findInStore">
                            <i className="fa fa-location-dot"></i>
                            <p>Find in-store</p>
                        </div>
                        <p className="available">Raspolozivo</p>
                        <div className="otherColors">
                            <h3>Dostupno u vise boja</h3>
                            <div className="listOfOtherColors">
                                <img src={slika} alt="" />
                                <img src={slika} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="detailsContainer">
                <div className="insideDetails">
                     <p>Detalji</p> 
                     <button onClick={detailsHandler}>
                        {openedDetails 
                     ? (<i className="fa fa-minus"></i>)
                     : (<i className="fa fa-plus"></i>)
                        }
                     </button>
                         
                </div>
                {openedDetails && (
                         <div className="detailsInfo">
                             <p>Colmar pamu??na majica kratkih rukava. Logo print. Crna boja.</p>
                         </div>
                     )}
            </div>

            <div className="infoContainer">
                <div className="insideInfo">
                     <p>Informacije</p> 
                     <button onClick={infoHandler}>
                        {openedInfo 
                     ? (<i className="fa fa-minus"></i>)
                     : (<i className="fa fa-plus"></i>)
                        }
                     </button>
                         
                </div>
                {openedInfo && (
                         <div className="infoInfo">
                             <table className="tableInfo">
                                 <tbody>
                                 <tr>
                                     <td className="infoTitle">Sifra artikla</td>
                                     <td>{product.articleCode}</td>
                                 </tr>
                                 <tr>
                                     <td className="infoTitle">Brend</td>
                                     <td>{product.brand}</td>
                                 </tr>
                                 <tr>
                                     <td className="infoTitle">Sezona</td>
                                     <td>{product.season}</td>
                                 </tr>
                                 <tr>
                                     <td className="infoTitle">Pol</td>
                                     <td>{product.sex}</td>
                                 </tr>
                                 <tr>
                                     <td className="infoTitle">Materijal</td>
                                     <td>{product.material}</td>
                                 </tr>
                                 </tbody>
                             </table>
                         </div>
                     )}
            </div>
           </div> )}

            <div className="linkedProducts">
                <div className="insideLinkedProducts">
                    <h4>Povezani proizvodi</h4>
                    <div
                    {...handlers}
                    onMouseEnter={()=>setPaused(true)}
                    onMouseLeave={()=>setPaused(false)}
                    className="listOfLinkedProducts">
                        
                        {
                            listOfLinkedProducts.map((obj, idx) => {
                                return(
                                    <div 
                                    key={idx} 
                                    className={
                                    (idx+1 === linkedPr1 
                                    || idx+1 === linkedPr2
                                    || idx+1 === linkedPr3
                                    || idx+1 === linkedPr4) ? 'linkedProudctItem' : 'nonActiveLink1'}>
                                        <Link  to={`/${obj.opis}`}>
                                        <img src={obj.slika} alt='' />
                                        <div className="linkedProudctInfo">
                                            <p>{obj.opis}</p>
                                            <p>{obj.cena}</p>
                                        </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                        <button id="bttback" onClick={prevItemHandler} className="prevLinkedProducts">&#10094;</button>
                        <button id="bttfor" onClick={nextItemHandler} className="nextLinkedProducts">&#10095;</button>
                    </div>
                </div>
            </div>

            {(listOfRecentlyViewed.length > 0) && (
                <div className="recentlyViewed">
                <div className="insideRecentlyViewed">
                <h4>Nedavno pregledani</h4>
                <div
                {...handlers1}
                className="listOfRecentlyViewedProducts">
                        
                        {
                            listOfRecentlyViewed.map((obj, idx) => {
                                return(
                                    <div 
                                    key={idx} 
                                    className={
                                    (idx+1 === recentlyViewedPr1 
                                    || idx+1 === recentlyViewedPr2
                                    || idx+1 === recentlyViewedPr3
                                    || idx+1 === recentlyViewedPr4) ? 'recentlyViewedItem' : 'nonActiveLink'}>
                                        <Link  to={`/${obj.opis}`}>
                                        <img src={obj.slika} alt='' />
                                        <div className="linkedProudctInfo">
                                            <p>{obj.opis}</p>
                                            <p>{obj.cena}</p>
                                        </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                        <button id="bttback1" onClick={prevItemHandler1} className="prevRecentlyViewed">&#10094;</button>
                        <button id="bttfor1" onClick={nextItemHandler1} className="nextRecentlyViewed">&#10095;</button>
                    </div>
                </div>
            </div>
            )}
            <Newsletter />
            <Footer />
            <FooterInfo />
        </div>
    )
}

export default ProductInfoScreen;