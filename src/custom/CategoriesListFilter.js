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


const CategoriesListFilter = () =>{
    return (
        <div className='containerCategories'>
            <ul className='listContainerCategories'>
                {
                    listOfItems.map((obj, idx) => {
                        return(
                            <li key={idx} className='itemContainerCategories'>
                               <Link className='itemLinkCat' to='/'>{obj.name}</Link> 
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default CategoriesListFilter