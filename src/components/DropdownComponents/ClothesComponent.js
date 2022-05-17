import React, { useState } from "react";
import './ClothesComponent.css';
import slika from '../../assets/odecaDrop.png';
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

const kupaci = [
    {name: 'Sorts'},
    {name: 'Slip'},
]

const dzemperi = [
    {name: 'Dzemper'},
    {name: 'Rolka'},
]

const pantalone = [
    {name: 'Chino'},
    {name: 'Trenerke'},
    {name: 'Kargo'}
]

const ves = [
    {name: 'Bokserice'},
    {name: 'Slip'},
    {name: 'Pidzame'}
]

const farmerke = [
    {name: 'Tamni dzins'},
    {name: 'Svetli dzins'}
]


const sortsevi = [
    {name: 'Sorts'},
    {name: 'Teksas'},
    {name: 'Kargo'}
]

const dukserice = [
    {name: 'Duks'},
    {name: 'Sa zipom'},
    {name: 'Sa kapuljacom'}
]

const majice = [
    {name: 'Logo'},
    {name: 'Polo'},
    {name: 'Dugi rukavi'}
]

const kosulje = [
    {name: 'Jednobojne'},
    {name: 'Kratki rukavi'},
    {name: 'Karirane'},
    {name: 'Print'}
]

