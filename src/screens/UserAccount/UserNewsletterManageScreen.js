import React, {useState} from 'react'
import DropdownMeni from '../../components/HomeScreen/DropdownMeni'
import Footer from '../../components/HomeScreen/Footer'
import FooterInfo from '../../components/HomeScreen/FooterInfo'
import Header from '../../components/HomeScreen/Header'
import SocialInfo from '../../components/HomeScreen/SocialInfo'
import Newsletter from '../../components/Newsletter'
import NavigationUserAccount from './NavigationUserAccount'
import './UserAccountScreen.css'

const UserNewsletterManageScreen = () => {

  const [show, setShow] = useState(false)
  const [showBtn, setShowBtn] = useState(false)

  const openSidebar = () => {
    setShow(!show)
  }

  const showChatButtonHandler = (el) =>{
    setShowBtn(el)
  }

  return (
    <div>
      <SocialInfo />
        <Header showChatButton={showChatButtonHandler}/>
        <DropdownMeni showSearchBtn={showBtn}/>
        <div className='mainUserAccount'>
            <div className='insideUserAccount'>
                <NavigationUserAccount 
                type="Prijava na Newsletter"
                onSpanMenuClick={openSidebar}
                closeSidebar={()=>setShow(false)}
                show={show}/>
                <div className='mainContentAcc'>
                    <h2>Prijava na Newsletter</h2>
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

export default UserNewsletterManageScreen
