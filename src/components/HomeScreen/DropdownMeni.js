import React, {useLayoutEffect, useState} from "react";
import { Link } from "react-router-dom";
import slika from '../../assets/drop1.png';
import slika1 from '../../assets/colmarPic.png'

import './DropdownMeni.css'
import ClothesComponent from "../DropdownComponents/ClothesComponent";

const DropdownMeni = (props) =>{

    const [stick, setStick] = useState(false)
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    const [show5, setShow5] = useState(false)

    const headerClasses = `dropdownMeni ${stick  ? 'sticky1' : ''}`
    const headerClasses1 = `searchBar ${stick  ? 'sticky2' : ''}`
    

    const handleScroll = () =>{
        setStick(window.scrollY > 0);
    }

    useLayoutEffect(()=>{
        window.addEventListener('scroll',handleScroll);
   

        return(()=>{
            window.removeEventListener('scroll', handleScroll);
        })

        
    })

    return(
        <>
        <div className={headerClasses}>
                <div className="insideDropdown">
                    <div
                    onMouseOver={()=>setShow1(true)}
                    onMouseLeave={()=>setShow1(false)}
                    className="dropdown">
                        <button className="dropbtn">Noviteti<i className="fas fa-caret-down"></i></button>
                        
                    </div>
                    <div
                    onMouseOver={()=>setShow2(true)}
                    onMouseLeave={()=>setShow2(false)}
                    className="dropdown">
                        <button className="dropbtn">Luxury<i className="fas fa-caret-down"></i></button>
                    </div>
                    <div 
                    onMouseOver={()=>setShow3(true)}
                     onMouseLeave={()=>setShow3(false)}
                    className="dropdown">
                        <button className="dropbtn">Odeca<i className="fas fa-caret-down"></i></button>
                        
                    </div>
                    <div
                    onMouseOver={()=>setShow4(true)}
                    onMouseLeave={()=>setShow4(false)}
                    className="dropdown">
                        <button className="dropbtn">Obuca<i className="fas fa-caret-down"></i></button>
                        
                    </div> 
                    <div
                    onMouseOver={()=>setShow5(true)}
                    onMouseLeave={()=>setShow5(false)}
                    className="dropdown">
                        <button className="dropbtn">Brendovi<i className="fas fa-caret-down"></i></button>
                        
                    </div>
                </div>
                 {
                    show1 && ( 
                        <div
                        onMouseEnter={()=>setShow1(true)}
                        onMouseLeave={()=>setShow1(false)}
                        className="dropdown-content">
                            <div className="insideDropCont">
                                <Link className="linkContent" to='/zene'><img id="imgDropCont" src={slika} alt= '' /></Link>
                            </div>
                        </div>
                     )
                }
                {
                    show2 && (
                        <div
                        onMouseEnter={()=>setShow2(true)}
                        onMouseLeave={()=>setShow2(false)}
                        className="dropdown-content">
                            <div className="insideDropCont">
                                <Link className="linkContent" to='/zene'><img id="imgDropCont" src={slika1} alt= '' /></Link>
                            </div>                        
                        </div>
                    )
                } 
                {
                    show3 && (
                        <div
                        onMouseEnter={()=>setShow3(true)}
                        onMouseLeave={()=>setShow3(false)}
                        className="dropdown-content">
                            <ClothesComponent />
                        </div>
                    )
                }
                {
                    show4 && (
                        <div
                        onMouseEnter={()=>setShow4(true)}
                        onMouseLeave={()=>setShow4(false)}
                        className="dropdown-content">
                            <p>Obuca</p>
                        </div>
                    )
                }
                {
                    show5 && (
                        <div
                        onMouseEnter={()=>setShow5(true)}
                        onMouseLeave={()=>setShow5(false)}
                        className="dropdown-content">
                            <p>Brendovi</p>
                        </div>
                    )
                }
        </div>
        <div className={headerClasses1}>
        <ul className="growing-list" id="growing-search-freebie">
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