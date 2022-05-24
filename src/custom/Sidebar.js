import React, {useState} from "react";
import './Sidebar.css';
import KidsSidebarContent from "./KidsSidebarContent";
import WomensSidebarContent from "./sidebarComponents/WomensSidebarContent";
import MensSidebarContent from "./sidebarComponents/MensSidebarContent";

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
                    {activeSidebarTab === 0 ? (
                        <WomensSidebarContent itemClicked={handleItem} closeSidebar={props.closeSidebar} />
                    ) : activeSidebarTab === 1 ? (
                                <MensSidebarContent itemClicked={handleItem} closeSidebar={props.closeSidebar} />
                            ) : activeSidebarTab === 2 ? (
                                <KidsSidebarContent itemClicked={handleItem} closeSidebar={props.closeSidebar}/>
                            ) : null }
                    
                </div>
            </div>
            <i onClick={props.closeSidebar} className="fas fa-times"></i>
        </div>
    )
}

export default Sidebar