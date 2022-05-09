import React from 'react'
import './Modal.css'

const Modal = (props) => {
  return (
      <div className='overlayModalContainer'>
          <div className='insideOverlayModal'>
            <div className='modalMainContainer'>
                <div className='insideModalContainer'>
                    <i onClick={props.onCloseModal} id='modalXMark' className='fa fa-times'></i>
                    <p>Da li ste sigurni da zelite da ukonite proizvod iz korpe?</p>
                    <button onClick={props.onDeclineHandler} className='btnNe'>Otkazi</button>
                    <button onClick={props.onAcceptHandler} className='btnDa'>U redu</button>
                </div>
            </div>
        </div>
     </div>
  )
}

export default Modal
