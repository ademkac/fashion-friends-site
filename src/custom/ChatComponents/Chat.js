import React, { useState } from 'react'
import ChatBody from './ChatBody'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'

const Chat = (props) => {

    const [messages, setMessages] = useState([
        {name: "What your payment options?"},
        {name: "Can i give feedback?"},
        {name: "Can i learn more about a product?"},
        {name: "Can i make a purchase?"}
    ])
    const [value, setValue] = useState('')
    const onSendHandler = ()=>{
        console.log("value of input: "+value)
        setValue('')
        setMessages([...messages, {name: value}])
    }
  return (
    <div className='chatContainer'>
      <div className='insideChatContainer'>
        <ChatHeader 
        clickHandler={props.clickHandler}/>
        <ChatBody messages={messages} />
        <ChatInput 
        onChangeHandler={(e)=>setValue(e.target.value)}
        value={value}
        onSendHandler={onSendHandler} />
      </div>
    </div>
  )
}

export default Chat
