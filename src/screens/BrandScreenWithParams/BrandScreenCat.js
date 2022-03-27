import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import DropdownMeni from '../../components/HomeScreen/DropdownMeni';
import Header from '../../components/HomeScreen/Header';
import SocialInfo from '../../components/HomeScreen/SocialInfo';
import CategoriesListFilter from '../../custom/CategoriesListFilter';
import '../BrandScreen.css'
import slika1 from '../../assets/ckGrid.png'
import slika2 from '../../assets/ckGridB.png'
import slika3 from '../../assets/gridCkRight.png'
import Breadcrumb from '../../custom/Breadcrumb';
import { useDispatch, useSelector } from 'react-redux';
import {productsActions} from '../../store/products-slice';
import { fetchProductsData } from '../../store/products-actions';


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

const products = [
    {
        name: 'Tommy jakna sa dva lica',
        price: 17000
    },
    {
        name: 'Tommy majica sa dva lica',
        price: 7000
    },
    {
        name: 'Tommy patike',
        price: 17000
    },
    {
        name: 'Tommy jakna za zimu',
        price: 12000
    },
    {
        name: 'Tommy jakna sa dva lica',
        price: 9000
    },
    {
        name: 'Tommy jakna sa dva lica',
        price: 8000
    },
]

const BrandScreenCat = (props) => {

    const [showV, setShowV] = useState(false)
    const [showB, setShowB] = useState(false)
    const [showS, setShowS] = useState(false)
    const [showP, setShowP] = useState(false)
    const [showC, setShowC] = useState(false)
    const [sliderValue, setSliderValue] = useState(1)

    const [clicked, setClicked] = useState(false)
    const {nekibrend, kat} = useParams();
    const categoryProducts = useSelector(state => state.product.categoryProducts)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchProductsData())
        dispatch(productsActions.findCategoryOfBrand(kat))
    },[dispatch])

    const breadcrumbList = [
        {name: 'Pocetna', to: '/'},
        {name: 'Brendovi', to: '/brendovi'},
        {name: nekibrend, to: '#'},
    ]

    const dropdownHandler = (name) => {
        setClicked(!clicked)
        console.log("Ime kategorije: "+name)
        
         name == 'Boja' ? setShowB(!showB)
        : name == 'Velicina' ? setShowV(!showV)
        : name == 'Cena' ? setShowC(!showC)
        : name == 'Pol' ? setShowP(!showP)
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
                        <h1>{nekibrend}</h1>
                        <p>Opis brenda {nekibrend}</p>
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
                                                {((showB && obj.name == 'Boja')
                                                || (showC && obj.name == 'Cena')
                                                || (showP && obj.name == 'Pol')
                                                || (showS && obj.name == 'Sezona')
                                                || (showV && obj.name == 'Velicina')) == false  
                                                ?(<i className="fas fa-caret-down"></i>)
                                                :(<i className="fas fa-caret-up"></i>)}
                                                </div>
                                                {(  (showB && obj.name == 'Boja')
                                                || (showC && obj.name == 'Cena')
                                                || (showP && obj.name == 'Pol')
                                                || (showS && obj.name == 'Sezona')
                                                || (showV && obj.name == 'Velicina')  )  && (
                                                    <div className='dropContent'>
                                                    { obj.name == 'Boja' ?
                                                    (
                                                        <div className='sizeFilter'>
                                                            <span className='redd'></span>
                                                            <span className='bluee'></span>
                                                            <span className='greenn'></span>
                                                            <span className='blackk'></span>
                                                        </div>
                                                    ): obj.name == 'Velicina' ?
                                                    (
                                                        <div className='sizeFilter'>
                                                            <p>S</p>
                                                            <p>M</p>
                                                            <p>L</p>
                                                            <p>XL</p>
                                                        </div>
                                                    ): obj.name == 'Sezona' ?
                                                    (
                                                        <div className='seasonFilter'>
                                                            <Link to='/' className='seasonLink'>Jesen-Zima</Link>
                                                            <Link to='/' className='seasonLink'>Prolece-Leto</Link>
                                                        </div>
                                                    ): obj.name == 'Pol' ?
                                                    (
                                                        <div className='seasonFilter'>
                                                            <Link to='/' className='seasonLink'>Muskarci</Link>
                                                            <Link to='/' className='seasonLink'>Zene</Link>
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
                           
                                <div className='arrayOfFilters'>
                                <h4>Trenutna kupovina po</h4>
                                <div className='insideArrayOfFilters'>
                                    <div className='itemOfArray'>
                                        <span><b>Kategorija:</b> {kat}</span>
                                        <i  className="fas fa-times"></i>
                                    </div>
                                    <div className='itemOfArray'>
                                        <span>Ponistite sve</span>   
                                    </div>
                                </div>
                            </div>
                            <div className='productItemsContainer'>
                            {
                                categoryProducts.map((obj, idx)=>{
                                    return(
                                        <div className='productItem' key={idx}>
                                            <img src={slika1} alt="" />
                                            <p>{obj.name}</p>
                                            <p>{obj.price}</p>
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default BrandScreenCat;