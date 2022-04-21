import React from 'react'
import './Chat.css'

const ChatBody = (props) => {
  return (
    <div className='bodyChatContainer'>
        <p className='pTime'>10:31</p>
        <p className='pInfo'>This conversation will remain available for up to 24 hrs after the chat is closed. To remove it sooner, choose End Chat from the drop-down menu.</p>
        
        {props.messages.map((obj, idx)=>{
            return (
            <div className='messagesContainer'>
                <p key={idx} className='pMessText'>{obj.name}</p>
            </div>
            )
        })}
        
    </div>
  )
}

export default ChatBody
