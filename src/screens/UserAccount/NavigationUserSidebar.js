import React from 'react'
import './NavigationUserSidebar.css'
import { Link } from 'react-router-dom'


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

const NavigationUserSidebar = (props) => {
  return (
    <div className='navUserSidebarActive'>
      <div className='navSidebarContent'>
      
          {navigationArray.map((obj, idx)=>{
              return(
                  <Link className={obj.name === props.type ? 'navigationItemAcc activeNavItemAcc' : 'navigationItemAcc'} to={`${obj.to}`} key={idx}>{obj.name}</Link>
              )
          })}
      </div>
      <i onClick={props.closeSidebar} className="fas fa-times"></i>
    </div>
  )
}

export default NavigationUserSidebar
