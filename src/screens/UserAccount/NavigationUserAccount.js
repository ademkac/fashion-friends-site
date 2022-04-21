import React, {useState, useLayoutEffect, useEffect} from 'react'
import './UserAccountScreen.css'
import { Link } from 'react-router-dom'
import slika from '../../assets/options.svg'
import NavigationUserSidebar from './NavigationUserSidebar'


const navigationArray = [
    {name: 'Moj korisnicki nalog', to: '/customer/account'},
    {name: 'Moje porudzbine', to: '/customer/orders'}, 
    {name: 'Moje liste zelja', to: '/customer/wishlist'},
    {name: 'Adresar', to: '/customer/directory'},
    {name: 'Podaci o nalogu', to: '/customer/accountInfo'},
    {name: 'Privatnost', to: '/customer/privacy'},
    {name: 'Store Credit', to: '/customer/storecredit'},
    {name: 'Prijava na Newsletter', to: '/customer/newslettermanage'},
    {name: 'Moje pozivnice', to: '/customer/invitation'},
    {name: 'Moji povrati', to: '/customer/returns'}
]

const NavigationUserAccount = (props) => {

  const [visible, setVisible] = useState(false)
  const handleResize = () =>{
    console.log(window.innerWidth)
    setVisible(!(window.innerWidth > 950))
  }

  useEffect(()=>{
    setVisible(!(window.innerWidth > 950))
  },[])

  useLayoutEffect(()=>{
    window.addEventListener('resize', handleResize)
    return(()=>{
      window.removeEventListener('resize', handleResize)
    })
  })

  if(visible){
    return (
        <div className='menuContainerVisible'>
          <span onClick={props.onSpanMenuClick} className='spanOptionsCon'>
            <img className='optionsIconImg' src={slika} alt='' />
          </span>
          {props.show && (
            <NavigationUserSidebar type={props.type} closeSidebar={props.closeSidebar} />
          )}
          </div>
    )
  }
    
  return (
    <div className='navigationUserAccount'>
      <p>Navigacija naloga</p>
          {navigationArray.map((obj, idx)=>{
              return(
                  <Link className={obj.name === props.type ? 'navigationItemAcc activeNavItemAcc' : 'navigationItemAcc'} to={`${obj.to}`} key={idx}>{obj.name}</Link>
              )
          })}
    </div>
  );
}

export default NavigationUserAccount
