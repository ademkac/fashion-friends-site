import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";
import '../Sidebar.css';
import slika from '../../assets/sidebarPic5.png';
import slika4 from '../../assets/sidebarPic4.png';
import slika5 from '../../assets/sidebarPic6.png';
import slika6 from '../../assets/sidebarPic2.png';
import slika3 from '../../assets/outletDrop.png';
import slika1 from '../../assets/user-solid.svg'
import slika2 from '../../assets/bag-shopping-solid.svg'
import slika7 from '../../assets/sidebarPic.png'
import slika8 from '../../assets/sidebarPic3.png'
import slika9 from '../../assets/sidebarPic7.png';
import slika10 from '../../assets/sidebarPic8.png';
import slika11 from '../../assets/sidebarPic9.png';
import slika12 from '../../assets/sidebarPic10.png';
import slika13 from '../../assets/sidebarPic11.png';
import slika14 from '../../assets/sidebarPic12.png';

const sidebarContentList = [
    {
        element: <li className="listSidebarItem">
                    <span className="spanTxt">ZENE POCETNA</span>
                    <img className="picItem" src={slika4} alt="" />
                </li>,
        to: '/zene',
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

const womensItem1 = [
    {
        name: 'Majice',
        to: '/zene/odeca/majice'
    },
    {
        name: 'Kosulje',
        to: '/deca/odeca/kosulje'
    },
    {
        name: 'Dukserice',
        to: '/zene/odeca/dukserice'
    },
    {
        name: 'Dzemperi',
        to: '/zene/odeca/dzemperi'
    },
    {
        name: 'Jakne i kaputi',
        to: '/zene/odeca/jakne'
    },
    {
        name: 'Pantalone',
        to: '/zene/odeca/pantalone'
    },
    {
        name: 'Farmerke',
        to: '/zene/odeca/farmerke'
    },
    {
        name: 'Suknje',
        to: '/zene/odeca/suknje'
    },
    {
        name: 'Haljine',
        to: '/zene/odeca/haljine'
    },
    {
        name: 'Ves',
        to: '/zene/odeca/ves'
    },
]

const majiceArray = [
    {name: 'Logo'}, {name: 'Bretele'}, {name: 'Tunika'}, {name: 'Rolka'},
    {name: 'Body'}, {name: 'Cipka'}, {name: 'Top'}
]

const kosuljeArray = [
    {name: 'Jednobojne'}, {name: 'Karirane'}, {name: 'Print'}
]

const duksericeArray = [
    {name: 'Duks'}, {name: 'Sa zipom'}, {name: 'Sa kapuljacom'}
]

const dzemperiArray = [
    {name: 'Kardigan'}, {name: 'Rolka'}, {name: 'Dzemper'}
]

const jakneArray = [
    {name: 'Kozne'}, {name: 'Teksas'}, {name: 'Bunde'}, {name: 'Zimske'},
    {name: 'Mantili'}, {name: 'Kaputi'}, {name: 'Bomber'}, {name: 'Prsluci'}
    ,{name: 'Parka'}
]

const pantaloneArray = [
    {name: 'Eko koza'}, {name: 'Kapri'}, {name: 'Dubok struk'}, {name: 'Zvonaste'},
    {name: 'Chino'}, {name: 'Helanke'}, {name: 'Trenerke'}
]

const farmerkeArray = [
    {name: 'Svetli dzins'}, {name: 'Tamni dzins'}
]

const suknjeArray = [
    {name: 'Mini'}, {name: 'Midi'}, {name: 'Maxi'}
]

const vesArray = [
    {name: 'Grudnjaci'}, {name: 'Slip'}, {name: 'Bokserice'}, {name: 'Pidzame'}
]

const womensItem2 = [
    {
        name: 'Cipele',
        to: '/zene/obuca/cipele'
    },
    {
        name: 'Patike',
        to: '/zene/obuca/patike'
    },
    {
        name: 'Cizme',
        to: '/zene/obuca/cizme'
    },
    {
        name: 'Sandale',
        to: '/zene/obuca/sandale'
    },
    {
        name: 'Papuce',
        to: '/zene/obuca/papuce'
    },
]

const cipeleArray = [
    {name: 'Visoka stikla'}, {name: 'Niska stikla'}, {name: 'Ravna'}
]

const patikeArray = [
    {name: 'Plitke'}, {name: 'Duboke'}
]

const sandaleArray = [
    {name: 'Visoka stikla'}, {name: 'Niska stikla'}, {name: 'Ravne'}, {name: 'Platforme'}
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
    {name: 'Velike torbe'}, {name: 'Male torbe'}, {name: 'Rancevi'},
    {name: 'Vecernje torbe'}, {name: 'Putne torbe'}, {name: 'Torbe za plazu'},
    {name: 'Laptop torbe'},
]

const aksList = [
    {name: 'Kape i rukavice'}, {name: 'Kacketi'}, {name: 'Kaisevi'},
    {name: 'Naocare'}, {name: 'Neseseri'}, {name: 'Novcanici'},
    {name: 'Salovi i marame'}, {name: 'Carape'}, {name: 'Ostalo'},
]

const WomensSidebarContent = (props) => {

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
    const [showTenthDropdown, setShowTenthDropdown] = useState(false)
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
            setShowTenthDropdown(false)
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
            setShowTenthDropdown(false)
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
            setShowTenthDropdown(false)
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
            setShowTenthDropdown(false)
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
            setShowTenthDropdown(false)
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
            setShowTenthDropdown(false)
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
            setShowTenthDropdown(false)
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
            setShowTenthDropdown(false)
        }else if (name === 'Suknje'){
            setShowFirstDropdown(false);
            setShowSecondDropdown(false)
            setShowThirdDropdown(false)
            setShowFourthDropdown(false)
            setShowFifthDropdown(false)
            setShowSixthDropdown(false)
            setShowSeventhDropdown(false)
            setShowEighthDropdown(!showEighthDropdown)
            setShowNinethDropdown(false)
            setShowTenthDropdown(false)
        }else if (name === 'Haljine'){
            setShowFirstDropdown(false);
            setShowSecondDropdown(false)
            setShowThirdDropdown(false)
            setShowFourthDropdown(false)
            setShowFifthDropdown(false)
            setShowSixthDropdown(false)
            setShowSeventhDropdown(false)
            setShowEighthDropdown(false)
            setShowNinethDropdown(!showNinethDropdown)
            setShowTenthDropdown(false)
        }else {
            setShowFirstDropdown(false);
            setShowSecondDropdown(false)
            setShowThirdDropdown(false)
            setShowFourthDropdown(false)
            setShowFifthDropdown(false)
            setShowSixthDropdown(false)
            setShowSeventhDropdown(false)
            setShowEighthDropdown(false)
            setShowNinethDropdown(false)
            setShowTenthDropdown(!showTenthDropdown)
        }

    }

    const dropHandlerObuca = (name) => {
        if(name === 'Cipele'){
            setShowFirstDropdown(!showFirstDropdown);
            setShowSecondDropdown(false)
            setShowThirdDropdown(false)
            setShowFourthDropdown(false)
        }else if(name === 'Patike'){
            setShowFirstDropdown(false);
            setShowSecondDropdown(!showSecondDropdown)
            setShowThirdDropdown(false)
            setShowFourthDropdown(false)
        }else if(name === 'Cizme'){
            setShowFirstDropdown(false);
            setShowSecondDropdown(false)
            setShowThirdDropdown(!showThirdDropdown)
            setShowFourthDropdown(false)
        }else if(name === 'Sandale'){
            setShowFirstDropdown(false);
            setShowSecondDropdown(false)
            setShowThirdDropdown(false)
            setShowFourthDropdown(!showFourthDropdown)
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
                {womensItem1.map((obj, idx)=>{
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
                                 || (showEighthDropdown && obj.name === 'Suknje')
                                 || (showNinethDropdown && obj.name === 'Haljine')
                                 || (showTenthDropdown && obj.name === 'Ves')) === false
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
                                 || (showEighthDropdown && obj.name === 'Suknje')
                                 || (showNinethDropdown && obj.name === 'Haljine')
                                 || (showTenthDropdown && obj.name === 'Ves')) && (
                                     <div className='dropContentKids'>
                                         {obj.name === 'Majice' ?
                                         (
                                             <ul className='aksesoariList'>
                                                 {
                                                     majiceArray.map((obj,idx)=>{
                                                         return (
                                                             <Link key={idx} to={`/zene/odeca/majice/${obj.name}`}>
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
                                                             <Link key={idx} to={`/zene/odeca/kosulje/${obj.name}`}>
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
                                                             <Link key={idx} to={`/zene/odeca/dukserice/${obj.name}`}>
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
                                                             <Link key={idx} to={`/zene/odeca/dzemperi/${obj.name}`}>
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
                                                             <Link key={idx} to={`/zene/odeca/jakne/${obj.name}`}>
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
                                                             <Link key={idx} to={`/zene/odeca/pantalone/${obj.name}`}>
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
                                                             <Link key={idx} to={`/zene/odeca/farmerke/${obj.name}`}>
                                                                 <li className='aksesoariListItem'>
                                                                    {obj.name}
                                                                 </li>
                                                             </Link>
                                                         )
                                                     })
                                                 }
                                             </ul>
                                         ):obj.name === 'Suknje' ?
                                         (
                                             <ul className='aksesoariList'>
                                                 {
                                                     suknjeArray.map((obj,idx)=>{
                                                         return (
                                                             <Link key={idx} to={`/zene/odeca/suknje/${obj.name}`}>
                                                                 <li className='aksesoariListItem'>
                                                                    {obj.name}
                                                                 </li>
                                                             </Link>
                                                         )
                                                     })
                                                 }
                                             </ul>
                                         ):obj.name === 'Haljine' ?
                                         (
                                             <ul className='aksesoariList'>
                                                 {
                                                     suknjeArray.map((obj,idx)=>{
                                                         return (
                                                             <Link key={idx} to={`/zene/odeca/haljine/${obj.name}`}>
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
                                                             <Link key={idx} to={`/zene/odeca/ves/${obj.name}`}>
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
                        {womensItem2.map((obj, idx)=>{
                            return(
                                <li key={idx} className="kidsListItem">
                                    <Link className='kidsListLInk'  to={obj.to}>
                                        {obj.name}
                                    </Link>
                                    <button onClick={()=>dropHandlerObuca(obj.name)} >{((showFirstDropdown && obj.name === 'Cipele')
                                 || (showSecondDropdown && obj.name === 'Patike')
                                 || (showThirdDropdown && obj.name === 'Cizme')
                                 || (showFourthDropdown && obj.name === 'Sandale')
                                 || (showFifthDropdown && obj.name === 'Papuce')) === false
                                 ? (<i className="fas fa-caret-right"></i>)
                                 : (<i className="fas fa-caret-down"></i>)}
                                 </button>
                                 {
                                     ((showFirstDropdown && obj.name === 'Cipele')
                                     || (showSecondDropdown && obj.name === 'Patike')
                                     || (showThirdDropdown && obj.name === 'Cizme')
                                     || (showFourthDropdown && obj.name === 'Sandale')) && (
                                         <div className='dropContentKids'>
                                             {
                                                 obj.name === 'Cipele' ?
                                                 (
                                                     <ul className='aksesoariList'>
                                                         {
                                                             cipeleArray.map((obj,idx)=>{
                                                                 return (
                                                                     <Link key={idx} to={`/zene/obuca/cipele/${obj.name}`}>
                                                                         <li className='aksesoariListItem'>
                                                                            {obj.name}
                                                                         </li>
                                                                     </Link>
                                                                 )
                                                             })
                                                         }
                                                     </ul>
                                                 ):obj.name === 'Patike' ?
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
                                                 ):obj.name === 'Cizme' ?
                                                 (
                                                     <ul className='aksesoariList'>
                                                         {
                                                             cipeleArray.map((obj,idx)=>{
                                                                 return (
                                                                     <Link key={idx} to={`/zene/obuca/cizme/${obj.name}`}>
                                                                         <li className='aksesoariListItem'>
                                                                            {obj.name}
                                                                         </li>
                                                                     </Link>
                                                                 )
                                                             })
                                                         }
                                                     </ul>
                                                 ):obj.name === 'Sandale' ?
                                                 (
                                                     <ul className='aksesoariList'>
                                                         {
                                                             sandaleArray.map((obj,idx)=>{
                                                                 return (
                                                                     <Link key={idx} to={`/zene/obuca/sandale/${obj.name}`}>
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
    </div>
  )
}

export default WomensSidebarContent
