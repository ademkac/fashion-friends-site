import React, {useState} from 'react'
import DropdownMeni from '../components/HomeScreen/DropdownMeni'
import Footer from '../components/HomeScreen/Footer'
import FooterInfo from '../components/HomeScreen/FooterInfo'
import Header from '../components/KidsScreen/Header'
import SocialInfo from '../components/HomeScreen/SocialInfo'
import Newsletter from '../components/Newsletter'

const KidsScreen = () => {

    const [showBtn, setShowBtn] = useState(false)

    const showChatButtonHandler = (el) =>{
        setShowBtn(el)
      }
  return (
    <div>
        <SocialInfo />
        <Header showChatButton={showChatButtonHandler} />
        <DropdownMeni showSearchBtn={showBtn} />
      <h1>it will be done soon</h1>
        <Newsletter />
        <Footer />
        <FooterInfo />
    </div>
  )
}

export default KidsScreen
