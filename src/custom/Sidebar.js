import React, {useState} from "react";
import { Link } from "react-router-dom"
import './Sidebar.css';
import slika from '../assets/drop1.png';
import slika1 from '../assets/user-solid.svg'
import slika2 from '../assets/bag-shopping-solid.svg'
import KidsSidebarContent from "./KidsSidebarContent";
import { useSelector } from "react-redux";

const sidebarTabTitle = [
    {
        title: "ZENE"
    },
    {
        title: "MUSKARCI"
    },
    {
        title: "DECA"
    }
]

const sidebarContentList = [
    {
        element: <li className="listSidebarItem">
                    <span className="spanTxt">ZENE POCETNA</span>
                    <img className="picItem" src={slika} alt="" />
                </li>,
        to: '/',
    },
    {
        element: <li className="listSidebarItem">
                    <span className="spanTxt">NOVITETI</span>
                    <img className="picItem" src={slika} alt="" />
                </li>,
        to: '/',
    },
    {
        element: <li className="listSidebarItem">
                    <span className="spanTxt">LUXURY</span>
                    <img className="picItem" src={slika} alt="" />
                </li>,
        to: '/',
    },
    {
        element: <li className="listSidebarItem">
                    <span className="spanTxt">ODECA</span>
                    <img className="picItem" src={slika} alt="" />
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
                    <img className="picItem" src={slika} alt="" />
                </li>,
        to: '/',
    },
    {
        element: <li className="listSidebarItem">
                    <span className="spanTxt">TORBE</span>
                    <img className="picItem" src={slika} alt="" />
                </li>,
        to: '/',
    },
    {
        element: <li className="listSidebarItem">
                    <span className="spanTxt">AKSESOARI</span>
                    <img className="picItem" src={slika} alt="" />
                </li>,
        to: '/',
    },
    {
        element: <li className="listSidebarItem">
                    <span className="spanTxt">KOZMETIKA</span>
                    <img className="picItem" src={slika} alt="" />
                </li>,
        to: '/',
    },
    {
        element: <li className="listSidebarItem">
                    <span className="spanTxt">EDITORIJAL</span>
                    <img className="picItem" src={slika} alt="" />
                </li>,
        to: '/',
    },
    {
        element: <li className="listSidebarItem">
                    <img className="overlayPicItem" src={slika} alt="" />
                </li>,
        to: '/',
    },
    {
        element: <li className="listSidebarItem">
                    <img className="overlayPicItem" src={slika} alt="" />
                </li>,
        to: '/',
    },
    {
        element: <li className="listSidebarItem">
                    <span className="spanTxt">PRODAVNICE</span>
                    <img className="picItemHalf" src={slika} alt="" />
                </li>,
        to: '/',
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
                    <span className="heartSpan"><i className="far fa-heart"></i>&</span>
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

const sidebarContentListMens = [
    {
        title: "MUSKARCI POCETNA",
        slika: slika
    },
    {
        title: "NOVITETI",
        slika: slika
    },
    {
        title: "LUXURY",
        slika: slika
    },
    {
        title: "ODECA",
        slika: slika
    },
    {
        title: "OBUCA",
        slika: slika
    },
    {
        title: "BRENDOVI",
        slika: slika
    },
    {
        title: "TORBE",
        slika: slika
    },
    {
        title: "AKSESOARI",
        slika: slika
    },
    {
        title: "KOZMETIKA", 
        slika: slika
    },
    {
        title: "PRODAVNICE",
        slika: slika
    },
    {
        title: "EDITORIJAL",
        slika: slika
    },
]





const Sidebar = (props) => {

    const [activeSidebarTab, setActiveSidebarTab] = useState(0)
    const [itemClicked, setItemClicked] = useState(null)
    const authDataToken = useSelector(state=>state.auth.token)

    const handleItem = (val) => {
        setItemClicked(val)
    }
    
    return (
        <div className="sidebar-active">
            <div className="sidebarContent">
                {(itemClicked==null) && (
                    <div className="tabSidebar">
                        <ul className="ulList">
                            {
                                sidebarTabTitle.map((obj, idx) =>{
                                    return <li className="sidebarTabItem" key={idx}>
                                        <button 
                                        key={idx} 
                                        onClick={()=>setActiveSidebarTab(idx)} 
                                        className={`tabButton ${idx === activeSidebarTab ? " active": ""}`}>
                                            {obj.title}
                                            </button>
                                        </li>
                                        })
                            }
                        </ul>
                    </div>
                )}
                <div className="tabSidebarContent">
                    {activeSidebarTab === 0 ? (<div>
                        <ul className="listSidebarContent">
                                 {
                                     sidebarContentList.map((obj, idx)=>{
                                            return <Link 
                                            className="linkSidebarItem" 
                                            key={idx} 
                                            to={(authDataToken && obj.to === '/customer/login') ? '/customer/account'
                                            :(authDataToken && obj.to === '/guestwishlist') ? '/customer/wishlist' : obj.to}>
                                                        {obj.element}
                                                    </Link>
                                     })
                                 }       
                        </ul>
                            </div>) : activeSidebarTab === 1 ? (
                                <div>
                                <ul className="listSidebarContent">
                                         {
                                             sidebarContentListMens.map((obj, idx)=>{
                                                 return <Link className="linkSidebarItem" key={idx} to='zene'>
                                                            <li className="listSidebarItem" key={idx}>
                                                                {obj.title}
                                                                <img src={obj.slika} alt="" />
                                                            </li>
                                                        </Link>
                                             })
                                         }       
                                </ul>
                                    </div>
                            ) : activeSidebarTab === 2 ? (
                                <KidsSidebarContent itemClicked={handleItem}/>
                            ) : null }
                    
                </div>
            </div>
            <i onClick={props.closeSidebar} className="fas fa-times"></i>
        </div>
    )
}

export default Sidebar