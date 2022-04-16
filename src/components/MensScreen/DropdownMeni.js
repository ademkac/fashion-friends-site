import React, {useLayoutEffect, useState, useRef, useEffect} from "react";
import { Link } from "react-router-dom";
import slika from '../../assets/drop1.png';
import slika1 from '../../assets/colmarPic.png'
import slika2 from '../../assets/disel.jpg'
import slika3 from '../../assets/replayLogo.jpg'
import slika4 from '../../assets/paciottiLogo.jpg'
import '../HomeScreen/DropdownMeni.css'
import ClothesComponent from "../DropdownComponents/ClothesComponent";
import ShoesComponent from "../DropdownComponents/ShoesComponent";
import BrandsListComponent from "../DropdownComponents/BrandsListComponent";
import BagComponent from "../DropdownComponents/BagComponent";
import AccessoriesComponent from "../DropdownComponents/AccessoriesComponent";
import CosmeticsComponent from "../DropdownComponents/Cosmetics";
import OutletComponent from "../DropdownComponents/OutletComponent";
import EditorialComponent from "../DropdownComponents/EditorialComponent";
import SearchModalComponent from "../DropdownComponents/SearchModalComponent";


const popularSearch = [
    {name: 'Replay'},{name: 'Premiata'},{name: 'Diesel'},{name: 'Torbe'},
    {name: 'Tommy Hilfiger'},
]

const brands =[
    {
        name: 'Diesel', slika: slika2
    },
    {
        name: 'Replay', slika: slika3
    },
    {
        name: 'Paccioti', slika: slika4
    }
]

const products = [
    { slika: slika, opis: 'Modal item', staraCena: 27000, popust: 30},
    { slika: slika, opis: 'Modal item', staraCena: 27000, popust: 30},
    { slika: slika, opis: 'Modal item', staraCena: 27000, popust: 30},
    { slika: slika, opis: 'Modal item', staraCena: 27000, popust: 30},
    { slika: slika, opis: 'Modal item', staraCena: 27000, popust: 30},
    { slika: slika, opis: 'Modal item', staraCena: 27000, popust: 30}, 
]

