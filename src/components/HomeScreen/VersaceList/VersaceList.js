import React from "react";
import VersaceListItem from "./VersaceListItem";
import './VersaceList.css'


const VersaceList = (props) => {

    if(props.items.length === 0){
        return(
            <div className="undefined">
                <h1>Unfortunetly we can't find items!!</h1>
            </div>
        )
    }
 
    return (
        <div className="listItems">
            {props.items.map((item, id) => 
                <VersaceListItem
                id={item.id}
                key={id}
                slika={item.slika}
                opis={item.opis}
                cena={item.cena}
                procenat={item.procenat}
                popust={item.popust} />  
            )}
        </div>
    )
}

export default VersaceList;