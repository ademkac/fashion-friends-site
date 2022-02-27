import React, {useState} from "react";
import VersaceListItem from "./VersaceListItem";
import './VersaceList.css'


const VersaceList = (props) => {

    const [slideIndex, setSlideIndex] = useState(0);

    if(props.items.length === 0){
        return(
            <div className="undefined">
                <h1>Unfortunetly we can't find items!!</h1>
            </div>
        )
    }

    const scrollX = (direction) => {
        let far = document.getElementsByClassName('listItems')
    }   

    const nextSlide = () => {
        if(slideIndex !== props.items.length){
            setSlideIndex(slideIndex +1)
        }
        else if(slideIndex === props.items.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 0){
            setSlideIndex(slideIndex -1)
        }
        else if(slideIndex === 0){
            setSlideIndex(props.items.length)
        }
    }

    return (
        <div className="listItems">
{/*             <a  className="prevv" onClick={prevSlide}>&#10094;</a>
 */}            {props.items.map((item, id) => 
                <VersaceListItem
                id={item.id}
                key={id}
                slika={item.slika}
                opis={item.opis}
                cena={item.cena}
                procenat={item.procenat}
                popust={item.popust} />  
            )}
           {/*  <a  className="Back" onClick={prevSlide}>&#10094;</a>
            <a  className="forward" onClick={nextSlide}>&#10095;</a> */}
{/*             <a  className="nextt" onClick={nextSlide}>&#10095;</a>
 */}        </div>
    )
}

export default VersaceList;