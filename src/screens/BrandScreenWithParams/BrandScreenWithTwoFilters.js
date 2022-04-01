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

const BrandScreenWithTwoFilters = (props) => {
    const [showK, setShowK] = useState(false)
    const [showV, setShowV] = useState(false)
    const [showB, setShowB] = useState(false)
    const [showS, setShowS] = useState(false)
    const [showP, setShowP] = useState(false)
    const [showC, setShowC] = useState(false)
    const [sliderValue, setSliderValue] = useState(1)

    const [clicked, setClicked] = useState(false)
    const {nekibrend, first, second} = useParams();
    let arrayOfObjects = []
    let filterInfo1 = first.split(':')
    let filterInfo2 = second.split(':')
    let firstArray = filterInfo1[1].split(',');
    let secondArray = filterInfo2[1].split(',')
    
    firstArray.map(obj=>{
        arrayOfObjects.push({filter: filterInfo1[0], info: obj})
    })
    secondArray.map(obj=>{
        arrayOfObjects.push({filter: filterInfo2[0], info: obj})
    })

    const allArrays = firstArray.concat(secondArray)
    const twoFilterProducts = useSelector(state => state.product.twoFilterProducts)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchProductsData())
        arrayOfObjects.map(obj=>{
            dispatch(productsActions.filterProductsTwoParams({
                filter: obj.filter, info: obj.info
            }))
        })
        
    },[dispatch, first, second])

    const breadcrumbList = [
        {name: 'Pocetna', to: '/'},
        {name: 'Brendovi', to: '/brendovi'},
        {name: nekibrend, to: '#'}, 
    ]

    const dropdownHandler = (name) => {
        setClicked(!clicked)
        console.log("Ime kategorije: "+name)
        
        name === 'Kategorija' ? setShowK(!showK) 
        : name == 'Boja' ? setShowB(!showB)
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
                                                || (showK && obj.name === 'Kategorija')
                                                || (showP && obj.name == 'Pol')
                                                || (showS && obj.name == 'Sezona')
                                                || (showV && obj.name == 'Velicina')) == false  
                                                ?(<i className="fas fa-caret-down"></i>)
                                                :(<i className="fas fa-caret-up"></i>)}
                                                </div>
                                                {(  (showB && obj.name == 'Boja')
                                                || (showC && obj.name == 'Cena')
                                                || (showK && obj.name === 'Kategorija')
                                                || (showP && obj.name == 'Pol')
                                                || (showS && obj.name == 'Sezona')
                                                || (showV && obj.name == 'Velicina')  )  && (
                                                    <div className='dropContent'>
                                                    {obj.name === 'Kategorija'? 
                                                    (
                                                        <CategoriesListFilter brend={nekibrend} />
                                                    ): obj.name == 'Boja' ?
                                                    (
                                                        <div className='sizeFilter'>
                                                            {((filterInfo1[0] === 'color' || filterInfo2[0] === 'color')&&(!secondArray.find(it=>it === 'crvena'))) &&(<Link className='redd' to={`/brendovi/${nekibrend}/filter/${filterInfo1[0]}:${filterInfo1[1]}/color:${filterInfo2[1]},crvena`}></Link>)}
                                                            {((filterInfo1[0] === 'color' || filterInfo2[0] === 'color')&&(!secondArray.find(it=>it === 'plava'))) &&(<Link className='bluee' to={`/brendovi/${nekibrend}/filter/${filterInfo1[0]}:${filterInfo1[1]}/color:${filterInfo2[1]},plava`}></Link>) }
                                                            {((filterInfo1[0] === 'color' || filterInfo2[0] === 'color')&&(!secondArray.find(it=>it === 'zelena'))) &&(<Link className='greenn' to={`/brendovi/${nekibrend}/filter/${filterInfo1[0]}:${filterInfo1[1]}/color:${filterInfo2[1]},zelena`}></Link>)}
                                                            {((filterInfo1[0] === 'color' || filterInfo2[0] === 'color')&&(!secondArray.find(it=>it === 'crna'))) &&(<Link className='blackk' to={`/brendovi/${nekibrend}/filter/${filterInfo1[0]}:${filterInfo1[1]}/color:${filterInfo2[1]},crna`}></Link>)}
                                                            {((filterInfo1[0] === 'color' || filterInfo2[0] === 'color')&&(!secondArray.find(it=>it === 'zuta'))) &&(<Link className='yelloww' to={`/brendovi/${nekibrend}/filter/${filterInfo1[0]}:${filterInfo1[1]}/color:${filterInfo2[1]},zuta`}></Link>)}
                                                        </div>
                                                    ): obj.name == 'Velicina' ?
                                                    (
                                                        <div className='sizeFilter'>
                                                            {((filterInfo1[0] === 'size' || filterInfo2[0] === 'size')&&(!firstArray.find(it=>it === 'S'))) &&(<Link className='sizeItLink' to={`/brendovi/${nekibrend}/filter/size:${filterInfo1[1]},S/${filterInfo2[0]}:${filterInfo2[1]}`}>S</Link>)}
                                                            {((filterInfo1[0] === 'size' || filterInfo2[0] === 'size')&&(!firstArray.find(it=>it === 'M'))) &&(<Link className='sizeItLink' to={`/brendovi/${nekibrend}/filter/size:${filterInfo1[1]},M/${filterInfo2[0]}:${filterInfo2[1]}`}>M</Link>)}
                                                            {((filterInfo1[0] === 'size' || filterInfo2[0] === 'size')&&(!firstArray.find(it=>it === 'L'))) &&(<Link className='sizeItLink' to={`/brendovi/${nekibrend}/filter/size:${filterInfo1[1]},L/${filterInfo2[0]}:${filterInfo2[1]}`}>L</Link>)}
                                                            {((filterInfo1[0] === 'size' || filterInfo2[0] === 'size')&&(!firstArray.find(it=>it === 'XL'))) &&(<Link className='sizeItLink' to={`/brendovi/${nekibrend}/filter/size:${filterInfo1[1]},XL/${filterInfo2[0]}:${filterInfo2[1]}`}>XL</Link>)}
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
                                    {firstArray.map((obj, idx)=>{
                                        return(
                                            <Link
                                            to={((firstArray.length === 1 && secondArray.length !== 0))
                                                ? `/brendovi/${nekibrend}/filter/${filterInfo2[0]}${secondArray.toString()}`
                                                : (secondArray.length !== 0) ? `/brendovi/${nekibrend}/filter/${filterInfo1[0]}:${firstArray.filter(it=>it !== obj).toString()}/${filterInfo2[0]}:${secondArray.toString()}`
                                                : `/brendovi/${nekibrend}/filter/${filterInfo1[0]}${firstArray.filter(it=>it !== obj).toString()}`
                                            }
                                            key={idx}
                                            className='itemOfArray'>
                                                <span>
                                                    {filterInfo1[0] === 'sex' ? (<b>Pol: </b>)
                                                     : filterInfo1[0]=== 'color' ? (<b>Boja: </b>)
                                                     : filterInfo1[0]=== 'size' ? (<b>Velicina: </b>)
                                                     : filterInfo1[0] === 'season' ? (<b>Sezona: </b>)
                                                     : (<b>Kategorija: </b>)}
                                                     {obj}</span> 
                                                
                                                <i id='itemOfArr' className="fas fa-times"></i>
                                            </Link>
                                        )
                                    })}
                                    {secondArray.map((obj, idx)=>{
                                        return(
                                            <Link
                                            to={((secondArray.length === 1 && firstArray.length !== 0))
                                                ? `/brendovi/${nekibrend}/filter/${filterInfo1[0]}${firstArray.toString()}`
                                                : (firstArray.length !== 0) ? `/brendovi/${nekibrend}/filter/${filterInfo1[0]}:${firstArray.toString()}/${filterInfo2[0]}:${secondArray.filter(it=>it !== obj).toString()}`
                                                : `/brendovi/${nekibrend}/filter/${filterInfo2[0]}${secondArray.filter(it=>it !== obj).toString()}`
                                            }
                                            key={idx}
                                            className='itemOfArray'>
                                                <span>
                                                    {filterInfo2[0] === 'sex' ? (<b>Pol: </b>)
                                                     : filterInfo2[0]=== 'color' ? (<b>Boja: </b>)
                                                     : filterInfo2[0]=== 'size' ? (<b>Velicina: </b>)
                                                     : filterInfo2[0] === 'season' ? (<b>Sezona: </b>)
                                                     : (<b>Kategorija: </b>)}
                                                     {obj}</span>
                                                <i id='itemOfArr' className="fas fa-times"></i>
                                            </Link>
                                        )
                                    })}
                                    <div className='itemOfArray'>
                                    <Link to={`/brendovi/${nekibrend}`}><span onClick={()=>dispatch(productsActions.backToInitalState())}>Ponistite sve</span></Link>    
                                    </div>
                                </div>
                            </div>
                            <div className='productItemsContainer'>
                            {
                                twoFilterProducts.length === 0 && (
                                    <h3>Trenutno nema proizvoda u toj boji!</h3>
                                )
                            }
                            {
                                twoFilterProducts.map((obj, idx)=>{
                                    return(
                                        <div className='productItem' key={idx}>
                                            <img src={slika1} alt="" />
                                            <p>{obj.name}</p>
                                            {obj.discount !== 0 ? (<p className='discountOld'>{obj.price}</p>): <p>{obj.price}</p>}
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

export default BrandScreenWithTwoFilters;