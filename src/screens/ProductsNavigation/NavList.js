import React, {useState} from 'react'
import './ProductsNav.css'
import CategoriesListFilter from '../../custom/CategoriesListFilter'
import ColorFilter from './NavListComponents/ColorFilter'
import SizeFilter from './NavListComponents/SizeFilter'
import SeasonFIlter from './NavListComponents/SeasonFIlter'
import GenderFilter from './NavListComponents/GenderFilter'

const NavList = (props) => {

    const [showK, setShowK] = useState(false)
    const [showV, setShowV] = useState(false)
    const [showB, setShowB] = useState(false)
    const [showS, setShowS] = useState(false)
    const [showP, setShowP] = useState(false)
    const [showC, setShowC] = useState(false)
    const [sliderValue, setSliderValue] = useState(1)
    const [clicked, setClicked] = useState(false)

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
  return (
    <ul className='filterBrandList'>

        {
           props.filterItems.map((obj, idx)=> {
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
                                <CategoriesListFilter 
                                brend={props.title} 
                                filter={props.type} 
                                value={props.value}/>
                            ): obj.name === 'Boja' ?
                            (
                                <ColorFilter 
                                array={props.array}
                                title={props.title} 
                                type={props.type}
                                color={props.value}
                                />
                            ): obj.name === 'Velicina' ?
                            (
                                <SizeFilter 
                                array={props.array}
                                title={props.title}
                                type={props.type}
                                size={props.value} />
                            ): obj.name === 'Sezona' ?
                            (
                                <SeasonFIlter 
                                title={props.title}
                                type={props.type}
                                season={props.value} />
                            ): obj.name === 'Pol' ?
                            (
                                <GenderFilter 
                                title={props.title}
                                type={props.type}
                                sex={props.value} />
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
  )
}

export default NavList