const DropdownMeni = (props) =>{

    const [stick, setStick] = useState(false)
    const [longSearch, setLongSearch] = useState(false)
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    const [show5, setShow5] = useState(false)
    const [show6, setShow6] = useState(false)
    const [show7, setShow7] = useState(false)
    const [show8, setShow8] = useState(false)
    const [show9, setShow9] = useState(false)
    const [show10, setShow10] = useState(false)



    const headerClasses = `dropdownMeni ${stick  ? 'sticky1' : ''}`
    const headerClasses1 = `searchBar ${stick  ? 'sticky2' : ''}`
    const headerClasses2 = `${stick ? 'stickyyy' : 'dropdown-content'}`
    const modalClasses = `${stick ? 'stickyModal': 'modalSearch'}`
    const buttonSearch = `${stick ? 'stickyButtonSearch': 'buttonSearch'}`
    const longButtonSearch = `${stick? 'stickyLongSearch': 'longButtonSearch'}`
    const triangle = `${stick ? 'stickyTriangle': 'triangle'}`

    let modal = useRef(null)
    let trigger = useRef(null)
    let inputSearch = useRef(null)

    const handleScroll = () =>{
        setStick(window.scrollY > 0);
    }

    const handleOutsideModalClick = (e) => {
        //if click is on trigger element, toggle modal
         if(trigger.current && 
            trigger.current.contains(e.target)) {
            return setLongSearch(!longSearch);
           }
        
        //if modal is open and click is outside modal, close it
        if(modal.current && 
          !modal.current.contains(e.target) && !inputSearch.current.contains(e.target)) {
            return setLongSearch(false);
          }
        }

        useEffect(()=>{
            document.addEventListener('click', handleOutsideModalClick, true)
            return(()=>{ 
                document.removeEventListener('click', handleOutsideModalClick, true)
            })
    
    })

    useLayoutEffect(()=>{
        window.addEventListener('scroll',handleScroll);

        return(()=>{
            window.removeEventListener('scroll', handleScroll)
        })
    })

    return(
        <div>
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
                    <div
                    onMouseOver={()=>setShow6(true)}
                    onMouseLeave={()=>setShow6(false)}
                    className="dropdown">
                        <button className="dropbtn">Torbe<i className="fas fa-caret-down"></i></button>
                        
                    </div>
                    <div
                    onMouseOver={()=>setShow7(true)}
                    onMouseLeave={()=>setShow7(false)}
                    className="dropdown">
                        <button className="dropbtn">Aksesoari<i className="fas fa-caret-down"></i></button>
                        
                    </div>
                    <div
                    onMouseOver={()=>setShow8(true)}
                    onMouseLeave={()=>setShow8(false)}
                    className="dropdown">
                        <button className="dropbtn">Kozmetika<i className="fas fa-caret-down"></i></button>
                        
                    </div>
                    <div
                    onMouseOver={()=>setShow9(true)}
                    onMouseLeave={()=>setShow9(false)}
                    className="dropdown">
                        <button className="dropbtn">Outlet<i className="fas fa-caret-down"></i></button>
                        
                    </div>
                    <div
                    onMouseOver={()=>setShow10(true)}
                    onMouseLeave={()=>setShow10(false)}
                    className="dropdown">
                        <button className="dropbtn">Editorial<i className="fas fa-caret-down"></i></button>
                        
                    </div>
                    {longSearch ? (
                        <span ref={inputSearch} className={longButtonSearch}>
                            <input type='text' placeholder="Trazite"/>
                            <i className="fa fa-search"></i>
                        </span>
                    ) : (<span ref={trigger} className={buttonSearch}><i className="fa fa-search"></i></span>)}
                
                    {longSearch && (
                        <div className="modal--overlay">
                            <div ref={modal} className={modalClasses}>
                                <SearchModalComponent
                                popularSearch={popularSearch}
                                brands={brands}
                                products={products}
                                />
                            </div>
                        </div>
                    )}
                    {longSearch && (
                        <i id={triangle} className="fas fa-caret-up"></i>
                    )}
                </div>
                {
                    show1 && ( 
                        <div
                        onMouseEnter={()=>setShow1(true)}
                        onMouseLeave={()=>setShow1(false)}
                        className={headerClasses2}>
                        <div className="insideDropCont">
                                <Link className="linkContent" to='/zene'><img id="imgDropCont" src={slika} alt='' /></Link>
                            </div> 
                        </div>
                     )
                }
                {
                    show2 && (
                        <div
                        onMouseEnter={()=>setShow2(true)}
                        onMouseLeave={()=>setShow2(false)}
                        className={headerClasses2}>
                            <div className="insideDropCont">
                                <Link className="linkContent" to='/zene'><img id="imgDropCont" src={slika1} alt='' /></Link>
                            </div> 
                        </div>
                    )
                } 
                {
                    show3 && (
                        <div
                        onMouseEnter={()=>setShow3(true)}
                        onMouseLeave={()=>setShow3(false)}
                        className={headerClasses2}>
                            <ClothesComponent />
                        </div>
                    )
                }
                {
                    show4 && (
                        <div
                        onMouseEnter={()=>setShow4(true)}
                        onMouseLeave={()=>setShow4(false)}
                        className={headerClasses2}>
                            <ShoesComponent />
                        </div>
                    )
                }
                {
                    show5 && (
                        <div
                        onMouseEnter={()=>setShow5(true)}
                        onMouseLeave={()=>setShow5(false)}
                        className={headerClasses2}>
                            <BrandsListComponent />
                        </div>
                    )
                }
                {
                    show6 && (
                        <div
                        onMouseEnter={()=>setShow6(true)}
                        onMouseLeave={()=>setShow6(false)}
                        className={headerClasses2}>
                            <BagComponent />
                        </div>
                    )
                }
                {
                    show7 && (
                        <div
                        onMouseEnter={()=>setShow7(true)}
                        onMouseLeave={()=>setShow7(false)}
                        className={headerClasses2}>
                            <AccessoriesComponent />
                        </div>
                    )
                }
                {
                    show8 && (
                        <div
                        onMouseEnter={()=>setShow8(true)}
                        onMouseLeave={()=>setShow8(false)}
                        className={headerClasses2}>
                            <CosmeticsComponent />
                        </div>
                    )
                }
                {
                    show9 && (
                        <div
                        onMouseEnter={()=>setShow9(true)}
                        onMouseLeave={()=>setShow9(false)}
                        className={headerClasses2}>
                            <OutletComponent />
                        </div>
                    )
                }
                {
                    show10 && (
                        <div
                        onMouseEnter={()=>setShow10(true)}
                        onMouseLeave={()=>setShow10(false)}
                        className={headerClasses2}>
                            <EditorialComponent />
                        </div>
                    )
                }
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
        </div>
    )
}

export default DropdownMeni