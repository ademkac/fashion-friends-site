import React, {useState} from 'react'
import DropdownMeni from '../../components/HomeScreen/DropdownMeni'
import Footer from '../../components/HomeScreen/Footer'
import FooterInfo from '../../components/HomeScreen/FooterInfo'
import Header from '../../components/HomeScreen/Header'
import SocialInfo from '../../components/HomeScreen/SocialInfo'
import Newsletter from '../../components/Newsletter'
import NavigationUserAccount from './NavigationUserAccount'
import './UserAccountScreen.css'

const UserCreditScreen = () => {
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
                type="Store Credit"
                onSpanMenuClick={openSidebar}
                closeSidebar={()=>setShow(false)}
                show={show}/>
                <div className='mainContentAcc'>
                    <h2>Store Credit</h2>
                    <p><b>Sredstva</b></p>
                    <p>Vasa sredstva su: 0,00 RSD</p>
                </div>
            </div>
        </div>
        <Newsletter />
        <Footer />
        <FooterInfo />
    </div>
  )
}

export default UserCreditScreen
