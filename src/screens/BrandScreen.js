import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import DropdownMeni from '../components/HomeScreen/DropdownMeni';
import Header from '../components/HomeScreen/Header';
import SocialInfo from '../components/HomeScreen/SocialInfo';
import CategoriesListFilter from '../custom/CategoriesListFilter';
import './BrandScreen.css'
import slika1 from '../assets/ckGrid.png'
import slika2 from '../assets/ckGridB.png'
import slika3 from '../assets/gridCkRight.png'
import Breadcrumb from '../custom/Breadcrumb';
import { useDispatch, useSelector } from 'react-redux';
import {fetchProductsData} from '../store/products-actions'
import { productsActions } from '../store/products-slice';
import Newsletter from '../components/Newsletter';
import Footer from '../components/HomeScreen/Footer';
import FooterInfo from '../components/HomeScreen/FooterInfo';

/* const arrayOfFilters = [
     {
        kategorija: 'Sezona', podkategorija: 'Jesen-Zima'
    },
    {
        kategorija: 'Brend', podkategorija: 'Paciotti'
    },
    {
        kategorija: 'Pol', podkategorija: 'Muski'
    },
    {
        kategorija: 'Sezona', podkategorija: 'Jesen-Zima'
    },
    {
        kategorija: 'Brend', podkategorija: 'Paciotti'
    },
    {
        kategorija: 'Pol', podkategorija: 'Muski'
    } 
] */

const filterItems = [
    {
        name: 'Kategorija'
    },
    {
        name: 'Boja'
    },
    {
        name: 'Velicina'
    },
    {
        name: 'Sezona'
    },
    {
        name: 'Pol'
    },
    {
        name: 'Cena'
    },
]

