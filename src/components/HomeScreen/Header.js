import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom"
import Sidebar from "../../custom/Sidebar";
import './Header.css';


const leftNavBar = [
    {
        title: "zene"
    },
    {
        title: "muskarci"
    },
    {
        title: "deca"
    }
]

const Header = (props) => {

    const [activeNav, setActiveNav] = useState(0)
    const [visible, setVisible] = useState(false)
    const [stick, setStick] = useState(false)
    const headerClasses = `headerContainer ${stick  ? 'sticky' : ''}`

    useEffect(()=>{
        visible ? document.body.style.overflow = 'hidden'
                : document.body.style.overflowY = 'scroll'
    },[visible])

    const toggleClass = (id) => {
        setActiveNav(id)
    }

    const openSidebar = () => {
        setVisible(true)
    }

    const closeSidebar = () => {
        setVisible(false)
    }

    const handleScroll = () => {
        setStick( window.scrollY > 0 );
      };
    const handleResize = () => {
         setVisible(!window.innerWidth > 808) 
    }

    useLayoutEffect(()=> {
        window.addEventListener('resize', handleResize)
        return(()=> {
            window.removeEventListener('resize', handleResize)
        })
    })

    useLayoutEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
        return(() => {
          window.removeEventListener('scroll', handleScroll);
        });
      });
    

    return(
        <div className={headerClasses}>
                {!visible && 
                    (
                        <div className="mobile-menu" onClick={openSidebar}>
                            <i className="fas fa-bars menu-icon"></i>
                        </div>
                    )}
                <div className="leftNav">
                    <ul className= "leftList"> 
                       {/*  <li className="option" ><Link className="item" to="/zene">Zene</Link></li>
                        <li className="option" ><Link className="item" to="/muskarci">Muskarci</Link></li>
                        <li className="option" ><Link className="item" to="/deca">Deca</Link></li> */}
                        {
                            leftNavBar.map((obj, idx)=>{
                                return <li  className="option" key={idx}><Link onClick={()=> toggleClass(idx)} className={`item ${idx == activeNav ? " active" : ""}`} key={idx} to={`/${obj.title}`}>{obj.title}</Link></li>
                            })
                        }
                    </ul>
                </div>
                <div className="titleNav"><Link className="titleLink" to='/'>FASHION<span className="titleSpan">&</span>FRIENDS</Link></div>
                <div className="rightNav">
                    <div className="userInfo">
                        <div className="farr">
                            <i className="far fa-user"></i>
                        </div>
                        <div className="farr">
                            <i className="far fa-heart"></i><span className="heartSpan">&</span>
                        </div>
                        <div className="farr">
                            <i className="fas fa-shopping-bag"></i>
                        </div>
                    </div>
                
                </div>
                <div className="mobileRight">
                    <div className="farr">
                        <i className="fas fa-shopping-bag cart-icon"></i>
                    </div>
                </div>
                {visible && 
                   (
                    <Sidebar closeSidebar={closeSidebar}/>
                   )
                }
            
        </div>
    )
}

export default Header