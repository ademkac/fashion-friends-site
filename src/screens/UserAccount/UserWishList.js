import React, {useState} from 'react'
import DropdownMeni from '../../components/HomeScreen/DropdownMeni'
import Footer from '../../components/HomeScreen/Footer'
import FooterInfo from '../../components/HomeScreen/FooterInfo'
import Header from '../../components/HomeScreen/Header'
import SocialInfo from '../../components/HomeScreen/SocialInfo'
import Newsletter from '../../components/Newsletter'
import NavigationUserAccount from './NavigationUserAccount'
import './UserAccountScreen.css'

const UserWishList = () => {

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
                type="Moje liste zelja"
                onSpanMenuClick={openSidebar}
                closeSidebar={()=>setShow(false)}
                show={show}/>
                <div className='mainContentAcc'>
                    <h2>Moja lista zelja</h2>
                    <div className='infoModal'>
                        <i className='fa fa-flag'></i>
                        <span>Nemate proizvode na Vašoj listi želja</span>
                    </div>
                </div>
            </div>
        </div>
        <Newsletter />
        <Footer />
        <FooterInfo />
    </div>
  )
}

export default UserWishList
