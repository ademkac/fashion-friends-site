import React, {useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import DropdownMeni from '../components/HomeScreen/DropdownMeni';
import Header from '../components/HomeScreen/Header';
import SocialInfo from '../components/HomeScreen/SocialInfo';
import CategoriesListFilter from '../custom/CategoriesListFilter';
import './BrandScreen.css'
import slika1 from '../assets/ckGrid.png'
import slika2 from '../assets/ckGridB.png'
import slika3 from '../assets/gridCkRight.png'


const arrayOfFilters = [
    /* {
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
    } */
]

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

    const [clicked, setClicked] = useState(false)
    const title = useParams().nekibrend;

    const dropdownHandler = (name) => {
        setClicked(!clicked)
        console.log("Ime kategorije: "+name)
        
        name == 'Kategorija' ? setShowK(!showK) 
        : name == 'Boja' ? setShowB(!showB)
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
            <div className='breadcrumbContainer'>
                <div className='insideBreadcrumb'>
                    <ul className='breadcrumblist'>
                        {/* {
                            props.breadcrumbList.map((obj, idx)=>{
                                return <li key={idx}><Link to={obj.name} className='breadcrumbLink'>{obj.name}</Link></li>
                            })
                        } */}
                        <li><Link to='/' className='breadcrumbLink'>Pocetna</Link></li>
                        <li><Link to='/brendovi' className='breadcrumbLink'>Brendovi</Link></li>
                        <li><Link to={`/brendovi/${title}`} className='activeBreadcrumb'>{title}</Link></li>
                    </ul>
                </div>
            </div>
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
                                                {((showB && obj.name == 'Boja')
                                                || (showC && obj.name == 'Cena')
                                                || (showK && obj.name == 'Kategorija')
                                                || (showP && obj.name == 'Pol')
                                                || (showS && obj.name == 'Sezona')
                                                || (showV && obj.name == 'Velicina')) == false  
                                                ?(<i className="fas fa-caret-down"></i>)
                                                :(<i className="fas fa-caret-up"></i>)}
                                                </div>
                                                {(  (showB && obj.name == 'Boja')
                                                || (showC && obj.name == 'Cena')
                                                || (showK && obj.name == 'Kategorija')
                                                || (showP && obj.name == 'Pol')
                                                || (showS && obj.name == 'Sezona')
                                                || (showV && obj.name == 'Velicina')  )  && (
                                                    <div className='dropContent'>
                                                    {obj.name == 'Kategorija'? 
                                                    (
                                                        <CategoriesListFilter />
                                                    ): obj.name == 'Boja' ?
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
                            {arrayOfFilters.length > 0 && (
                                <div className='arrayOfFilters'>
                                <h4>Trenutna kupovina po</h4>
                                <div className='insideArrayOfFilters'>
                                    {arrayOfFilters.map((obj, idx)=>{
                                        return (
                                            <div key={idx} className='itemOfArray'>
                                                <span><b>{obj.kategorija}:</b> {obj.podkategorija}</span>
                                                <i  className="fas fa-times"></i>
                                            </div>
                                        )
                                    })}
                                    <div className='itemOfArray'>
                                                <span>Ponistite sve</span>   
                                    </div>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default BrandScreen;