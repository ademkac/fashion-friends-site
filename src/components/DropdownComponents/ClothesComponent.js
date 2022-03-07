import React, { useState } from "react";
import './ClothesComponent.css';
import slika from '../../assets/colmarPic.png';
import { Link } from "react-router-dom";

const jakneIkaputi = [
    {
        name: 'Kozne'
    },
    {
        name: 'Teksas'
    },
    {
        name: 'Parka'
    },
    {
        name: 'Zimske'
    },
    {
        name: 'Mantil'
    },
    {
        name: 'Prsluci'
    },
    {
        name: 'Kaputi'
    },
    {
        name: 'Bomber'
    },
]

const ClothesComponent = (props) => {

    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    const [show5, setShow5] = useState(false)
    const [show6, setShow6] = useState(false)


    return(
        
            <div className="insideClothesContainer">
                <ul id="clothesList">
                    <li><Link className="clothesLink" to='/muskarci/odeca/bermude'>Bermude </Link></li>  
                    <li><Link className="clothesLink" to='/muskarci/odeca/jakne-kaputi'>Jakne i kaputi </Link> {show1 ?<span onClick={()=>setShow1(!show1)} className="rightSpanLi">&or;</span> : <span onClick={()=>setShow1(!show1)} className="rightSpanLi">&#62;</span>}</li>
                    {show1 && (
                        <div className="listContain">
                            {
                                jakneIkaputi.map((obj, idx) => {
                                    return(
                                        <p className="itemJacket" key={idx}><Link to={`/muskarci/odeca/jakneikaputi/${obj.name}`}>{obj.name}</Link></p>
                                    )
                                })
                            }
                        </div>
                    )}
                    <li><Link className="clothesLink" to='/muskarci/odeca/kupacikostimi'>Kupaci kostimi </Link><span className="rightSpanLi">&#62;</span></li>
                    <li><Link className="clothesLink" to='/muskarci/odeca/pantalone'>Pantalone</Link> <span className="rightSpanLi">&#62;</span></li>
                    <li><Link className="clothesLink" to='/muskarci/odeca/farmerke'>Farmerke</Link> <span className="rightSpanLi">&#62;</span></li>
                    <li><Link className="clothesLink" to='/muskarci/odeca/sortsevi'>Sortsevi</Link> <span className="rightSpanLi">&#62;</span></li>
                </ul>
                <ul id="clothesList1">
                    <li><Link className="clothesLink" to='/muskarci/odeca/dukserice'>Dukserice </Link></li>
                    <li><Link className="clothesLink" to='/muskarci/odeca/kosulje'>Kosulje </Link><span className="rightSpanLi">&#62;</span></li>
                    <li><Link className="clothesLink" to='/muskarci/odeca/majice'>Majice </Link><span className="rightSpanLi">&#62;</span></li>
                    <li><Link className="clothesLink" to='/muskarci/odeca/sakoi'>Sakoi</Link> <span className="rightSpanLi">&#62;</span></li>
                    <li><Link className="clothesLink" to='/muskarci/odeca/dzemperi'>Dzemperi</Link> <span className="rightSpanLi">&#62;</span></li>
                    <li><Link className="clothesLink" to='/muskarci/odeca/ves'>Ves</Link> <span className="rightSpanLi">&#62;</span></li>
                </ul>
                <div className="rightContImg">
                    <Link to='/muskarci/odeca/brend'><img src={slika} alt='' /></Link>
                </div>
            </div>
    )
}

export default ClothesComponent;