import React, {useLayoutEffect, useState} from "react";
import { Link } from "react-router-dom";
import slika from '../../assets/drop1.png';

import './DropdownMeni.css'

const DropdownMeni = (props) =>{

    const [stick, setStick] = useState(false)
    const headerClasses = `dropdownMeni ${stick  ? 'sticky1' : ''}`
    const headerClasses1 = `searchBar ${stick  ? 'sticky2' : ''}`
    

    const handleScroll = () =>{
        setStick(window.scrollY > 0);
    }

    

    useLayoutEffect(()=>{
        window.addEventListener('scroll',handleScroll);

        return(()=>{
            window.removeEventListener('scroll', handleScroll)
        })
    })

    return(
        <>
        <div className={headerClasses}>
                <div className="insideDropdown">
                    <div className="dropdown">
                        <button className="dropbtn">Noviteti<i className="fas fa-caret-down"></i></button>
                        <div className="dropdown-content">
                           
                                <Link to='/muskarci'><img src={slika} alt= '' /></Link>
                            
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Luxury<i className="fas fa-caret-down"></i></button>
                        <div className="dropdown-content">
                            <p>Luxury</p>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Odeca<i className="fas fa-caret-down"></i></button>
                        <div className="dropdown-content">
                            <p>Odeca</p>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Obuca<i className="fas fa-caret-down"></i></button>
                        <div className="dropdown-content">
                            <p>Obuca</p>
                        </div> 
                    </div>
                </div>
                
        </div>
        <div className={headerClasses1}>
        <ul id="growing-search-freebie">
            <li>
                <div className="growing-search">
                    <div className="input">
                        <input type='text' placeholder="Trazite..." name="search"/>
                    </div>
                    <div className="submit">
                        <button type="button" name="go_search">
                            <span className="fa fa-search"></span>
                        </button>
                    </div>
                </div>
            </li>
        </ul>
        </div>
        </>
    )
}

export default DropdownMeni