const ClothesComponent = (props) => {

    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    const [show5, setShow5] = useState(false)
    const [show6, setShow6] = useState(false)
    const [show7, setShow7] = useState(false)
    const [show8, setShow8] = useState(false)
    const [show9, setShow9] = useState(false)
    const [show10, setShow10] = useState(false)


    return(
        
            <div className="insideClothesContainer">
                <ul id="clothesList">
                    <li><Link className="clothesLink" to='/muskarci/odeca/bermude'>Bermude </Link></li>  
                    <li><Link className="clothesLink" to='/muskarci/odeca/jakne-kaputi'>Jakne i kaputi </Link> 
                    {show1 ?<span onClick={()=>setShow1(!show1)} className="rightSpanLi">&or;</span> 
                           :<span onClick={()=>setShow1(!show1)} className="rightSpanLi">&#62;</span>
                           }
                    </li>
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
                    <li><Link className="clothesLink" to='/muskarci/odeca/kupacikostimi'>Kupaci kostimi </Link> 
                    {show2 ?<span onClick={()=>setShow2(!show2)} className="rightSpanLi">&or;</span> 
                           :<span onClick={()=>setShow2(!show2)} className="rightSpanLi">&#62;</span>
                           }
                    </li>
                    {show2 && (
                        <div className="listContain">
                            {
                                kupaci.map((obj, idx) => {
                                    return(
                                        <p className="itemJacket" key={idx}><Link to={`/muskarci/odeca/Kupacikostimi/${obj.name}`}>{obj.name}</Link></p>
                                    )
                                })
                            }
                        </div>
                    )}
                    <li><Link className="clothesLink" to='/muskarci/odeca/pantalone'>Pantalone</Link> 
                    {show3 ?<span onClick={()=>setShow3(!show3)} className="rightSpanLi">&or;</span> 
                           :<span onClick={()=>setShow3(!show3)} className="rightSpanLi">&#62;</span>
                           }
                    </li>
                    {show3 && (
                        <div className="listContain">
                            {
                                pantalone.map((obj, idx) => {
                                    return(
                                        <p className="itemJacket" key={idx}><Link to={`/muskarci/odeca/pantalone/${obj.name}`}>{obj.name}</Link></p>
                                    )
                                })
                            }
                        </div>
                    )}
                    <li><Link className="clothesLink" to='/muskarci/odeca/farmerke'>Farmerke</Link> 
                    {show4 ?<span onClick={()=>setShow4(!show4)} className="rightSpanLi">&or;</span> 
                           :<span onClick={()=>setShow4(!show4)} className="rightSpanLi">&#62;</span>
                           }
                    </li>
                    {show4 && (
                        <div className="listContain">
                            {
                                farmerke.map((obj, idx) => {
                                    return(
                                        <p className="itemJacket" key={idx}><Link to={`/muskarci/odeca/farmerke/${obj.name}`}>{obj.name}</Link></p>
                                    )
                                })
                            }
                        </div>
                    )}
                    <li><Link className="clothesLink" to='/muskarci/odeca/sortsevi'>Sortsevi</Link> 
                    {show5 ?<span onClick={()=>setShow5(!show5)} className="rightSpanLi">&or;</span> 
                           :<span onClick={()=>setShow5(!show5)} className="rightSpanLi">&#62;</span>
                           }
                    </li>
                    {show5 && (
                        <div className="listContain">
                            {
                                sortsevi.map((obj, idx) => {
                                    return(
                                        <p className="itemJacket" key={idx}><Link to={`/muskarci/odeca/sortsevi/${obj.name}`}>{obj.name}</Link></p>
                                    )
                                })
                            }
                        </div>
                    )}
                </ul>
                <ul id="clothesList1">
                <li><Link className="clothesLink" to='/muskarci/odeca/dukserice'>Dukserice</Link> 
                    {show6 ?<span onClick={()=>setShow6(!show6)} className="rightSpanLi">&or;</span> 
                           :<span onClick={()=>setShow6(!show6)} className="rightSpanLi">&#62;</span>
                           }
                    </li>
                    {show6 && (
                        <div className="listContain">
                            {
                                dukserice.map((obj, idx) => {
                                    return(
                                        <p className="itemJacket" key={idx}><Link to={`/muskarci/odeca/dukserice/${obj.name}`}>{obj.name}</Link></p>
                                    )
                                })
                            }
                        </div>
                    )}
                    <li><Link className="clothesLink" to='/muskarci/odeca/kosulje'>Kosulje</Link> 
                    {show7 ?<span onClick={()=>setShow7(!show7)} className="rightSpanLi">&or;</span> 
                           :<span onClick={()=>setShow7(!show7)} className="rightSpanLi">&#62;</span>
                           }
                    </li>
                    {show7 && (
                        <div className="listContain">
                            {
                                kosulje.map((obj, idx) => {
                                    return(
                                        <p className="itemJacket" key={idx}><Link to={`/muskarci/odeca/kosulje/${obj.name}`}>{obj.name}</Link></p>
                                    )
                                })
                            }
                        </div>
                    )}
                    <li><Link className="clothesLink" to='/muskarci/odeca/majice'>Majice</Link> 
                    {show8 ?<span onClick={()=>setShow8(!show8)} className="rightSpanLi">&or;</span> 
                           :<span onClick={()=>setShow8(!show8)} className="rightSpanLi">&#62;</span>
                           }
                    </li>
                    {show8 && (
                        <div className="listContain">
                            {
                                majice.map((obj, idx) => {
                                    return(
                                        <p className="itemJacket" key={idx}><Link to={`/muskarci/odeca/majice/${obj.name}`}>{obj.name}</Link></p>
                                    )
                                })
                            }
                        </div>
                    )}
                    <li><Link className="clothesLink" to='/muskarci/odeca/sakoi'>Sakoi</Link></li>
                    <li><Link className="clothesLink" to='/muskarci/odeca/dzemperi'>Dzemperi</Link> 
                    {show9 ?<span onClick={()=>setShow9(!show9)} className="rightSpanLi">&or;</span> 
                           :<span onClick={()=>setShow9(!show9)} className="rightSpanLi">&#62;</span>
                           }
                    </li>
                    {show9 && (
                        <div className="listContain">
                            {
                                dzemperi.map((obj, idx) => {
                                    return(
                                        <p className="itemJacket" key={idx}><Link to={`/muskarci/odeca/dzemperi/${obj.name}`}>{obj.name}</Link></p>
                                    )
                                })
                            }
                        </div>
                    )}
                    <li><Link className="clothesLink" to='/muskarci/odeca/ves'>Ves</Link> 
                    {show10 ?<span onClick={()=>setShow10(!show10)} className="rightSpanLi">&or;</span> 
                           :<span onClick={()=>setShow10(!show10)} className="rightSpanLi">&#62;</span>
                           }
                    </li>
                    {show10 && (
                        <div className="listContain">
                            {
                                ves.map((obj, idx) => {
                                    return(
                                        <p className="itemJacket" key={idx}><Link to={`/muskarci/odeca/ves/${obj.name}`}>{obj.name}</Link></p>
                                    )
                                })
                            }
                        </div>
                    )}
                </ul>
                <div className="rightContImg">
                    <Link to='/muskarci/odeca/brend'><img src={slika} alt='' /></Link>
                </div>
            </div>
    )
}

export default ClothesComponent;