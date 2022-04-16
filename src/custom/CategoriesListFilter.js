import React from 'react'
import {Link} from 'react-router-dom'
import './CategoriesListFilter.css'

const listOfItems = [
    {
        name: 'Bermude'
    },
    {
        name: 'Dukserice'
    },
    {
        name: 'Dzemperi'
    },
    {
        name: 'Espadrile'
    },
    {
        name: 'Farmerke'
    },
    {
        name: 'Haljine'
    },
    {
        name: 'Jakne i kaputi'
    },
    {
        name: 'Japanke'
    },
    {
        name: 'Kaisevi'
    },
    {
        name: 'Kape i rukavice'
    },
    {
        name: 'Kacketi'
    },
    {
        name: 'Kosulje'
    },
    {
        name: 'Kupaci kostimi'
    },
    {
        name: 'Laptop torbe'
    },
    {
        name: 'Majice'
    },
    {
        name: 'Male torbe'
    },
    {
        name: 'Novcanici'
    },
    {
        name: 'Pantalone'
    },
    {
        name: 'Papuce'
    },
    {
        name: 'Patike'
    },
    {
        name: 'Rancevi'
    },
    {
        name: 'Sakoi'
    },
    {
        name: 'Sandale'
    },
    {
        name: 'Suknje'
    },
    {
        name: 'Velike torbe'
    },
    {
        name: 'Ves'
    },
    {
        name: 'Carape'
    },
    {
        name: 'Cizme'
    },
    {
        name: 'Salovi i marame'
    },
    {
        name: 'Sortsevi'
    },
    
]


const CategoriesListFilter = (props) =>{
    return (
        <div className='containerCategories'>
            <ul className='listContainerCategories'>
                {
                    listOfItems.map((obj, idx) => {
                        return(
                            <li key={idx} className='itemContainerCategories'>
                               {props.filter === 'color' ? (<Link className='itemLinkCat' to={`/brendovi/${props.brend}/filter/category:${obj.name}/color:${props.value}`}>{obj.name}</Link> )
                                :props.filter === 'size' ? (<Link className='itemLinkCat' to={`/brendovi/${props.brend}/filter/size:${props.value}/category:${obj.name}`}>{obj.name}</Link> )  
                                :props.filter === 'sex' ? (<Link className='itemLinkCat' to={`/brendovi/${props.brend}/filter/category:${obj.name}/sex:${props.value}`}>{obj.name}</Link> ) 
                                :props.filter === 'season'? (<Link className='itemLinkCat' to={`/brendovi/${props.brend}/filter/category:${obj.name}/season:${props.value}`}>{obj.name}</Link> )
                                :props.filter === 'category'? (<Link className='itemLinkCat' to={`/brendovi/${props.brend}/filter/category${obj.name}`}>{obj.name}</Link>)
                                : (<Link className='itemLinkCat' to={`/brendovi/${props.brend}/filter/category:${obj.name}/price:${props.value}`}>{obj.name}</Link> )
                            }
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default CategoriesListFilter