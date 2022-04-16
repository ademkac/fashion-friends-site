import React, { useEffect, useState } from "react";
import {useSwipeable} from 'react-swipeable';
import './Carousel.css'







const Carousel = (props) => {

    const [slideIndex, setSlideIndex] = useState(1);
    const [paused, setPaused] = useState(false);


    const nextSlide = () => {
        if(slideIndex !== props.dataSlider.length){
            setSlideIndex(slideIndex +1)
        }
        else if(slideIndex === props.dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex -1)
        }
        else if(slideIndex === 1){
            setSlideIndex(props.dataSlider.length)
        }
    }

    const handlers = useSwipeable({
        onSwipedLeft: () => nextSlide(),
        onSwipedRight: () => prevSlide()
    })

    useEffect(()=>{
        const interval = setInterval(()=> {
            if(!paused) {
                nextSlide()
            }
        }, 3000);
        return () => {
            if(interval){
                clearInterval(interval)
            }
        }
    });

    const moveDot = index => {
        setSlideIndex(index)
    }

    return(
        <div
        {...handlers}
        onMouseEnter={()=> setPaused(true)}
        onMouseLeave={()=> setPaused(false)}
         className="container-slider">
            {props.dataSlider.map((obj, index)=>{
                return(
                    <div id={index} key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                            <img key={index} className="responsiveImg" src={obj.pic} alt=''/>
                    </div>
                )
            })}
            {/* Back and forward buttons */} 
            <a  className="Back" onClick={prevSlide}>&#10094;</a>
            <a  className="forward" onClick={nextSlide}>&#10095;</a>
            
            <div className="container-dots">
                {Array.from({length: props.dataSlider.length}).map((item, index)=>(
                    <div onClick={()=>moveDot(index + 1)} className={slideIndex === index +1 ? "dot active": "dot"}>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Carousel