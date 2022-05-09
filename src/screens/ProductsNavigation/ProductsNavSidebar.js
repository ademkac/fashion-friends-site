import React, { useState } from 'react'
import './ProductsNav.css'
import CategoriesListFilter from '../../custom/CategoriesListFilter'
import ColorFilter from './NavListComponents/ColorFilter'
import SizeFilter from './NavListComponents/SizeFilter'
import SeasonFIlter from './NavListComponents/SeasonFIlter'
import GenderFilter from './NavListComponents/GenderFilter'



const ProductsNavSidebar = (props) => {
    let colorArr = [];
    let  sizeArr = [];
    colorArr=props.array
    sizeArr=props.array

    const navigationArray =[
        {
            name: 'Kategorija',
            element: <CategoriesListFilter brend={props.title} filter="category" type="sidebarCategories" />
        },
        {
            name: 'Boja',
            element: <ColorFilter type={props.type} title={props.title} array={colorArr} color={props.value} />
        },
        {
            name: 'Velicina',
            element: <SizeFilter type={props.type} title={props.title} array={sizeArr} size={props.value} />
        },
        {
            name: 'Sezona',
            element: <SeasonFIlter type={props.type} title={props.title} season={props.value} />
        },
        {
            name: 'Pol',
            element: <GenderFilter type={props.type} title={props.title} sex={props.value} />
        }
    ]
    
  return (
    <div className='navProductsSidebarActivee'>
      <div className='navSidebarContentt'>
                <h3>Mogucnosti kupovine</h3>
          {(props.type !== 'category') && navigationArray.map((obj, idx)=>{
              return(
                  <div className='itemContainerNav' key={idx}>
                      <p><b>{obj.name}</b></p>
                      {obj.element}
                  </div>
              )
          })}
          {(props.type === 'category') && navigationArray.filter(it=>it.name !== 'Kategorija').map((obj, idx)=>{
              return(
                <div className='itemContainerNav' key={idx}>
                    <p><b>{obj.name}</b></p>
                    {obj.element}
                </div>
              )
          })}
      </div>
      <i onClick={props.closeSidebar} className="fas fa-times"></i>
    </div>
  )
}

export default ProductsNavSidebar
