import './ProductsGrid.css';
import slika from '../../assets/versaceDuks.png';
import slika1 from '../../assets/versaceJakna.png';
import VersaceList from './VersaceList/VersaceList';
import { useState } from 'react';

const tabTitle = [
    {
        title: "Versace Jeans Couture",
    },
    {
        title: "Najprodavanije",
    },
    {
        title: "Novo",
    },
    {
        title: "Nas izbor",
    }
]

const ProductsGrid = () => {

    const [activeTab, setActiveTab] = useState(0);
    const [tabsData, setTabsData] = useState([
        {
            id: 0,
            slika: slika,
            opis: "Versace proizvod",
            cena: 25000,
            procenat: 30,
            popust: false
        },
        {
            id: 1,
            slika: slika1,
            opis: "Versace proizvod",
            cena: 25000,
            procenat: 30,
            popust: true
        },
        {
            id: 2,
            slika: slika,
            opis: "Versace proizvod",
            cena: 25000,
            procenat: 30,
            popust: false
        },
        {
            id: 3,
            slika: slika1,
            opis: "Versace gace",
            cena: 25000,
            procenat: 30,
            popust: true
        },
        {
            id: 4,
            slika: slika,
            opis: "Versace proizvod",
            cena: 25000,
            procenat: 30,
            popust: false
        },
        {
            id: 5,
            slika: slika,
            opis: "Versace gace",
            cena: 25000,
            procenat: 30,
            popust: false
        },

    ])


    return(
        <div className="cont">
            <div className="podCont">
                <h2>Proizvodi</h2>
                <p>Nove kolekcije</p>
                <div className='tab'>
                    <ul className='productList'>
                        {tabTitle.map((obj, idx) => {
                            return <li className='liItem' key={idx}><button key={idx} onClick={()=> setActiveTab(idx)} className={`tablink ${idx === activeTab ? " active": ""}`}>{obj.title}</button></li>
                        })}
                    </ul>
                    
                </div>
                <div className='tabContent'>
                {activeTab === 0 ? 
                     
                     tabsData && (<VersaceList items={tabsData} />)
                  : null}
            </div> 
            </div>
            
        </div>
    )
}

export default ProductsGrid;