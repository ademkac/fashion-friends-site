import React, { useState } from "react";
import './ShoesComponent.css';
import slika from '../../assets/colmarPic.png';
import { Link } from "react-router-dom";

const patike = [
    {
        name: 'Plitke'
    },
    {
        name: 'Duboke'
    },
    
]

const papuce = [
    {
        name: 'Papuce'
    },
    {
        name: 'Japanke'
    },
    
]

const ShoesComponent = (props) => {

    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)


    return(
        
            <div className="insideShoesContainer">
                <ul id="shoesList">
                    <li><Link className="shoesLink" to='/muskarci/obuca/bermude'>Cipele </Link></li>  
                    <li><Link className="shoesLink" to='/muskarci/obuca/kupacikostimi'>Makasine </Link></li>
                    <li><Link className="shoesLink" to='/muskarci/obuca/jakne-kaputi'>Patike </Link> {show1 ?<span onClick={()=>setShow1(!show1)} className="rightSpanLi">&or;</span> : <span onClick={()=>setShow1(!show1)} className="rightSpanLi">&#62;</span>}</li>
                    {show1 && (
                        <div className="listContain">
                            {
                                patike.map((obj, idx) => {
                                    return(
                                        <p className="itemSneakers" key={idx}><Link to={`/muskarci/obuca/patike/${obj.name}`}>{obj.name}</Link></p>
                                    )
                                })
                            }
                        </div>
                    )}
                    <li><Link className="shoesLink" to='/muskarci/obuca/pantalone'>Cizme</Link></li>
            
                </ul>
                <ul id="shoesList1">
                    <li><Link className="shoesLink" to='/muskarci/obuca/dukserice'>Japanke </Link></li>
                    <li><Link className="shoesLink" to='/muskarci/obuca/kosulje'>Papuce </Link> {show2 ?<span onClick={()=>setShow2(!show2)} className="rightSpanLi">&or;</span> : <span onClick={()=>setShow2(!show2)} className="rightSpanLi">&#62;</span>}</li>
                    {show2 && (
                        <div className="listContain">
                            {
                                papuce.map((obj, idx) => {
                                    return(
                                        <p className="itemSneakers" key={idx}><Link to={`/muskarci/obuca/patike/${obj.name}`}>{obj.name}</Link></p>
                                    )
                                })
                            }
                        </div>
                    )}
                    <li><Link className="shoesLink" to='/muskarci/obuca/majice'>Sandale </Link></li>
                </ul>
                <div className="rightContImg">
                    <Link to='/muskarci/obuca/brend'><img src={slika} alt='' /></Link>
                </div>
            </div>
    )
}

export default ShoesComponent;