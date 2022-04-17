import React from 'react'
import DropdownMeni from '../../components/HomeScreen/DropdownMeni'
import Footer from '../../components/HomeScreen/Footer'
import FooterInfo from '../../components/HomeScreen/FooterInfo'
import Header from '../../components/HomeScreen/Header'
import SocialInfo from '../../components/HomeScreen/SocialInfo'
import Newsletter from '../../components/Newsletter'
import NavigationUserAccount from './NavigationUserAccount'
import './UserOrdersScreen.css'

const UserReturnsScreen = () => {
  return (
    <div>
      <SocialInfo />
        <Header />
        <DropdownMeni />
        <div className='mainUserAccount'>
            <div className='insideUserAccount'>
                <NavigationUserAccount type="Moji povrati"/>
                <div className='mainContentAcc'>
                    <h2>Moji povrati</h2>
                    <div className='infoModal'>
                        <i className='fa fa-flag'></i>
                        <span>Nema proizvoda za povrat</span>
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

export default UserReturnsScreen
