import React from 'react'
import '../../HomeScreen/DropdownMeni.css'
import {Link} from 'react-router-dom'
import SearchModalComponent from '../SearchModalComponent'

const Buttons = (props) => {
  return (
    <div className="insideDropdown">
                    <div
                    onMouseOver={props.onMouseOver1}
                    onMouseLeave={props.onMouseLeave1}
                    className="dropdown">
                        <Link to='/zene/noviteti'><button className="dropbtn">Noviteti<i className="fas fa-caret-down"></i></button></Link>
                        
                    </div>
                    <div
                    onMouseOver={props.onMouseOver2}
                    onMouseLeave={props.onMouseLeave2}
                    className="dropdown">
                        <Link to='/brendovi/dsquared2'><button className="dropbtn">Luxury<i className="fas fa-caret-down"></i></button></Link>
                    </div>
                    <div 
                    onMouseOver={props.onMouseOver3}
                     onMouseLeave={props.onMouseLeave3}
                    className="dropdown">
                        <Link to='/zene/odeca'><button className="dropbtn">Odeca<i className="fas fa-caret-down"></i></button></Link>
                        
                    </div>
                    <div
                    onMouseOver={props.onMouseOver4}
                    onMouseLeave={props.onMouseLeave4}
                    className="dropdown">
                        <Link to='/zene/obuca'><button className="dropbtn">Obuca<i className="fas fa-caret-down"></i></button></Link>
                        
                    </div> 
                    <div
                    onMouseOver={props.onMouseOver5}
                    onMouseLeave={props.onMouseLeave5}
                    className="dropdown">
                        <Link to='/brendovi'><button className="dropbtn">Brendovi<i className="fas fa-caret-down"></i></button></Link>
                        
                    </div>
                    <div
                    onMouseOver={props.onMouseOver6}
                    onMouseLeave={props.onMouseLeave6}
                    className="dropdown">
                        <Link to='/zene/torbe'><button className="dropbtn">Torbe<i className="fas fa-caret-down"></i></button></Link>
                        
                    </div>
                    <div
                    onMouseOver={props.onMouseOver7}
                    onMouseLeave={props.onMouseLeave7}
                    className="dropdown">
                        <Link to='/zene/aksesoari'><button className="dropbtn">Aksesoari<i className="fas fa-caret-down"></i></button></Link>
                        
                    </div>
                    {/* <div
                    onMouseOver={props.onMouseOver8}
                    onMouseLeave={props.onMouseLeave8}
                    className="dropdown">
                        <Link to='/zene/kozmetika'><button className="dropbtn">Kozmetika<i className="fas fa-caret-down"></i></button></Link>
                        
                    </div> */}
                    <div
                    onMouseOver={props.onMouseOver9}
                    onMouseLeave={props.onMouseLeave9}
                    className="dropdown">
                        <Link to='/zene/outlet'><button className="dropbtn">Outlet<i className="fas fa-caret-down"></i></button></Link>
                        
                    </div>
                    {/* <div
                    onMouseOver={props.onMouseOver10}
                    onMouseLeave={props.onMouseLeave10}
                    className="dropdown">
                        <button className="dropbtn">Editorial<i className="fas fa-caret-down"></i></button>
                        
                    </div> */}
                    {props.longSearch ? (
                        <span ref={props.inputSearch} className={props.longButtonSearch}>
                            <input type='text' placeholder="Trazite"/>
                            <i className="fa fa-search"></i>
                        </span>
                    ) : !(props.showBtnSearch) && ((<span ref={props.trigger} className={props.buttonSearch}><i className="fa fa-search"></i></span>))}
                
                    {props.longSearch && (
                        <div className="modal--overlay">
                            <div ref={props.modal} className={props.modalClasses}>
                                <SearchModalComponent
                                popularSearch={props.popularSearch}
                                brands={props.brands}
                                products={props.products}
                                />
                            </div>
                        </div>
                    )}
                    {props.longSearch && (
                        <i id={props.triangle} className="fas fa-caret-up"></i>
                    )}
                </div>
  )
}

export default Buttons
