import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";
import '../Sidebar.css';
import slika from '../../assets/mensSidebar3.png';
import slika4 from '../../assets/mensSidebar6.png';
import slika5 from '../../assets/mensSidebar5.png';
import slika6 from '../../assets/mensSidebar.png';
import slika3 from '../../assets/outletDrop.png';
import slika1 from '../../assets/user-solid.svg'
import slika2 from '../../assets/bag-shopping-solid.svg'
import slika7 from '../../assets/mensSidebar2.png'
import slika8 from '../../assets/mensSidebar1.png'
import slika9 from '../../assets/mensSidebar4.png';
import slika10 from '../../assets/sidebarPic8.png';
import slika11 from '../../assets/mensSidebar7.png';
import slika12 from '../../assets/sidebarPic10.png';
import slika13 from '../../assets/sidebarPic11.png';
import slika14 from '../../assets/sidebarPic12.png';

const sidebarContentList = [
    {
        element: <li className="listSidebarItem">
                    <span className="spanTxt">MUSKARCI POCETNA</span>
                    <img className="picItem" src={slika4} alt="" />
                </li>,
        to: '/muskarci',
    },
    {
        element: <li className="listSidebarItem">
                    <span className="spanTxt">NOVITETI</span>
                    <img className="picItem" src={slika6} alt="" />
                </li>,
        to: '/',
    },
    {
        element: <li className="listSidebarItem">
                    <span className="spanTxt">LUXURY</span>
                    <img className="picItem" src={slika8} alt="" />
                </li>,
        to: '/',
    },
    {
        element: <li className="listSidebarItem">
                    <span className="spanTxt">ODECA</span>
                    <img className="picItem" src={slika7} alt="" />
                </li>,
        to: '/',
    },
    {
        element: <li className="listSidebarItem">
                    <span className="spanTxt">OBUCA</span>
                    <img className="picItem" src={slika} alt="" />
                </li>,
        to: '/',
    },
    {
        element: <li className="listSidebarItem">
                    <span className="spanTxt">BRENDOVI</span>
                    <img className="picItem" src={slika10} alt="" />
                </li>,
        to: '/',
    },
    {
        element: <li className="listSidebarItem">
                    <span className="spanTxt">TORBE</span>
                    <img className="picItem" src={slika9} alt="" />
                </li>,
        to: '/',
    },
    {
        element: <li className="listSidebarItem">
                    <span className="spanTxt">AKSESOARI</span>
                    <img className="picItem" src={slika5} alt="" />
                </li>,
        to: '/',
    },
    {
        element: <li className="listSidebarItem">
                    <span className="spanTxt">KOZMETIKA</span>
                    <img className="picItem" src={slika11} alt="" />
                </li>,
        to: '/',
    },
    {
        element: <li id="editorialColor" className="listSidebarItem ">
                    <span className="spanTxt">EDITORIJAL</span>
                    <img className="picItem" src={slika14} alt="" />
                </li>,
        to: '/editorial',
    },
    {
        element: <li className="listSidebarItem overlayyy">
                    <img className="overlayPicItem" src={slika3} alt="" />
                </li>,
        to: '/popust',
    },
    {
        element: <li className="listSidebarItem overlay">
                    <img className="overlayPicItem" src={slika12} alt="" />
                </li>,
        to: '/outlet',
    },
    {
        element: <li className="listSidebarItem">
                    <span className="spanTxt">PRODAVNICE</span>
                    <img className="picItemHalf" src={slika13} alt="" />
                </li>,
        to: '#',
    },
    {
        element: <li className="listSidebarItem">
                    <img className="picItemLeft" src={slika1} alt="" />
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
                    <img className="picItemLeft" src={slika2} alt="" />
                    <span className="spanTxt">Korpa</span>
                </li>,
        to: '/checkout/cart',
    },
]

const mensItem1 = [
    {
        name: 'Majice',
        to: '/muskarci/odeca/majice'
    },
    {
        name: 'Kosulje',
        to: '/deca/odeca/kosulje'
    },
    {
        name: 'Dukserice',
        to: '/muskarci/odeca/dukserice'
    },
    {
        name: 'Dzemperi',
        to: '/muskarci/odeca/dzemperi'
    },
    {
        name: 'Jakne i kaputi',
        to: '/muskarci/odeca/jakne'
    },
    {
        name: 'Pantalone',
        to: '/muskarci/odeca/pantalone'
    },
    {
        name: 'Farmerke',
        to: '/muskarci/odeca/farmerke'
    },
    {
        name: 'Bermude',
        to: '/muskarci/odeca/bermude'
    },
    {
        name: 'Haljine',
        to: '/muskarci/odeca/haljine'
    },
    {
        name: 'Ves',
        to: '/muskarci/odeca/ves'
    },
]

