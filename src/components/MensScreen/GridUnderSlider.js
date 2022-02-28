import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import slika from '../../assets/gridUnder.png'
import slika1 from '../../assets/trussPic.png'
import slika2 from '../../assets/trussPic2.png'
import MultipleItemsSlider from "../../custom/MultipleItemsSlider";
import './GridUnderSlider.css'

const listOfItems = [
    {
        slika: slika,
        opis: 'Trussardi-Muska polo majica',
        cena: 6690
    },
    {
        slika: slika1,
        opis: 'Trussardi-Zuta muska majica',
        cena: 6690
    },
    {
        slika: slika2,
        opis: 'Trussardi-Donji deo muske trenerke',
        cena: 6690
    },
    {
        slika: slika1,
        opis: 'Trussardi-Muski duks sa zipom',
        cena: 6690
    },
    {
        slika: slika,
        opis: 'Trussardi-Sivi muski duks',
        cena: 6690
    },
    {
        slika: slika2,
        opis: 'Trussardi-Muska logo majica',
        cena: 6690
    },
]

const GridUnderSlider = (props) => {

    const [itemIndex, setItemIndex] = useState(1)
    const [itemIn, setItemIn] = useState(2)

    useEffect(()=>{
        if(itemIn == listOfItems.length){
            document.getElementById('bttFor').style.display = 'none'
        }else if(itemIn != listOfItems.length){
            document.getElementById('bttFor').style.display = 'inline'
        }
        if(itemIndex == 1){
            document.getElementById('bttBack').style.display = 'none'
        }else if(itemIndex != 1){
            document.getElementById('bttBack').style.display = 'inline'
        }
    },[itemIn, itemIndex])

    const backItemHandler = () => {
            setItemIndex(itemIndex-1)
            setItemIn(itemIn-1)
    }

    const forwardItemHandler = () => {
            setItemIndex(itemIndex+1)
            setItemIn(itemIn+1)
    }

    return (
        <div className="containerGridUnder">
            <div className="insideGridUnder">
                <div className="titleGridUnder">
                    <h3>SHOP THE LOOK</h3>  
                    <p>Inspirisite se i porucite kombinaciju sa slike</p>
                </div>
                <div className="imageGridUnder">
                    <div className="leftGridUnder">
                        <img src={slika} alt=''/>
                    </div>
                    <div className="rightGridUnder">
                        <img src={slika} alt=''/>
                    </div>
                    <div className="rightGridUnder">
                        <img src={slika} alt=''/>
                    </div>
                    <div className="trussardiGrid">
                        <h3>TRUSSARDI</h3>
                        <p>
                        Vodeći italijanski lifestyle brend Trussardi
                        predstavlja novu mušku kolekciju. Zahvaljujući
                        kontinuiranim inovacijama koje predstavljaju srž
                        poslovanja ove kompanije, Trussardi danas
                        predstavlja sinonim za neprikosnoveni kvalitet,
                        besprekorne veštine i savremenu eleganciju.
                        Istraži najnovije krojeve i poručite modele visokih
                        performansi i vanvremenskog stila.
                        </p>
                        <Link className="underSliderLink" to='/muskarci'>
                            Detaljnije
                        </Link>
                        <div className="underGridSlider">
                            <button id='bttBack' onClick={backItemHandler} className="leftButtonLink">&#10094;</button> 
                            {listOfItems.map((obj, idx) => {
                                return(
                                   <MultipleItemsSlider
                                   idx={idx} 
                                   itemIndex={itemIndex}
                                   itemIn={itemIn}
                                   to={`/${obj.opis}`}
                                   slika={obj.slika}
                                   opis={obj.opis}
                                   cena = {obj.cena}
                                   />
                                )
                            })}
                             <button id='bttFor' onClick={forwardItemHandler} className="rightButtonLink">&#10095;</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default GridUnderSlider;