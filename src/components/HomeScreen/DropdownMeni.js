import React, { useEffect, useLayoutEffect, useRef, useState} from "react";
import { Link } from "react-router-dom";
import slika from '../../assets/drop1.png';
import slika1 from '../../assets/colmarPic.png'
import slika2 from '../../assets/disel.jpg'
import slika3 from '../../assets/replayLogo.jpg'
import slika4 from '../../assets/paciottiLogo.jpg'


import './DropdownMeni.css'
import ClothesComponent from "../DropdownComponents/ClothesComponent";
import ShoesComponent from "../DropdownComponents/ShoesComponent";
import BrandsListComponent from "../DropdownComponents/BrandsListComponent";
import BagComponent from "../DropdownComponents/BagComponent";
import AccessoriesComponent from "../DropdownComponents/AccessoriesComponent";
import CosmeticsComponent from "../DropdownComponents/Cosmetics";
import OutletComponent from "../DropdownComponents/OutletComponent";
import EditorialComponent from "../DropdownComponents/EditorialComponent";
import SearchModalComponent from "../DropdownComponents/SearchModalComponent";
import Buttons from "../DropdownComponents/DropdownButtons/Buttons";

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

    const [longSearch, setLongSearch] = useState(false)
    const [stick, setStick] = useState(false)
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
    let growingSearch = useRef(null)

    const handleScroll = () =>{
        setStick(window.scrollY > 0);
    }

    const handleOutsideModalClick = (e) => {
    //if click is on trigger element, toggle modal
     if((trigger.current && 
        trigger.current.contains(e.target)) || (
            growingSearch.current && 
        growingSearch.current.contains(e.target)
        )) {
        return setLongSearch(true);
       }
    
    //if modal is open and click is outside modal, close it
    if(modal.current && 
      !modal.current.contains(e.target) && !inputSearch.current.contains(e.target) && !growingSearch.current.contains(e.target)) {
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
            window.removeEventListener('scroll', handleScroll);
                        
        })

        
    })

    return(
        <div>
        <div className={headerClasses}>
                <Buttons 
                onMouseOver1={()=>setShow1(true)}
                onMouseLeave1={()=>setShow1(false)}
                onMouseOver2={()=>setShow2(true)} 
                onMouseLeave2={()=>setShow2(false)}
                onMouseOver3={()=>setShow3(true)}
                onMouseLeave3={()=>setShow3(false)} 
                onMouseOver4={()=>setShow4(true)}
                onMouseLeave4={()=>setShow4(false)}
                onMouseOver5={()=>setShow5(true)}
                onMouseLeave5={()=>setShow5(false)}
                onMouseOver6={()=>setShow6(true)}
                onMouseLeave6={()=>setShow6(false)}
                onMouseOver7={()=>setShow7(true)}
                onMouseLeave7={()=>setShow7(false)}
                onMouseOver8={()=>setShow8(true)}
                onMouseLeave8={()=>setShow8(false)}
                onMouseOver9={()=>setShow9(true)}
                onMouseLeave9={()=>setShow9(false)}
                onMouseLeave10={()=>setShow10(false)}
                onMouseOver10={()=>setShow10(true)}
                longSearch={longSearch}
                inputSearch={inputSearch}
                longButtonSearch={longButtonSearch}
                trigger={trigger}
                modal={modal}
                modalClasses={modalClasses}
                buttonSearch={buttonSearch}
                popularSearch={popularSearch}
                brands={brands}
                products={products}
                triangle={triangle}
                showBtnSearch={props.showSearchBtn}/>
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
        <ul ref={growingSearch} className="growing-list" id="growing-search-freebie">
            <li>
                <div  className="growing-search">
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
        </div>
    )
}

export default DropdownMeni