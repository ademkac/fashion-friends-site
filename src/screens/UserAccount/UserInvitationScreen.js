import React from 'react'
import DropdownMeni from '../../components/HomeScreen/DropdownMeni'
import Footer from '../../components/HomeScreen/Footer'
import FooterInfo from '../../components/HomeScreen/FooterInfo'
import Header from '../../components/HomeScreen/Header'
import SocialInfo from '../../components/HomeScreen/SocialInfo'
import Newsletter from '../../components/Newsletter'
import NavigationUserAccount from './NavigationUserAccount'
import './UserOrdersScreen.css'

const UserInvitationScreen = () => {
  return (
    <div>
        <SocialInfo />
        <Header />
        <DropdownMeni />
        <div className='mainUserAccount'>
            <div className='insideUserAccount'>
                <NavigationUserAccount type="Moje pozivnice"/>
                <div className='mainContentAcc'>
                    <h2>Moje pozivnice</h2>
                    
                </div>
            </div>
        </div>
        <Newsletter />
        <Footer />
        <FooterInfo />
      
    </div>
  )
}

export default UserInvitationScreen
