import React from 'react'
import '../ProductsNav.css'
import {Link} from 'react-router-dom'

const SizeFilter = (props) => {

    let sizeArr = []
    let val;

    if(props.type === "color"){
        return(
            <div className='sizeFilter'>
                <Link className='sizeItLink' to={`/brendovi/${props.title}/filter/size:S/color:${props.color}`}><p>S</p></Link>
                <Link className='sizeItLink' to={`/brendovi/${props.title}/filter/size:M/color:${props.color}`}><p>M</p></Link>
                <Link className='sizeItLink' to={`/brendovi/${props.title}/filter/size:L/color:${props.color}`}><p>L</p></Link>
                <Link className='sizeItLink' to={`/brendovi/${props.title}/filter/size:XL/color:${props.color}`}><p>XL</p></Link>
            </div>
        )
    } else if(props.type === "season"){
        return(
            <div className='sizeFilter'>
                <Link className='sizeItLink' to={`/brendovi/${props.title}/filter/size:S/season:${props.season}`}><p>S</p></Link>
                <Link className='sizeItLink' to={`/brendovi/${props.title}/filter/size:M/season:${props.season}`}><p>M</p></Link>
                <Link className='sizeItLink' to={`/brendovi/${props.title}/filter/size:L/season:${props.season}`}><p>L</p></Link>
                <Link className='sizeItLink' to={`/brendovi/${props.title}/filter/size:XL/season:${props.season}`}><p>XL</p></Link>
            </div>
        )
    } else if(props.type === "sex"){
        return(
            <div className='sizeFilter'>
                <Link className='sizeItLink' to={`/brendovi/${props.title}/filter/size:S/sex:${props.sex}`}><p>S</p></Link>
                <Link className='sizeItLink' to={`/brendovi/${props.title}/filter/size:M/sex:${props.sex}`}><p>M</p></Link>
                <Link className='sizeItLink' to={`/brendovi/${props.title}/filter/size:L/sex:${props.sex}`}><p>L</p></Link>
                <Link className='sizeItLink' to={`/brendovi/${props.title}/filter/size:XL/sex:${props.sex}`}><p>XL</p></Link>
            </div>
        )
    } else if(props.type === "category"){
        val=props.value
        return(
            <div className='sizeFilter'>
                <Link className='sizeItLink' to={`/brendovi/${props.title}/filter/size:S/category:${props.value}`}><p>S</p></Link>
                <Link className='sizeItLink' to={`/brendovi/${props.title}/filter/size:M/category:${val}`}><p>M</p></Link>
                <Link className='sizeItLink' to={`/brendovi/${props.title}/filter/size:L/category:${props.value}`}><p>L</p></Link>
                <Link className='sizeItLink' to={`/brendovi/${props.title}/filter/size:XL/category:${props.value}`}><p>XL</p></Link>
            </div>
        )
    } else if(props.type === "size"){
        sizeArr=props.array
        return(
        <div className='sizeFilter'>
            {!sizeArr.find(it=>it=== 'S') && (<Link className='sizeItLink' to={`/brendovi/${props.title}/filter/size${props.size},S`}><p>S</p></Link>)}
            {!sizeArr.find(it=>it=== 'M') && (<Link className='sizeItLink' to={`/brendovi/${props.title}/filter/size${props.size},M`}><p>M</p></Link>)}
            {!sizeArr.find(it=>it=== 'L') && (<Link className='sizeItLink' to={`/brendovi/${props.title}/filter/size${props.size},L`}><p>L</p></Link>)}
            {!sizeArr.find(it=>it=== 'XL') && (<Link className='sizeItLink' to={`/brendovi/${props.title}/filter/size${props.size},XL`}><p>XL</p></Link>)}
                                                            
        </div>)
    }

  return (
    <div className='sizeFilter'>
        <Link className='sizeItLink' to={`/brendovi/${props.title}/filter/sizeS`}><p>S</p></Link>
        <Link className='sizeItLink' to={`/brendovi/${props.title}/filter/sizeM`}><p>M</p></Link>
        <Link className='sizeItLink' to={`/brendovi/${props.title}/filter/sizeL`}><p>L</p></Link>
        <Link className='sizeItLink' to={`/brendovi/${props.title}/filter/sizeXL`}><p>XL</p></Link>
    </div>
  )
}

export default SizeFilter