const majiceArray = [
    {name: 'Logo'}, {name: 'Polo'}, {name: 'Dugi rukavi'}
]

const kosuljeArray = [
    {name: 'Jednobojne'}, {name: 'Kratki rukavi'}, {name: 'Karirane'}, {name: 'Print'}
]

const duksericeArray = [
    {name: 'Duks'}, {name: 'Sa zipom'}, {name: 'Sa kapuljacom'}
]

const dzemperiArray = [
     {name: 'Rolka'}, {name: 'Dzemper'}
]

const jakneArray = [
    {name: 'Kozne'}, {name: 'Teksas'}, {name: 'Zimske'},
    {name: 'Mantili'}, {name: 'Kaputi'}, {name: 'Bomber'}, {name: 'Prsluci'}
    ,{name: 'Parka'}
]

const pantaloneArray = [
 {name: 'Kargo'}, {name: 'Chino'}, {name: 'Trenerke'}
]

const farmerkeArray = [
    {name: 'Svetli dzins'}, {name: 'Tamni dzins'}
]

const sortseviArray = [
    {name: 'Sorts'}, {name: 'Teksas'}, {name: 'Kargo'}
]

const vesArray = [
 {name: 'Slip'}, {name: 'Bokserice'}, {name: 'Pidzame'}
]

const mensItem2 = [
    {
        name: 'Cipele',
        to: '/muskarci/obuca/cipele'
    },
    {
        name: 'Patike',
        to: '/muskarci/obuca/patike'
    },
    {
        name: 'Cizme',
        to: '/muskarci/obuca/cizme'
    },
    {
        name: 'Sandale',
        to: '/muskarci/obuca/sandale'
    },
    {
        name: 'Papuce',
        to: '/muskarci/obuca/papuce'
    },
]

const patikeArray = [
    {name: 'Plitke'}, {name: 'Duboke'}
]

const brandsList = [
    {
        name: 'Replay'
    },
    {
        name: 'Paciotti'
    },
    {
        name: 'Premiata'
    },
    {
        name: 'Tommy Hilfiger'
    },
    {
        name: 'Scotch&Soda'
    },
    {
        name: 'Levis'
    },
    {
        name: 'Calvin Klein'
    },
    {
        name: 'Diesel'
    },
    {
        name: 'Guess'
    },
    {
        name: 'Liu Jo'
    },
    {
        name: 'Steve Maden',
    },
]

const torbeList = [
     {name: 'Male torbe'}, {name: 'Rancevi'}, {name: 'Putne torbe'},
    {name: 'Laptop torbe'},
]

const aksList = [
    {name: 'Kape i rukavice'}, {name: 'Kacketi'}, {name: 'Kaisevi'},
    {name: 'Naocare'}, {name: 'Novcanici'},
    {name: 'Salovi i marame'}, {name: 'Carape'}, {name: 'Ostalo'},
]

const kozmetikaList = [
    {name: 'Aksesoari'}, {name: 'Skin care'}, {name: 'Fragrance'}
]

