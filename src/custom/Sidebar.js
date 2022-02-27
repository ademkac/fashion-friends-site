import React, {useState} from "react";
import { Link } from "react-router-dom"
import './Sidebar.css';
import slika from '../assets/drop1.png';
import KidsSidebarContent from "./KidsSidebarContent";

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
        title: "ZENE POCETNA",
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
                                    return <li className="sidebarTabItem" key={idx}><button key={idx} onClick={()=>setActiveSidebarTab(idx)} className={`tabButton ${idx === activeSidebarTab ? " active": ""}`}>{obj.title}</button></li>
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
                                         return <Link className="linkSidebarItem" key={idx} to='zene'>
                                                    <li className="listSidebarItem" key={idx}>
                                                        {obj.title}
                                                        <img src={obj.slika} alt="" />
                                                    </li>
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