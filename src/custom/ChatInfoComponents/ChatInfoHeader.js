import React, { useState } from 'react'
import slika from '../../assets/logo2.png'
import slikaa from '../../assets/glamur.jpg'
import '../ChatInfoModal.css'

const ChatInfoHeader = (props) => {
    const [show, setShow]=useState(false)
    const [show1, setShow1]=useState(false)
    const rightHeaderClasses = props.switchAcc ? 'rightChatInfoHeader leftMargin' : 'rightChatInfoHeader'

  return (
    <div className='chatInfoHeader'>
            <div className='leftChatInfoHeader'>
                <div className='chatImgContainer'>
                    <img src={slika} alt='' />
                </div>
            </div>
            <div className={rightHeaderClasses}>
                {!props.switchAcc && (
                    <span onClick={()=>{
                        setShow1(!show1)
                        if(show){
                            setShow(!show)
                        }
                    }} className='picSpan'>
                        <img src={slikaa} alt=''/>
                        <i id='downCarr' className="fas fa-caret-down"></i>
                    </span>
                )}
                <span onClick={()=>{
                    setShow(!show)
                    if(show1){
                        setShow1(!show1)
                    }
                }} className='spanCircle'>
                    <i className='fa fa-ellipsis-h'></i>
                </span>
                
                <span onClick={props.clickHandler} className='spanCircle'>
                    <i className='fa fa-minus'></i>
                </span>
            </div>
            {(show1 && !props.clicked) && (
                <div className='switchAcc'>
                    <button onClick={props.switchHandler} className='switchBtn'>Switch Account</button>
                </div>
            )}
            {show && (
                    <div className='dotsContainer'>
                        <a
                        href='https://www.facebook.com/parnice'
                        target='_blank'>Visit Facebook Profile</a>
                        <a 
                        href='https://www.facebook.com/business/goals/add-live-chat-to-website-with-messenger'
                        target='_blank'>Add Messenger to your website</a>
                    </div>
                )}
        </div>
  )
}

export default ChatInfoHeader