const BrandScreen = (props) => {

    const [showK, setShowK] = useState(false)
    const [showV, setShowV] = useState(false)
    const [showB, setShowB] = useState(false)
    const [showS, setShowS] = useState(false)
    const [showP, setShowP] = useState(false)
    const [showC, setShowC] = useState(false)
    const [sliderValue, setSliderValue] = useState(1)
    const products = useSelector(state => state.product.products)
    const dispatch = useDispatch();
    const [clicked, setClicked] = useState(false)
    const title = useParams().nekibrend;

    const breadcrumbList = [
        {name: 'Pocetna', to: '/'},
        {name: 'Brendovi', to: '/brendovi'},
        {name: title, to: '#'},
    ]

    useEffect(()=>{
        dispatch(fetchProductsData());
        dispatch(productsActions.backToInitalState())
    }, [dispatch])

    const dropdownHandler = (name) => {
        setClicked(!clicked)
        console.log("Ime kategorije: "+name)
        
        name === 'Kategorija' ? setShowK(!showK) 
        : name === 'Boja' ? setShowB(!showB)
        : name === 'Velicina' ? setShowV(!showV)
        : name === 'Cena' ? setShowC(!showC)
        : name === 'Pol' ? setShowP(!showP)
        : setShowS(!showS)
    }

    const sliderHandler = (evt) => {
        setSliderValue(evt.target.value);
        console.log("slider value: "+sliderValue)
    }

    return(
        <div className="brandMainContainer">
            <SocialInfo />
            <Header />
            <DropdownMeni />
            <Breadcrumb list={breadcrumbList} />
            <div className='brandDescription'>
                    <div className='insideDesc'>
                        <h1>{title}</h1>
                        <p>Opis brenda {title}</p>
                    </div>
            </div>
            <div className='imageGrid'>
                <div className='insideGrid'>
                    <div className='leftGridImage'>
                        <img src={slika1} alt=''/>
                    </div>
                    <div className='rightGridImage'>
                        <div className='topRightGrid'>
                            <div className='topRightLeft'>
                                <img src={slika2} alt='' />
                            </div>
                            <div className='topRightRight'>
                                <img src={slika3} alt='' />
                            </div>
                        </div>
                        <div className='bottomRightGrid'>
                            <img src={slika1} alt='' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='mainBrandContainer'>
                    <div className='brandTwoCol'>
                        <div className='filterCon'>
                            <ul className='filterBrandList'>

                                {
                                    filterItems.map((obj, idx)=> {
                                        return (
                                            <li className='filterBrandItem' key={idx}>
                                                <div className='dropTitle'>
                                                <a onClick={()=> dropdownHandler(obj.name)}>{obj.name}</a>
                                                {((showB && obj.name === 'Boja')
                                                || (showC && obj.name === 'Cena')
                                                || (showK && obj.name === 'Kategorija')
                                                || (showP && obj.name === 'Pol')
                                                || (showS && obj.name === 'Sezona')
                                                || (showV && obj.name === 'Velicina')) === false  
                                                ?(<i className="fas fa-caret-down"></i>)
                                                :(<i className="fas fa-caret-up"></i>)}
                                                </div>
                                                {(  (showB && obj.name === 'Boja')
                                                || (showC && obj.name === 'Cena')
                                                || (showK && obj.name === 'Kategorija')
                                                || (showP && obj.name === 'Pol')
                                                || (showS && obj.name === 'Sezona')
                                                || (showV && obj.name === 'Velicina')  )  && (
                                                    <div className='dropContent'>
                                                    {obj.name === 'Kategorija'? 
                                                    (
                                                        <CategoriesListFilter brend={title} filter='category' value=''/>
                                                    ): obj.name === 'Boja' ?
                                                    (
                                                        <div className='sizeFilter'>
                                                            <Link className='bluee' to={`/brendovi/${title}/filter/colorplava`}></Link>
                                                            <Link className='greenn' to={`/brendovi/${title}/filter/colorzelena`}></Link>
                                                            <Link className='blackk' to={`/brendovi/${title}/filter/colorcrna`}></Link>
                                                            <Link className='redd' to={`/brendovi/${title}/filter/colorcrvena`}></Link>
                                                            <Link className='yelloww' to={`/brendovi/${title}/filter/colorzuta`}></Link>
                                                        </div>
                                                    ): obj.name === 'Velicina' ?
                                                    (
                                                        <div className='sizeFilter'>
                                                            <Link className='sizeItLink' to={`/brendovi/${title}/filter/sizeS`}><p>S</p></Link>
                                                            <Link className='sizeItLink' to={`/brendovi/${title}/filter/sizeM`}><p>M</p></Link>
                                                            <Link className='sizeItLink' to={`/brendovi/${title}/filter/sizeL`}><p>L</p></Link>
                                                            <Link className='sizeItLink' to={`/brendovi/${title}/filter/sizeXL`}><p>XL</p></Link>
                                                        </div>
                                                    ): obj.name === 'Sezona' ?
                                                    (
                                                        <div className='seasonFilter'>
                                                            <Link to={`/brendovi/${title}/filter/seasonJesen-Zima`} className='seasonLink'>Jesen-Zima</Link>
                                                            <Link to={`/brendovi/${title}/filter/seasonProlece-Leto`} className='seasonLink'>Prolece-Leto</Link>
                                                        </div>
                                                    ): obj.name === 'Pol' ?
                                                    (
                                                        <div className='seasonFilter'>
                                                            <Link to={`/brendovi/${title}/filter/sexMuski`} className='seasonLink'>Muskarci</Link>
                                                            <Link to={`/brendovi/${title}/filter/sexZenski`} className='seasonLink'>Zene</Link>
                                                        </div>
                                                    ): (<div className='seasonFilter'>
                                                        <input className='sliderPrice' onChange={sliderHandler} type='range' min='1' max='100' value={sliderValue}/>
                                                    </div>)}
                                                </div>
                                                )}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className='listOfProducts'>
                            <div className='productItemsContainer'>
                            {products.length === 0 && (
                                <h2>Trenutno nema dostupnih proizvoda!!!!</h2>
                            )}
                            {
                                products.map((obj, idx)=>{
                                    return(
                                        <div className='productItem' key={idx}>
                                            <img src={require(`../assets/${obj.picture}`)} alt="" />
                                            <p>{obj.name}</p>
                                            {obj.size.map((obj, idx)=>{
                                                return(
                                                    <span key={idx}>{obj.size}</span>
                                                )
                                            })}
                                            <p className='oldprice'>{obj.price} RSD</p>
                                            {obj.discount !== 0 && (
                                            <p className='discountP'>{obj.price-(obj.price*obj.discount/100)} RSD</p>
                                            )}
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                    </div>
            </div>
            <Newsletter />
            <Footer />
            <FooterInfo />
        </div>
    )
}

export default BrandScreen;