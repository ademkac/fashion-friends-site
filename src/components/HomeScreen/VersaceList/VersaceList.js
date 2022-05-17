import React, { useState } from "react";
import {useSwipeable} from 'react-swipeable'
import VersaceListItem from "./VersaceListItem";
import './VersaceList.css'
import slika from '../../../assets/angle-left-solid.svg'
import slika1 from '../../../assets/angle-right-solid.svg'



const VersaceList = (props) => {

    const [activePic, setActivePic] = useState(0)
    const [activePic2, setActivePic2] = useState(1)
    const [activePic3, setActivePic3] = useState(2)

    if(props.items.length === 0){
        return(
            <div className="undefined">
                <h1>Unfortunetly we can't find items!!</h1>
            </div>
        )
    }

    const onBackHandler = () => {
        if(activePic !== 0){
            setActivePic(activePic-1)
            setActivePic2(activePic2-1)
            setActivePic3(activePic3-1)
        }else{
            return
        }
    }

    const onForwardHandler = () => {
        if(activePic2 !== props.items.length-1){
            setActivePic(activePic+1)
            setActivePic2(activePic2+1)
            setActivePic3(activePic3+1)
        }else{
            return
        }
    }

    const handlers = useSwipeable({
        onSwipedLeft: () => onForwardHandler(),
        onSwipedRight: () => onBackHandler()
    })
 
    return (
        <div className="listItems" {...handlers}>
            {props.items.map((item, id) => 
                <VersaceListItem
                id={item.id}
                key={id}
                slika={item.slika}
                opis={item.opis}
                cena={item.cena}
                procenat={item.procenat}
                popust={item.popust}
                firstActive={activePic}
                secondActive={activePic2}
                thirdActive={window.innerWidth > 750 ? activePic3 : activePic2} />  
            )}
            {activePic !== 0 && (
                <img onClick={onBackHandler} src={slika} alt='' className="backItem" />
            )}
            {window.innerWidth <= 750 && activePic2 !== props.items.length-1 && (
                <img onClick={onForwardHandler} src={slika1} alt='' className="forwardItem" />
            )}
            {window.innerWidth > 750 && activePic3 !== props.items.length-1 && (
                <img onClick={onForwardHandler} src={slika1} alt='' className="forwardItem" />
            )}
        </div>
    )
}

export default VersaceList;