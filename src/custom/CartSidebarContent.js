import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './CartSidebar.css'
import {cartActions} from '../store/cart-slice'
import slika from '../assets/settings.svg'
import Modal from './Modal'

const CartSidebarContent = (props) => {
    const [inputValue, setInputValue] = useState(1)
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    const [displayModal, setDisplayModal] = useState(false)

  return (
    <div  className='cartContentContainer'>
        {displayModal && (
            <Modal 
            onCloseModal={()=>setDisplayModal(false)} 
            onDeclineHandler={()=>setDisplayModal(false)}
            onAcceptHandler={()=>{
                dispatch(cartActions.removeItemFromCart(props.id))
                setDisplayModal(false)
            }}/>
        )}
      <div className='cartInsideContent'>
        <div className='leftCartContent'>
            <img className='imgLeftCart' src={props.slika} alt='' />
            <div className='iconsCartContainer'>
                <img className='settImg' src={slika} alt='' />
                <i onClick={()=>setDisplayModal(true)} id='xmarkCart' className='fa fa-times'></i>
            </div>
        </div>

        <div className='rightCartContent'>
            <h4>{props.title}</h4>
            <p>Velicina: {props.size}</p>
            <p>Boja: {props.color}</p>
            <p>{props.price}</p>
            <div>
            <input 
            type='number' 
            className='quantityInputCart' 
            value={inputValue} 
            onChange={(e)=>{
                if(e.target.value === '' || +e.target.value === 0){
                    setShow(false)
                }else{
                    setShow(true)
                }
                setInputValue(e.target.value)
            }}/>
            {show && (
                <button onClick={(e)=>{
                    e.preventDefault()
                    dispatch(cartActions.addItemToCart({
                        id: props.id,
                        value: inputValue
                    }))
                    setShow(false)
                }} className='updateBtn'>Azurirajte</button>
            )}
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartSidebarContent
