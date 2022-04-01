import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import DropdownMeni from '../../components/HomeScreen/DropdownMeni';
import Header from '../../components/HomeScreen/Header';
import SocialInfo from '../../components/HomeScreen/SocialInfo';
import '../BrandScreen.css'
import slika1 from '../../assets/ckGrid.png'
import slika2 from '../../assets/ckGridB.png'
import slika3 from '../../assets/gridCkRight.png'
import Breadcrumb from '../../custom/Breadcrumb';
import { useDispatch, useSelector } from 'react-redux';
import {productsActions} from '../../store/products-slice';
import { fetchProductsData } from '../../store/products-actions';

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
                                                            <Link className='redd' to={`/brendovi/${nekibrend}/filter/category:${kat}/color:crvena`}></Link>
                                                            <Link className='bluee' to={`/brendovi/${nekibrend}/filter/category:${kat}/color:plava`}></Link>
                                                            <Link className='greenn' to={`/brendovi/${nekibrend}/filter/category:${kat}/color:zelena`}></Link>
                                                            <Link className='blackk' to={`/brendovi/${nekibrend}/filter/category:${kat}/color:crna`}></Link>
                                                            <Link className='yelloww' to={`/brendovi/${nekibrend}/filter/category:${kat}/color:zuta`}></Link>
                                                        </div>
                                                    ): obj.name == 'Velicina' ?
                                                    (
                                                        <div className='sizeFilter'>
                                                            <Link className='sizeItLink' to={`/brendovi/${nekibrend}/filter/size:S/category:${kat}`}><p>S</p></Link>
                                                            <Link className='sizeItLink' to={`/brendovi/${nekibrend}/filter/size:M/category:${kat}`}><p>M</p></Link>
                                                            <Link className='sizeItLink' to={`/brendovi/${nekibrend}/filter/size:L/category:${kat}`}><p>L</p></Link>
                                                            <Link className='sizeItLink' to={`/brendovi/${nekibrend}/filter/size:XL/category:${kat}`}><p>XL</p></Link>
                                                        </div>
                                                    ): obj.name == 'Sezona' ?
                                                    (
                                                        <div className='seasonFilter'>
                                                            <Link to={`/brendovi/${nekibrend}/filter/season:Jesen-Zima/category:${kat}`} className='seasonLink'>Jesen-Zima</Link>
                                                            <Link to={`/brendovi/${nekibrend}/filter/season:Prolece-Leto/category:${kat}`} className='seasonLink'>Prolece-Leto</Link>
                                                        </div>
                                                    ): obj.name == 'Pol' ?
                                                    (
                                                        <div className='seasonFilter'>
                                                            <Link to={`/brendovi/${nekibrend}/filter/sex:Muski/category:${kat}`} className='seasonLink'>Muskarci</Link>
                                                            <Link to={`/brendovi/${nekibrend}/filter/sex:Zenski/category:${kat}`} className='seasonLink'>Zene</Link>
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
                                    <Link to={`/brendovi/${nekibrend}`} className='itemOfArray'>
                                        <span><b>Kategorija:</b> {kat}</span>
                                        <i id='itemOfArr'  className="fas fa-times"></i>
                                    </Link>
                                    <div className='itemOfArray'>
                                    <Link to={`/brendovi/${nekibrend}`}><span onClick={()=>dispatch(productsActions.backToInitalState())}>Ponistite sve</span></Link>    
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
        </div>
    )
}

export default BrandScreenCat;