const MensSidebarContent = (props) => {

    const [itemClicked, setItemClicked] = useState(null)
    const [showFirstDropdown, setShowFirstDropdown] = useState(false)
    const [showSecondDropdown, setShowSecondDropdown] = useState(false)
    const [showThirdDropdown, setShowThirdDropdown] = useState(false)
    const [showFourthDropdown, setShowFourthDropdown] = useState(false)
    const [showFifthDropdown, setShowFifthDropdown] = useState(false)
    const [showSixthDropdown, setShowSixthDropdown] = useState(false)
    const [showSeventhDropdown, setShowSeventhDropdown] = useState(false)
    const [showEighthDropdown, setShowEighthDropdown] = useState(false)
    const [showNinethDropdown, setShowNinethDropdown] = useState(false)
    const authDataToken = useSelector(state=>state.auth.token)

    const itemClickHandler = (idx) => {
        setItemClicked(idx)
    }

    const backToSidebarContent = () => {
        setItemClicked(null)
            setShowFirstDropdown(false);
            setShowSecondDropdown(false)
            setShowThirdDropdown(false)
            setShowFourthDropdown(false)
            setShowFifthDropdown(false)
            setShowSixthDropdown(false)
            setShowSeventhDropdown(false)
            setShowEighthDropdown(false)
            setShowNinethDropdown(false)
    }

    const dropHandler = (name) => {
        if(name === 'Majice'){
            setShowFirstDropdown(!showFirstDropdown);
            setShowSecondDropdown(false)
            setShowThirdDropdown(false)
            setShowFourthDropdown(false)
            setShowFifthDropdown(false)
            setShowSixthDropdown(false)
            setShowSeventhDropdown(false)
            setShowEighthDropdown(false)
            setShowNinethDropdown(false)
        } else if (name === 'Kosulje'){
            setShowFirstDropdown(false);
            setShowSecondDropdown(!showSecondDropdown)
            setShowThirdDropdown(false)
            setShowFourthDropdown(false)
            setShowFifthDropdown(false)
            setShowSixthDropdown(false)
            setShowSeventhDropdown(false)
            setShowEighthDropdown(false)
            setShowNinethDropdown(false)
        }else if (name === 'Dukserice'){
            setShowFirstDropdown(false);
            setShowSecondDropdown(false)
            setShowThirdDropdown(!showThirdDropdown)
            setShowFourthDropdown(false)
            setShowFifthDropdown(false)
            setShowSixthDropdown(false)
            setShowSeventhDropdown(false)
            setShowEighthDropdown(false)
            setShowNinethDropdown(false)
        }else if (name === 'Dzemperi'){
            setShowFirstDropdown(false);
            setShowSecondDropdown(false)
            setShowThirdDropdown(false)
            setShowFourthDropdown(!showFourthDropdown)
            setShowFifthDropdown(false)
            setShowSixthDropdown(false)
            setShowSeventhDropdown(false)
            setShowEighthDropdown(false)
            setShowNinethDropdown(false)
        }else if (name === 'Jakne i kaputi'){
            setShowFirstDropdown(false);
            setShowSecondDropdown(false)
            setShowThirdDropdown(false)
            setShowFourthDropdown(false)
            setShowFifthDropdown(!showFifthDropdown)
            setShowSixthDropdown(false)
            setShowSeventhDropdown(false)
            setShowEighthDropdown(false)
            setShowNinethDropdown(false)
        }else if (name === 'Pantalone'){
            setShowFirstDropdown(false);
            setShowSecondDropdown(false)
            setShowThirdDropdown(false)
            setShowFourthDropdown(false)
            setShowFifthDropdown(false)
            setShowSixthDropdown(!showSixthDropdown)
            setShowSeventhDropdown(false)
            setShowEighthDropdown(false)
            setShowNinethDropdown(false)
        }else if (name === 'Farmerke'){
            setShowFirstDropdown(false);
            setShowSecondDropdown(false)
            setShowThirdDropdown(false)
            setShowFourthDropdown(false)
            setShowFifthDropdown(false)
            setShowSixthDropdown(false)
            setShowSeventhDropdown(!showSeventhDropdown)
            setShowEighthDropdown(false)
            setShowNinethDropdown(false)
        }else if (name === 'Sortsevi'){
            setShowFirstDropdown(false);
            setShowSecondDropdown(false)
            setShowThirdDropdown(false)
            setShowFourthDropdown(false)
            setShowFifthDropdown(false)
            setShowSixthDropdown(false)
            setShowSeventhDropdown(false)
            setShowEighthDropdown(!showEighthDropdown)
            setShowNinethDropdown(false)
        }else if (name === 'Ves'){
            setShowFirstDropdown(false);
            setShowSecondDropdown(false)
            setShowThirdDropdown(false)
            setShowFourthDropdown(false)
            setShowFifthDropdown(false)
            setShowSixthDropdown(false)
            setShowSeventhDropdown(false)
            setShowEighthDropdown(false)
            setShowNinethDropdown(!showNinethDropdown)
        }

    }

    const dropHandlerObuca = (name) => {
        if(name === 'Parike'){
            setShowFirstDropdown(!showFirstDropdown);
        }
    }

  return (
    <div>
      {(itemClicked === 1) && (
                <div className="itemClickedHeader" onClick={()=>backToSidebarContent()}>
                    <i  className="fas fa-caret-left"></i>
                    <h3>NOVITETI</h3>
                </div>
            )}
        {(itemClicked === 2) && (
                <div className="itemClickedHeader" onClick={()=>backToSidebarContent()}>
                    <i  className="fas fa-caret-left"></i>
                    <h3>LUXURY</h3>
                </div>
            )}
        {(itemClicked === 3) && (
                <div className="itemClickedHeader" onClick={()=>backToSidebarContent()}>
                    <i  className="fas fa-caret-left"></i>
                    <h3>ODECA</h3>
                </div>
            )}
        {(itemClicked === 4) && (
                <div className="itemClickedHeader" onClick={()=>backToSidebarContent()}>
                    <i  className="fas fa-caret-left"></i>
                    <h3>OBUCA</h3>
                </div>
            )}
        {(itemClicked === 5) && (
                <div className="itemClickedHeader" onClick={()=>backToSidebarContent()}>
                    <i  className="fas fa-caret-left"></i>
                    <h3>BRENDOVI</h3>
                </div>
            )}
        {(itemClicked === 6) && (
                <div className="itemClickedHeader" onClick={()=>backToSidebarContent()}>
                    <i  className="fas fa-caret-left"></i>
                    <h3>TORBE</h3>
                </div>
            )}
        {(itemClicked === 7) && (
                <div className="itemClickedHeader" onClick={()=>backToSidebarContent()}>
                    <i  className="fas fa-caret-left"></i>
                    <h3>AKSESOARI</h3>
                </div>
            )}
        {(itemClicked === 8) && (
                <div className="itemClickedHeader" onClick={()=>backToSidebarContent()}>
                    <i  className="fas fa-caret-left"></i>
                    <h3>KOZMETIKA</h3>
                </div>
            )}
        {(itemClicked === null) && (
                <ul className="listSidebarContent">
                    {
                    sidebarContentList.map((obj, idx)=>{
                        if(obj.to === '/'){
                        return <a 
                        href='#'
                        className="linkSidebarItem" 
                        key={idx} 
                        onClick={()=>itemClickHandler(idx)} >
                                    {obj.element}
                                </a>
                        }else{
                        return <Link 
                        className="linkSidebarItem" 
                        key={idx} 
                          onClick={props.closeSidebar}  
                        to={(authDataToken && obj.to === '/customer/login') ? '/customer/account'
                        :(authDataToken && obj.to === '/guestwishlist') ? '/customer/wishlist' : obj.to }>
                                    {obj.element}
                                </Link>
                                }})
                    }       
                </ul>
            )}
        {(itemClicked === 2) && (
                <ul className="kidsItemContent">
                <Link className='kidsListLink1' to='/brendovi/Dsquared'>
                    <li className="kidsListItem1">
                        Dsquared2
                    </li>
                </Link>
                </ul>
            )}
        {(itemClicked === 3) && (
                <ul className="kidsItemContent">
                <Link className='kidsListLink1' to='/brendovi/odeca'>
                    <li className="kidsListItem1">
                        Sva odeca
                    </li>
                </Link>
                {mensItem1.map((obj, idx)=>{
                    return(
                        <li key={idx} className="kidsListItem">
                                <Link className='kidsListLInk'  to={obj.to}>
                                    {obj.name}
                                </Link>
                                <button onClick={()=>dropHandler(obj.name)} >{((showFirstDropdown && obj.name === 'Majice')
                                 || (showSecondDropdown && obj.name === 'Kosulje')
                                 || (showThirdDropdown && obj.name === 'Dukserice')
                                 || (showFourthDropdown && obj.name === 'Dzemperi')
                                 || (showFifthDropdown && obj.name === 'Jakne i kaputi')
                                 || (showSixthDropdown && obj.name === 'Pantalone')
                                 || (showSeventhDropdown && obj.name === 'Farmerke')
                                 || (showEighthDropdown && obj.name === 'Sortsevi')
                                 || (showNinethDropdown && obj.name === 'Ves')) === false
                                 ? (<i className="fas fa-caret-right"></i>)
                                 : (<i className="fas fa-caret-down"></i>)}
                                 </button>
                                 {((showFirstDropdown && obj.name === 'Majice')
                                 || (showSecondDropdown && obj.name === 'Kosulje')
                                 || (showThirdDropdown && obj.name === 'Dukserice')
                                 || (showFourthDropdown && obj.name === 'Dzemperi')
                                 || (showFifthDropdown && obj.name === 'Jakne i kaputi')
                                 || (showSixthDropdown && obj.name === 'Pantalone')
                                 || (showSeventhDropdown && obj.name === 'Farmerke')
                                 || (showEighthDropdown && obj.name === 'Sortsevi')
                                 || (showNinethDropdown && obj.name === 'Ves')) && (
                                     <div className='dropContentKids'>
                                         {obj.name === 'Majice' ?
                                         (
                                             <ul className='aksesoariList'>
                                                 {
                                                     majiceArray.map((obj,idx)=>{
                                                         return (
                                                             <Link key={idx} to={`/muskarci/odeca/majice/${obj.name}`}>
                                                                 <li className='aksesoariListItem'>
                                                                    {obj.name}
                                                                 </li>
                                                             </Link>
                                                         )
                                                     })
                                                 }
                                             </ul>
                                         ):obj.name === 'Kosulje' ?
                                         (
                                             <ul className='aksesoariList'>
                                                 {
                                                     kosuljeArray.map((obj,idx)=>{
                                                         return (
                                                             <Link key={idx} to={`/muskarci/odeca/kosulje/${obj.name}`}>
                                                                 <li className='aksesoariListItem'>
                                                                    {obj.name}
                                                                 </li>
                                                             </Link>
                                                         )
                                                     })
                                                 }
                                             </ul>
                                         ):obj.name === 'Dukserice' ?
                                         (
                                             <ul className='aksesoariList'>
                                                 {
                                                     duksericeArray.map((obj,idx)=>{
                                                         return (
                                                             <Link key={idx} to={`/muskarci/odeca/dukserice/${obj.name}`}>
                                                                 <li className='aksesoariListItem'>
                                                                    {obj.name}
                                                                 </li>
                                                             </Link>
                                                         )
                                                     })
                                                 }
                                             </ul>
                                         ):obj.name === 'Dzemperi' ?
                                         (
                                             <ul className='aksesoariList'>
                                                 {
                                                     dzemperiArray.map((obj,idx)=>{
                                                         return (
                                                             <Link key={idx} to={`/muskarci/odeca/dzemperi/${obj.name}`}>
                                                                 <li className='aksesoariListItem'>
                                                                    {obj.name}
                                                                 </li>
                                                             </Link>
                                                         )
                                                     })
                                                 }
                                             </ul>
                                         ):obj.name === 'Jakne i kaputi' ?
                                         (
                                             <ul className='aksesoariList'>
                                                 {
                                                     jakneArray.map((obj,idx)=>{
                                                         return (
                                                             <Link key={idx} to={`/muskarci/odeca/jakne/${obj.name}`}>
                                                                 <li className='aksesoariListItem'>
                                                                    {obj.name}
                                                                 </li>
                                                             </Link>
                                                         )
                                                     })
                                                 }
                                             </ul>
                                         ):obj.name === 'Pantalone' ?
                                         (
                                             <ul className='aksesoariList'>
                                                 {
                                                     pantaloneArray.map((obj,idx)=>{
                                                         return (
                                                             <Link key={idx} to={`/muskarci/odeca/pantalone/${obj.name}`}>
                                                                 <li className='aksesoariListItem'>
                                                                    {obj.name}
                                                                 </li>
                                                             </Link>
                                                         )
                                                     })
                                                 }
                                             </ul>
                                         ):obj.name === 'Farmerke' ?
                                         (
                                             <ul className='aksesoariList'>
                                                 {
                                                     farmerkeArray.map((obj,idx)=>{
                                                         return (
                                                             <Link key={idx} to={`/muskarci/odeca/farmerke/${obj.name}`}>
                                                                 <li className='aksesoariListItem'>
                                                                    {obj.name}
                                                                 </li>
                                                             </Link>
                                                         )
                                                     })
                                                 }
                                             </ul>
                                         ):obj.name === 'Sortsevi' ?
                                         (
                                             <ul className='aksesoariList'>
                                                 {
                                                     sortseviArray.map((obj,idx)=>{
                                                         return (
                                                             <Link key={idx} to={`/muskarci/odeca/sortsevi/${obj.name}`}>
                                                                 <li className='aksesoariListItem'>
                                                                    {obj.name}
                                                                 </li>
                                                             </Link>
                                                         )
                                                     })
                                                 }
                                             </ul>
                                         ):obj.name === 'Ves' ?
                                         (
                                             <ul className='aksesoariList'>
                                                 {
                                                     vesArray.map((obj,idx)=>{
                                                         return (
                                                             <Link key={idx} to={`/muskarci/odeca/ves/${obj.name}`}>
                                                                 <li className='aksesoariListItem'>
                                                                    {obj.name}
                                                                 </li>
                                                             </Link>
                                                         )
                                                     })
                                                 }
                                             </ul>
                                         ): <div>primer</div>}
                                     </div>
                                 )}
                        </li>
                    )
                })}
                </ul>
            )}
            {
                (itemClicked === 4) && (
                    <ul className='kidsItemContent'>
                        <Link className='kidsListLink1' to='/brendovi/obuca'>
                            <li className="kidsListItem1">
                                Sva obuca
                            </li>
                        </Link>
                        {mensItem2.map((obj, idx)=>{
                            if(obj.name === 'Patike'){
                                return(
                                    <li key={idx} className="kidsListItem">
                                        <Link className='kidsListLInk'  to={obj.to}>
                                            {obj.name}
                                        </Link>
                                        <button onClick={()=>dropHandlerObuca(obj.name)} >{((showFirstDropdown && obj.name === 'Patike')) === false
                                     ? (<i className="fas fa-caret-right"></i>)
                                     : (<i className="fas fa-caret-down"></i>)}
                                     </button>
                                     {
                                         ((showFirstDropdown && obj.name === 'Patike')) && (
                                             <div className='dropContentKids'>
                                                 {
                                                     obj.name === 'Patike' ?
                                                     (
                                                         <ul className='aksesoariList'>
                                                             {
                                                                 patikeArray.map((obj,idx)=>{
                                                                     return (
                                                                         <Link key={idx} to={`/zene/obuca/patike/${obj.name}`}>
                                                                             <li className='aksesoariListItem'>
                                                                                {obj.name}
                                                                             </li>
                                                                         </Link>
                                                                     )
                                                                 })
                                                             }
                                                         </ul>
                                                     ):<div>greska</div>
                                                 }
                                             </div>
                                         )
                                     }
                                    </li>
                                )
                            }else{
                                return <Link className='kidsListLink1' to='/brendovi/obuca'>
                                <li className="kidsListItem1">
                                    {obj.name}
                                </li>
                            </Link>
                            }
                            
                        })}
                    </ul>
                )
            }
            {
                (itemClicked === 5) && (
                    <ul className='kidsItemContent'>
                        <Link className='kidsListLink1' to='/brendovi'>
                            <li className="kidsListItem1">
                                Svi brendovi
                            </li>
                        </Link>
                        {brandsList.map((obj, idx)=>{
                            return <Link key={idx} className='kidsListLink1' to={`/brendovi/${obj.name}`}>
                            <li className="kidsListItem1">
                                {obj.name}
                            </li>
                        </Link>
                        })}
                    </ul>
                )
            }
            {
                (itemClicked === 6) && (
                    <ul className='kidsItemContent'>
                        <Link className='kidsListLink1' to='/brendovi'>
                            <li className="kidsListItem1">
                                Sve torbe
                            </li>
                        </Link>
                        {torbeList.map((obj, idx)=>{
                            return <Link key={idx} className='kidsListLink1' to={`/torbe/${obj.name}`}>
                            <li className="kidsListItem1">
                                {obj.name}
                            </li>
                        </Link>
                        })}
                    </ul>
                )
            }
            {
                (itemClicked === 7) && (
                    <ul className='kidsItemContent'>
                        <Link className='kidsListLink1' to='/brendovi'>
                            <li className="kidsListItem1">
                                Svi aksesoari
                            </li>
                        </Link>
                        {aksList.map((obj, idx)=>{
                            return <Link key={idx} className='kidsListLink1' to={`/aksesoari/${obj.name}`}>
                            <li className="kidsListItem1">
                                {obj.name}
                            </li>
                      </Link>
                        })}
                    </ul>
                )
            }
            {
                (itemClicked === 8) && (
                    <ul className='kidsItemContent'>
                        {kozmetikaList.map((obj, idx)=>{
                            return <Link key={idx} className='kidsListLink1' to={`/kozmetika/${obj.name}`}>
                            <li className="kidsListItem1">
                                {obj.name}
                            </li>
                      </Link>
                        })}
                    </ul>
                )
            }
    </div>
  )
}

export default MensSidebarContent
