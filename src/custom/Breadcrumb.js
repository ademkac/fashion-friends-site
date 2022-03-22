import React from "react";
import {Link} from 'react-router-dom';
import './Breadcrumb.css';

const Breadcrumb = (props) => {



    return(
        <div className='breadcrumbContainer'>
            <div className='insideBreadcrumbb'>
                <ul className='breadcrumblist'>
                    {
                        props.list.map((item, idx)=>{
                            return(
                                <li key={idx}><Link to={item.to} className={idx === (props.list.length-1) ? 'activeBreadcrumb': 'breadcrumbLink'}>{item.name}</Link></li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Breadcrumb;