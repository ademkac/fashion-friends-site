import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './CartSidebar.css';
import CartSidebarContent from './CartSidebarContent';


const CartSidebar = (props) => {
     const cartItems = useSelector(state=>state.cart.items) 
     const [totalPrice, setTotalPrice] = useState(null)
     let price = 0;

     useEffect(()=>{
        
        cartItems.map(item=>{
           return price+=item.price*item.quantity
        })
        console.log("price: "+price)
        setTotalPrice(price)
     }, [cartItems])
  return (
    <div className='cartSidebarContainer'>
        <div className='insideCartSidebar'>
            <div className='cartSidebarContent'>
                <div className='cartSidebarHeader'>
                    <i id='cartIconTimes' onClick={props.closeSidebar} className="fas fa-times"></i>
                    <span className='titleSpanCart'><b>Mini korpa</b></span>
                </div>
                <div className='cartSidebarBody'>
                    {(cartItems.length === 0) && (
                        <p className='noItemsInfo'>Nemate proizvoda u vašoj korpi za kupovinu.</p>
                    )}
                </div>
                {(cartItems.length !== 0) && (
                    <div className='itemsContainer'>
                        {cartItems.map((obj, idx)=>{
                            return(
                                <CartSidebarContent 
                                key={idx} 
                                id={obj.id}
                                value={obj.quantity}
                                slika={obj.slika}
                                title={obj.name}
                                size={obj.size}
                                color={obj.color}
                                price={obj.price}/>
                            )
                        })}
                    </div>
                )}
                {cartItems.length !== 0 && (
                    <div className='cartTotalInfo'>
                    <p>Ukupno: <b>{totalPrice} RSD</b></p>
                    <Link to='/checkout/cart' className='goToCartBtn'><b>Idite na korpu</b></Link>
                    <Link to='/' className='paymentBtn'>Naplata</Link>
            </div>
                )}
            </div>
        </div>
      
    </div>
  )
}

export default CartSidebar
