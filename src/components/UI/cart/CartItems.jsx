import React from 'react'
import { ListGroupItem } from 'reactstrap'
import '../../../styles/Shopping-cart-item.css'

import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/shopping-cart/cartSlice';

//import image

const CartItems = ({item}) => {

    const {id,title , price , image01, quantity , totalPrice} = item

    const dispatch = useDispatch();
    const incrementItem = () => {
        dispatch(cartActions.addItem({
            id,title,price,image01
        }))
    }
    const decreaseItem = () => {
        dispatch(cartActions.removeItem(id))
    }

    const deleteItem = () => {
        dispatch(cartActions.deleteItem(id))
    }


  return (
    <ListGroupItem className='border-0 '>
        <div className="cart__item__info gap-3 ">
            <img src={image01} alt="product" />
            <div className="cart__product__info w-100 d-flex align-items-center gap-5 justify-content-between">
                <div>
                    <h6 className='cart__title'>{title}</h6>
                    <p className='d-flex gap-4 align-items-center cart__price'>{quantity}x<span>{totalPrice}</span></p>
                    <div className='d-flex cart__edit  align-items-center justify-content-between'>
                        <span className='tang-btn'  onClick={incrementItem}><i class="ri-add-line"></i></span>
                        <span>{quantity}</span>
                        <span className='giam-btn' onClick={decreaseItem}><i class="ri-subtract-line"></i></span>
                    </div>
                </div>
                <span className='delete-btn' onClick={deleteItem}><i class="ri-close-line"></i></span>
            </div>
        </div>
    </ListGroupItem>
  )
}

export default CartItems