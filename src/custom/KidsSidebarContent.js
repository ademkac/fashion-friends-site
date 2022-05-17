import React, {useState} from 'react';
import './Sidebar.css';
import slika from '../assets/kidsSidebar.png';
import slika1 from '../assets/kidsSidebar1.png';
import slika2 from '../assets/kidsSidebar2.png';
import slika3 from '../assets/user-solid.svg'
import slika4 from '../assets/bag-shopping-solid.svg'
import { Link } from "react-router-dom"

const kidsItem1 = [
    {
        name: 'Aksesoari',
        to: '/deca/devojcice/aksesoari'
    },
    {
        name: 'Obuca',
        to: '/deca/devojcice/obuca'
    },
    {
        name: 'Odeca',
        to: '/deca/devojcice/odeca'
    },
]

const kidsItem2 = [
    {
        name: 'Aksesoari',
        to: '/deca/decaci/aksesoari'
    },
    {
        name: 'Obuca',
        to: '/deca/decaci/obuca'
    },
    {
        name: 'Odeca',
        to: '/deca/decaci/odeca'
    },
]

const sidebarContentListKids = [
    {
        element: <li className="listSidebarItem">
                    <span className='spanTxt'>DECA POCETNA</span>
                    <img className='picItem' src={slika} alt="" />
                </li>,
        to: '/deca'
    },
    {
        element: <li className="listSidebarItem">
                    <span className='spanTxt'>DEVOJCICE</span>
                    <img className='picItem' src={slika1} alt="" />
                </li>,
        to: '#'
    },
    {
        element: <li className="listSidebarItem">
                    <span className='spanTxt'>DECACI</span>
                    <img className='picItem' src={slika2} alt="" />
                </li>,
        to: '#'
    },
    {
        element: <li className="listSidebarItem">
                    <img className="picItemLeft" src={slika3} alt="" />
                    <span className="spanTxt">Moj korisnicki nalog</span>
                </li>,
        to: '/customer/login',
    },
    {
        element: <li className="listSidebarItem">
                    <span className="heartSpanSidebar"><i className="far fa-heart"></i>&</span>
                    <span className="spanTxt">Liste zelja</span>
                </li>,
        to: '/guestwishlist',
    },
    {
        element: <li className="listSidebarItem">
                    <img className="picItemLeft" src={slika4} alt="" />
                    <span className="spanTxt">Korpa</span>
                </li>,
        to: '/checkout/cart',
    },
]

const aksesoariList = [
    {name: 'Kacketi'},{name: 'Kaisevi'},{name: 'Kape i rukavice'},{name: 'Maske'},
    {name: 'Naocare'},{name: 'Ostalo'},{name: 'Salovi i marame'},{name: 'Torbe'},{name: 'Rancevi'}
]

const obucaList = [
    {name: 'Baletanke'},{name: 'Cipele'},{name: 'Cizme'},
    {name: 'Japanke'},{name: 'Papuce'},{name: 'Patike'},
    {name: 'Sandale'}
]

const obucaListDecaci = [
    {name: 'Cipele'},{name: 'Cizme'},
    {name: 'Japanke'},{name: 'Makasine'},{name: 'Papuce'},{name: 'Patike'},
    {name: 'Sandale'}
]

const odecaList = [
    {name: 'Bermude'},{name: 'Dukserice'},{name: 'Dzemperi'},{name: 'Farmerke'},
    {name: 'Haljine'},{name: 'Jakne i kaputi'},{name: 'Kombinezoni'},{name: 'Kosulje'},
    {name: 'Kupaci kostimi'},{name: 'Majice'},{name: 'Pantalone'},{name: 'Sakoi'},
    {name: 'Sortsevi'},{name: 'Suknje'},{name: 'Set'},
]

const odecaListDecaci = [
    {name: 'Bermude'},{name: 'Dukserice'},{name: 'Dzemperi'},{name: 'Farmerke'},
    {name: 'Jakne i kaputi'},{name: 'Kombinezoni'},{name: 'Kosulje'},
    {name: 'Kupaci'},{name: 'Majice'},{name: 'Pantalone'},{name: 'Sakoi'},
    {name: 'Set'}
]

