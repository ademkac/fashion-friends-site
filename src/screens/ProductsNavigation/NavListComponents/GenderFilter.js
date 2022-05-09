import React from 'react'
import '../ProductsNav.css'
import {Link} from 'react-router-dom'

const GenderFilter = (props) => {
    if(props.type === "size"){
        return(
            <div className='seasonFilter'>
                <Link to={`/brendovi/${props.title}/filter/size:${props.size}/sex:Muski`} className='seasonLink'>Muskarci</Link>
                <Link to={`/brendovi/${props.title}/filter/size:${props.size}/sex:Zenski`} className='seasonLink'>Zene</Link>
            </div>
        )
    } else if(props.type === "season"){
        return(
            <div className='seasonFilter'>
                <Link to={`/brendovi/${props.title}/filter/sex:Muski/season:${props.season}`} className='seasonLink'>Muskarci</Link>
                <Link to={`/brendovi/${props.title}/filter/sex:Zenski/season:${props.season}`} className='seasonLink'>Zene</Link>
            </div>
        )
    } else if(props.type === "color"){
        return(
            <div className='seasonFilter'>
                <Link to={`/brendovi/${props.title}/filter/sex:Muski/color:${props.color}`} className='seasonLink'>Muskarci</Link>
                <Link to={`/brendovi/${props.title}/filter/sex:Zenski/color:${props.color}`} className='seasonLink'>Zene</Link>
            </div>
        )
    } else if(props.type === "category"){
        return(
            <div className='seasonFilter'>
                <Link to={`/brendovi/${props.title}/filter/sex:Muski/category:${props.kat}`} className='seasonLink'>Muskarci</Link>
                <Link to={`/brendovi/${props.title}/filter/sex:Zenski/category:${props.kat}`} className='seasonLink'>Zene</Link>
            </div>
        )
    }
  return (
    <div className='seasonFilter'>
        <Link to={`/brendovi/${props.title}/filter/sexMuski`} className='seasonLink'>Muskarci</Link>
        <Link to={`/brendovi/${props.title}/filter/sexZenski`} className='seasonLink'>Zene</Link>
    </div>
  )
}

export default GenderFilter
