import React, {useState} from 'react'
import './CheckoutCartScreen.css'
import {Link} from 'react-router-dom'
import {cartActions} from '../store/cart-slice'
import { useDispatch } from 'react-redux'
import LoadingSpinner from '../custom/LoadingSpinner'


const CheckoutCartItem = (props) => {

    const [inputValue, setInputValue] = useState(1)
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const inputHandler =(e) => {
        if(e.target.value === ''){
            setShow(false)
        }else{
            setShow(true)
        }
        setInputValue(e.target.value)
    }
  return (
    <div className="cartInfoBody">
        {loading && <LoadingSpinner asOverlay />}
        <div className="leftCartInfoBody">
            <div className="insideLeftCartInfoBody">
                <div className="imageContainer">
                    <Link to='/Guess'><img src={props.slika} alt=""/></Link> 
                </div>
                <div className="iconsContainer">
                    <span><i id='pen' className="fa fa-pen"></i></span>
                    <span onClick={()=>{
                        setLoading(true)
                        setTimeout(()=>{
                            setLoading(false)
                            dispatch(cartActions.removeItemFromCart(props.id))
                        },1000)
            }}><i id="xMark" className='fa fa-times'></i></span>
                </div>
            </div>

            <div className="productInfoContain">
                <p>{props.title}</p>
                <p><b>Velicina:</b> {props.size}</p>
                <p><b>Boja:</b> {props.color}</p>
            </div>
        </div>
        <div className="rightCartInfoBody">
            <p><span id="phoneSpan">Cena: </span>{props.price} RSD</p>
            <div className="inlineDiv">
                <span id="phoneSpan">Kolicina: </span>
                <input type='number' value={inputValue} onChange={inputHandler}/>
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
            <p><span id="phoneSpan">Ukupno: </span>{props.price*inputValue} RSD</p>
        </div>
        <div className="phone">
            <span><i id='pen' className="fa fa-pen"></i></span>
            <span onClick={()=>{
                setLoading(true)
                setTimeout(()=>{
                    setLoading(false)
                    dispatch(cartActions.removeItemFromCart(props.id))
                },1000)
            }}><i id="xMark" className='fa fa-times'></i></span>
        </div>
    </div>
  )
}

export default CheckoutCartItem
