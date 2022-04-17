import React from 'react'
import { useSelector } from 'react-redux'
import '../ChatInfoModal.css'

const ChatInfoBody = (props) => {
    const authUserName = useSelector(state=>state.auth.name)
  return (
    <div className='chatInfoBodyCont'>
      <h3>Chat with Fashion & Friends</h3>
      <p>Dobro dosli na Fashion&Friends sajt! Kako Vam mozemo pomoci</p>
      {((props.switchAcc === true) || (authUserName === null)) ? (
          <button className='asUserName'>Log into Messenger</button>
      ): (<button className='asUserName'>Continue as {authUserName}</button>)}
      <button className='asGuest'>Continue as guest</button>
    </div>
  )
}

export default ChatInfoBody
