import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import DropdownMeni from '../../components/HomeScreen/DropdownMeni'
import Footer from '../../components/HomeScreen/Footer'
import FooterInfo from '../../components/HomeScreen/FooterInfo'
import Header from '../../components/HomeScreen/Header'
import SocialInfo from '../../components/HomeScreen/SocialInfo'
import Newsletter from '../../components/Newsletter'
import NavigationUserAccount from './NavigationUserAccount'
import './UserAccountScreen.css'



const UserAccountScreen = () => {

  const authData = useSelector(state=>state.auth);
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
          type="Moj korisnicki nalog"
          onSpanMenuClick={openSidebar}
          closeSidebar={()=>setShow(false)}
          show={show}/>
          <div className='mainContentAcc'>
              <h2>Moj korsnicki nalog</h2>
              <div className='leftMainContent'>
                  <div className='leftMainContentTopLeft'>
                    <h3>KONTAKT INFORMACIJE</h3>
                    <p>{authData.name}</p>
                    <p>{authData.email}</p>
                    <div className='btnnCon'>
                      <button>Promenite lozinku</button>
                      <button>Izmenite</button>
                    </div>
                  </div>

                  <div className='leftMainContentBottomLeft'>
                    <h3>ADRESAR</h3>
                    <p className='chosenAddr'>Odabrana adresa fakture</p>
                    <p>Niste naveli adresu placanja</p>
                    <div className='btnnConBott'>
                      <button>Izmenite adresu</button>
                      <button id='addressCtrl'>Upravljajte adresama</button>
                    </div>
                  </div>
              </div>

              <div className='rightMainContent'>
                  <div className='rightMainContentTopRight'>
                    <h3>NEWSLETTERS</h3>
                    <p>Niste se prijavili na nas newsletter</p>
                    <div className='btnnCon'>
                      <button>Izmenite</button>
                    </div>
                  </div>

                  <div className='rightMainContentBottomRight'>
                    <p>Zadata adresa za dostavu</p>
                    <p>Niste naveli adresu dostave</p>
                    <div className='btnnCon'>
                      <button>Izmenite adresu</button>
                    </div>
                  </div>
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

export default UserAccountScreen
