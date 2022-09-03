import React from 'react'
import { ListGroup } from 'reactstrap'
import CartItems from './CartItems'
import {Link} from 'react-router-dom'
import '../../../styles/Shopping-cart.css'

import { useDispatch , useSelector } from 'react-redux'
import { cartUiActions } from '../../../store/shopping-cart/cartUISlice'

const Carts = () => {
    const dispatch = useDispatch()
    const toggleCart = () => {
        dispatch(cartUiActions.toggle());
    }
    const totalAmount = useSelector(state => state.cart.totalAmount)

    const cartProducts = useSelector((state )=> state.cart.cartItems)
  return (

    <div className='cart__container'>
        <ListGroup className='cart'>
            <div className="cart__close" >
                <span onClick={toggleCart}><i class="ri-close-fill"></i></span>
            </div>
            <div className="cart__item-list">
                

                {
                    cartProducts.length === 0 ? <h6 className='text-center mt-5'> No item added to the card</h6>
                    : cartProducts.map((item,index) => (
                        <CartItems item={item} key={index} />
                    ))
                }

                

                

            </div>
            <div className="cart__bottom">
                <h6>Subtotal : <span>${totalAmount}</span></h6>
                <button><Link to='/checkout'>Checkout</Link></button>
            </div>
        </ListGroup>
    </div>
  )
}

export default Carts