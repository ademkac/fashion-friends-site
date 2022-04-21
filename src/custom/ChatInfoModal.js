import React, { useState } from 'react'
import './ChatInfoModal.css';

import ChatInfoHeader from './ChatInfoComponents/ChatInfoHeader';
import ChatInfoBody from './ChatInfoComponents/ChatInfoBody';
import ChatInfoFooter from './ChatInfoComponents/ChatInfoFooter';

const ChatInfoModal = (props) => {
    const [switchAcc, setSwitchAcc] = useState(false)
    const [clicked, setClicked] = useState(false)

    const switchHandler = () => {
        setSwitchAcc(true)
        setClicked(true)
    }

    
  return (
    <div className='chatInfoCon'>
      <div className='insideChatInfo'>
        <ChatInfoHeader 
        clickHandler={props.clickHandler} 
        switchHandler={switchHandler} 
        switchAcc={switchAcc}
        clicked={clicked}/>
        <ChatInfoBody 
        switchAcc={switchAcc}
        clickAsGuest={props.clickAsGuest}/>
        <ChatInfoFooter />
      </div>
    </div>
  )
}

export default ChatInfoModal
