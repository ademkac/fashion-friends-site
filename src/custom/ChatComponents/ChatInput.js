import React from 'react'
import './Chat.css'
import slika from '../../assets/send.svg'
import slika1 from '../../assets/attach.svg'

const ChatInput = (props) => {
  return (
    <div className='chatInputContainer'>
      <span className='spanSend'>
          <img className='sendImg' src={slika1} alt='' />
      </span>
      <input 
      className='chatInput'
      type='text'
      placeholder='Ask a question'
      value={props.value}
      onChange={props.onChangeHandler}/>
      <span className='spanSend' onClick={props.onSendHandler}>
          <img className='sendImg' src={slika} alt='' />
      </span>
    </div>
  )
}

export default ChatInput
