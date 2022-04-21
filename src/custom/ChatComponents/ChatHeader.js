import React, {useState} from 'react'
import slika from '../../assets/logo2.png'
import './Chat.css';

const ChatHeader = (props) => {

    const [show, setShow]=useState(false)

  return (
    <div className='chatInfoHeaderr'>
            <div className='leftChatInfoHeaderr'>
                <div className='chatImgContainer'>
                    <img src={slika} alt='' />
                </div>
                <div className='chatPContainer'>
                    <p className='ffP'>Fashion & Friends</p>
                    <p className='pbA'>Powered by Adem</p>
                </div>
            </div>
            <div className='rightChatInfoHeaderr'>
                <span onClick={()=>{
                    setShow(!show)
                }} className='spanCircle'>
                    <i className='fa fa-ellipsis-h'></i>
                </span>
                
                <span onClick={props.clickHandler} className='spanCircle'>
                    <i className='fa fa-minus'></i>
                </span>
            </div>
            {show && (
                    <div className='dotsContainerr'>
                        <div className='chatOptionsContainer'>
                            <div className='iconContainerr'>
                                <i className='fa fa-comment'></i>
                            </div>
                            <span className='chatInlineSpan'>Continue in Messenger</span>
                        </div>
                        <div className='chatOptionsContainer'>
                            <div className='iconContainerr'>
                                <i className='fa fa-times-circle'></i>
                                
                            </div>
                            <span className='chatInlineSpan'>End chat</span>
                        </div>
                        <div className='chatOptionsContainer'>
                            <div className='iconContainerr'>
                                <i className='fa fa-exclamation'></i>
                            </div>
                            <span className='chatInlineSpan'>Something's wrong</span>
                        </div>
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

export default ChatHeader
