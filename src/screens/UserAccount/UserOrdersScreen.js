import React, {useState} from 'react'
import DropdownMeni from '../../components/HomeScreen/DropdownMeni'
import Footer from '../../components/HomeScreen/Footer'
import FooterInfo from '../../components/HomeScreen/FooterInfo'
import Header from '../../components/HomeScreen/Header'
import SocialInfo from '../../components/HomeScreen/SocialInfo'
import Newsletter from '../../components/Newsletter'
import NavigationUserAccount from './NavigationUserAccount'
import './UserAccountScreen.css'

const UserOrdersScreen = () => {

  const [show, setShow] = useState(false)

  const openSidebar = () => {
    setShow(!show)
  }
  return (
    <div>
      <SocialInfo />
      <Header />
      <DropdownMeni />
      <div className='mainUserAccount'>
        <div className='insideUserAccount'>
            <NavigationUserAccount 
            type="Moje porudzbine"
            onSpanMenuClick={openSidebar}
            closeSidebar={()=>setShow(false)}
            show={show}/>
            <div className='mainContentAcc'>
                <h2>Moje porudzbine</h2>
                <div className='infoModal'>
                    <i className='fa fa-flag'></i>
                    <span>Niste kreirali nijednu porudžbinu.</span>
                </div>
                <button className='backBtn'>Nazad</button>
            </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
      <FooterInfo />
    </div>
  )
}

export default UserOrdersScreen
