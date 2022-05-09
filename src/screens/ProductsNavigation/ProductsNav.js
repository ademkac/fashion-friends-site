import React, {useState, useLayoutEffect, useEffect} from 'react'
import './ProductsNav.css'
import slika from '../../assets/options.svg'
import ProductsNavSidebar from './ProductsNavSidebar'
import NavList from './NavList'


const filterItems = [
  {
      name: 'Kategorija'
  },
  {
      name: 'Boja'
  },
  {
      name: 'Velicina'
  },
  {
      name: 'Sezona'
  },
  {
      name: 'Pol'
  },
  {
      name: 'Cena'
  },]

const ProductsNav = (props) => {
    const [visible, setVisible] = useState(false)

    

  const handleResize = () =>{
    console.log(window.innerWidth)
    console.log(props.array);
    setVisible(!(window.innerWidth > 800))
  }

  useEffect(()=>{
    setVisible(!(window.innerWidth > 800))
    console.log("value: "+props.value);
  },[])

  useLayoutEffect(()=>{
    window.addEventListener('resize', handleResize)
    return(()=>{
      window.removeEventListener('resize', handleResize)
    })
  })

  if(visible){
    return (
        <div className='menuContainerVisiblee'>
          <span onClick={props.onSpanMenuClick}  className='spanOptionsConn'>
            <img className='optionsIconImgg' src={slika} alt='' />
          </span>
           {props.show && (
            <ProductsNavSidebar 
            title={props.title}
            closeSidebar={props.closeSidebar} 
            value={props.value}
            type={props.type}
            array={props.array}/>
          )} 
          </div> 
    )
  }

  return (
    <div className='filterCon'>
        <NavList 
        type={props.type} 
        title={props.title} 
        filterItems={props.type ==='category' ? filterItems.filter(it=>it.name !== 'Kategorija') : filterItems}
        value={props.value}
        array={props.array}/>
    </div>
  )
}

export default ProductsNav
