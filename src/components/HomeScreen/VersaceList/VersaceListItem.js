import React from 'react';
import './VersaceListItem.css'

const VersaceListItem = (props) => {

    return (
        <div className={((props.id === props.firstActive) || (props.id === props.secondActive) || (props.id === props.thirdActive) || window.innerWidth >= 1200) ? 'versaceItem' : 'noneItem'} id={props.id} >
            <img src={props.slika} alt=""/> 
            <p>{props.opis}</p>
             <div className='bottomPiece'>
                
                <div className='rightPiece2'>
                    {props.popust ? <p className='oldPrice'>{props.cena} RSD</p> : <p className='price'>{props.cena} RSD</p>}
                    {props.popust ? <p className='newPrice'>{props.cena - props.cena * props.procenat/100} RSD</p> : null}
                </div>
                
                <div className='rightPiece'>
                    {props.popust ? <div className="discount">-{props.procenat}%</div> : null} 
                </div>
             </div>
        </div> 
    )
}

export default VersaceListItem;