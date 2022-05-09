import React from 'react'
import '../ProductsNav.css'
import {Link} from 'react-router-dom'

const SeasonFIlter = (props) => {
    if(props.type === "size"){
        return(
            <div className='seasonFilter'>
                <Link to={`/brendovi/${props.title}/filter/size:${props.size}/season:Jesen-Zima`} className='seasonLink'>Jesen-Zima</Link>
                <Link to={`/brendovi/${props.title}/filter/size:${props.size}/season:Prolece-Leto`} className='seasonLink'>Prolece-Leto</Link>
            </div>
        )
    } else if(props.type === "color"){
        return(
            <div className='seasonFilter'>
                <Link to={`/brendovi/${props.title}/filter/season:Jesen-Zima/color:${props.color}`} className='seasonLink'>Jesen-Zima</Link>
                <Link to={`/brendovi/${props.title}/filter/season:Prolece-Leto/color:${props.color}`} className='seasonLink'>Prolece-Leto</Link>
            </div>
        )
    } else if(props.type === "sex"){
        return(
            <div className='seasonFilter'>
                <Link to={`/brendovi/${props.title}/filter/season:Jesen-Zima/sex:${props.sex}`} className='seasonLink'>Jesen-Zima</Link>
                <Link to={`/brendovi/${props.title}/filter/season:Prolece-Leto/sex:${props.sex}`} className='seasonLink'>Prolece-Leto</Link>
            </div>
        )
    } else if(props.type === "category"){
        return(
            <div className='seasonFilter'>
                <Link to={`/brendovi/${props.title}/filter/season:Jesen-Zima/category:${props.kat}`} className='seasonLink'>Jesen-Zima</Link>
                <Link to={`/brendovi/${props.title}/filter/season:Prolece-Leto/category:${props.kat}`} className='seasonLink'>Prolece-Leto</Link>
            </div>
        )
    }
  return (
    <div className='seasonFilter'>
        <Link to={`/brendovi/${props.title}/filter/seasonJesen-Zima`} className='seasonLink'>Jesen-Zima</Link>
        <Link to={`/brendovi/${props.title}/filter/seasonProlece-Leto`} className='seasonLink'>Prolece-Leto</Link>
    </div>
  )
}

export default SeasonFIlter
