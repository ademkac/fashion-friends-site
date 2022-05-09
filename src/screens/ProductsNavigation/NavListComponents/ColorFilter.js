import React from 'react'
import '../ProductsNav.css'
import {Link} from 'react-router-dom'
const ColorFilter = (props) => {

    let colorArray = [];

    if(props.type === "size"){
        return(
            <div className='sizeFilter'>
                <Link className='redd' to={`/brendovi/${props.title}/filter/size:${props.size}/color:crvena`}></Link>
                <Link className='bluee' to={`/brendovi/${props.title}/filter/size:${props.size}/color:plava`}></Link>
                <Link className='greenn' to={`/brendovi/${props.title}/filter/size:${props.size}/color:zelena`}></Link>
                <Link className='blackk' to={`/brendovi/${props.title}/filter/size:${props.size}/color:crna`}></Link>
                <Link className='yelloww' to={`/brendovi/${props.title}/filter/size:${props.size}/color:zuta`}></Link>
            </div>
        )
    } else if(props.type === "season"){
        return(
            <div className='sizeFilter'>
                <Link className='redd' to={`/brendovi/${props.title}/filter/season:${props.season}/color:crvena`}></Link>
                <Link className='bluee' to={`/brendovi/${props.title}/filter/season:${props.season}/color:plava`}></Link>
                <Link className='greenn' to={`/brendovi/${props.title}/filter/season:${props.season}/color:zelena`}></Link>
                <Link className='blackk' to={`/brendovi/${props.title}/filter/season:${props.season}/color:crna`}></Link>
                <Link className='yelloww' to={`/brendovi/${props.title}/filter/season:${props.season}/color:zuta`}></Link>
            </div>
        )
    } else if(props.type === "sex"){
        return(
            <div className='sizeFilter'>
                <Link className='redd' to={`/brendovi/${props.title}/filter/sex:${props.sex}/color:crvena`}></Link>
                <Link className='bluee' to={`/brendovi/${props.title}/filter/sex:${props.sex}/color:plava`}></Link>
                <Link className='greenn' to={`/brendovi/${props.title}/filter/sex:${props.sex}/color:zelena`}></Link>
                <Link className='blackk' to={`/brendovi/${props.title}/filter/sex:${props.sex}/color:crna`}></Link>
                <Link className='yelloww' to={`/brendovi/${props.title}/filter/sex:${props.sex}/color:zuta`}></Link>
            </div>
        )
    } else if(props.type === "category"){
        return(
            <div className='sizeFilter'>
                <Link className='redd' to={`/brendovi/${props.title}/filter/category:${props.kat}/color:crvena`}></Link>
                <Link className='bluee' to={`/brendovi/${props.title}/filter/category:${props.kat}/color:plava`}></Link>
                <Link className='greenn' to={`/brendovi/${props.title}/filter/category:${props.kat}/color:zelena`}></Link>
                <Link className='blackk' to={`/brendovi/${props.title}/filter/category:${props.kat}/color:crna`}></Link>
                <Link className='yelloww' to={`/brendovi/${props.title}/filter/category:${props.kat}/color:zuta`}></Link>
            </div>
        )
    } else if(props.type === "color"){
        colorArray=props.array
        return(
            <div className='sizeFilter'>
                {!colorArray.find(it=>it === 'crvena') &&(<Link className='redd' to={`/brendovi/${props.title}/filter/color${props.color},crvena`}></Link>)}
                {!colorArray.find(it=>it === 'plava') &&(<Link className='bluee' to={`/brendovi/${props.title}/filter/color${props.color},plava`}></Link>)}
                {!colorArray.find(it=>it === 'zelena') &&(<Link className='greenn' to={`/brendovi/${props.title}/filter/color${props.color},zelena`}></Link>)}
                {!colorArray.find(it=>it === 'crna') &&(<Link className='blackk' to={`/brendovi/${props.title}/filter/color${props.color},crna`}></Link>)}
                {!colorArray.find(it=>it === 'zuta') &&(<Link className='yelloww' to={`/brendovi/${props.title}/filter/color${props.color},zuta`}></Link>)}
            </div>
        )
    }
  return (
    <div className='sizeFilter'>
        <Link className='bluee' to={`/brendovi/${props.title}/filter/colorplava`}></Link>
        <Link className='greenn' to={`/brendovi/${props.title}/filter/colorzelena`}></Link>
        <Link className='blackk' to={`/brendovi/${props.title}/filter/colorcrna`}></Link>
        <Link className='redd' to={`/brendovi/${props.title}/filter/colorcrvena`}></Link>
        <Link className='yelloww' to={`/brendovi/${props.title}/filter/colorzuta`}></Link>
    </div>
  )
}

export default ColorFilter