const KidsSidebarContent = (props) => {

    const [itemClicked, setItemClicked] = useState(null)
    const [showFirstDropdown, setShowFirstDropdown] = useState(false)
    const [showSecondDropdown, setShowSecondDropdown] = useState(false)
    const [showThirdDropdown, setShowThirdDropdown] = useState(false)


    const itemClickHandler = (idx) => {
        setItemClicked(idx)
    }

    const backToSidebarContent = () => {
        setItemClicked(null)
    }

    const dropHandler = (name) => {
        if(name === 'Aksesoari'){
            setShowFirstDropdown(!showFirstDropdown);
            setShowSecondDropdown(false)
            setShowThirdDropdown(false)
        } else if (name === 'Obuca'){
            setShowFirstDropdown(false)
            setShowSecondDropdown(!showSecondDropdown)
            setShowThirdDropdown(false)
        }else {
            setShowFirstDropdown(false)
            setShowSecondDropdown(false)
            setShowThirdDropdown(!showThirdDropdown)
        }

    }

    props.itemClicked(itemClicked)


    return(
        <div>
            {(itemClicked === 1) && (
                <div className="itemClickedHeader" onClick={()=>backToSidebarContent()}>
                    <i  className="fas fa-caret-left"></i>
                    <h3>DEVOJCICE</h3>
                </div>
            )}
            {(itemClicked === 2) && (
                <div className="itemClickedHeader" onClick={()=>backToSidebarContent()}>
                    <i  className="fas fa-caret-left"></i>
                    <h3>DECACI</h3>
                </div>
            )}
            {(itemClicked === null) && (
                <ul className="listSidebarContent">
                    {
                    sidebarContentListKids.map((obj, idx)=>{
                        return <Link className="linkSidebarItem" key={idx} to={obj.to} onClick={
                            obj.to === '/deca' ? props.closeSidebar : ()=>itemClickHandler(idx)
                        }>
                                    {obj.element}
                                </Link>
                                })
                    }       
                </ul>
            )}
            {(itemClicked === 1) && (
                <ul className="kidsItemContent">
                    <Link className='kidsListLink1' to='/deca/devojcice'>
                        <li className="kidsListItem1">
                            Devojcice pocetna
                        </li>
                    </Link>
                    {
                    kidsItem1.map((obj, idx)=> {
                        return(
                            <li key={idx} className="kidsListItem">
                                <Link className='kidsListLInk' key={idx} to={obj.to}>
                                    {obj.name}
                                </Link>
                                <button onClick={()=>dropHandler(obj.name)} >{((showFirstDropdown && obj.name === 'Aksesoari')
                                 || (showSecondDropdown && obj.name === 'Obuca')
                                 || (showThirdDropdown && obj.name === 'Odeca')) === false
                                 ? (<i className="fas fa-caret-right"></i>)
                                 : (<i className="fas fa-caret-down"></i>)}
                                 </button>
                                 {((showFirstDropdown && obj.name === 'Aksesoari')
                                 || (showSecondDropdown && obj.name === 'Obuca')
                                 || (showThirdDropdown && obj.name === 'Odeca')) && (
                                    <div className='dropContentKids'>
                                    {obj.name === 'Aksesoari' ?
                                    (
                                        <ul className='aksesoariList'>
                                            {aksesoariList.map((obj, idx)=> {
                                                return (
                                                    <Link key={idx} to={`/deca/devojcice/aksesoari/${obj.name}`}>
                                                        <li className='aksesoariListItem'>{obj.name}</li>
                                                    </Link>
                                                )
                                            })}
                                        </ul>
                                    ): obj.name === 'Obuca' ?
                                    (
                                        <ul className='obucaList'>
                                        {obucaList.map((obj, idx)=> {
                                            return (
                                                <Link key={idx} to={`/deca/devojcice/obuca/${obj.name}`}>
                                                    <li className='obucaListItem'>{obj.name}</li>
                                                </Link>
                                            )
                                        })}
                                    </ul>
                                    ): (
                                        <ul className='obucaList'>
                                        {odecaList.map((obj, idx)=> {
                                            return (
                                                <Link key={idx} to={`/deca/devojcice/odeca/${obj.name}`}>
                                                    <li className='obucaListItem'>{obj.name}</li>
                                                </Link>
                                            )
                                        })}
                                    </ul>
                                    )}
                                 </div>
                                 )}
                            </li>
                            )
                                })
                    }
                </ul>
                )}

            {(itemClicked === 2) && (
                <ul className="kidsItemContent">
                    <Link className='kidsListLink1' to='/deca/decaci'>
                        <li className="kidsListItem1">
                            Decaci pocetna
                        </li>
                    </Link>
                    {
                    kidsItem2.map((obj, idx)=> {
                        return(
                            <li key={idx} className="kidsListItem">
                                <Link className='kidsListLInk' key={idx} to={obj.to}>
                                    {obj.name}
                                </Link>
                                <button onClick={()=>dropHandler(obj.name)} >{((showFirstDropdown && obj.name === 'Aksesoari')
                                 || (showSecondDropdown && obj.name === 'Obuca')
                                 || (showThirdDropdown && obj.name === 'Odeca')) === false
                                 ? (<i className="fas fa-caret-right"></i>)
                                 : (<i className="fas fa-caret-down"></i>)}
                                 </button>
                                 {((showFirstDropdown && obj.name === 'Aksesoari')
                                 || (showSecondDropdown && obj.name === 'Obuca')
                                 || (showThirdDropdown && obj.name === 'Odeca')) && (
                                    <div className='dropContentKids'>
                                    {obj.name === 'Aksesoari' ?
                                    (
                                        <ul className='aksesoariList'>
                                            {aksesoariList.map((obj, idx)=> {
                                                return (
                                                    <Link key={idx} to={`/deca/decaci/aksesoari/${obj.name}`}>
                                                        <li className='aksesoariListItem'>{obj.name}</li>
                                                    </Link>
                                                )
                                            })}
                                        </ul>
                                    ): obj.name === 'Obuca' ?
                                    (
                                        <ul className='obucaList'>
                                        {obucaListDecaci.map((obj, idx)=> {
                                            return (
                                                <Link key={idx} to={`/deca/decaci/obuca/${obj.name}`}>
                                                    <li className='obucaListItem'>{obj.name}</li>
                                                </Link>
                                            )
                                        })}
                                    </ul>
                                    ): (
                                        <ul className='obucaList'>
                                        {odecaListDecaci.map((obj, idx)=> {
                                            return (
                                                <Link key={idx} to={`/deca/decaci/odeca/${obj.name}`}>
                                                    <li className='obucaListItem'>{obj.name}</li>
                                                </Link>
                                            )
                                        })}
                                    </ul>
                                    )}
                                 </div>
                                 )}
                            </li>
                            )
                                })
                    }
                </ul>
                )}
        </div>
    )
}


export default KidsSidebarContent;