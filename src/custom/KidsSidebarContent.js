import React, {useState} from 'react';
import './Sidebar.css';
import slika from '../assets/drop1.png';
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
        title: 'DECA POCETNA',
        slika: slika,
        to: '/deca'
    },
    {
        title: 'DEVOJCICE',
        slika: slika,
        to: '#'
    },
    {
        title: 'DECACI',
        slika: slika,
        to: '#'
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
        console.log("index of item: "+idx)
    }

    const backToSidebarContent = () => {
        setItemClicked(null)
        console.log("event se desio!!!!")
    }

    const dropHandler = (name) => {
        if(name == 'Aksesoari'){
            setShowFirstDropdown(!showFirstDropdown);
            setShowSecondDropdown(false)
            setShowThirdDropdown(false)
        } else if (name == 'Obuca'){
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
        <>
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
                        return <Link className="linkSidebarItem" key={idx} to={obj.to} onClick={()=>itemClickHandler(idx)}>
                                    <li className="listSidebarItem" key={idx}>
                                        {obj.title}
                                        <img src={obj.slika} alt="" />
                                    </li>
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
                                    {obj.name == 'Aksesoari' ?
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
                                    ): obj.name == 'Obuca' ?
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
                                    {obj.name == 'Aksesoari' ?
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
                                    ): obj.name == 'Obuca' ?
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
        </>
    )
}


export default KidsSidebarContent;