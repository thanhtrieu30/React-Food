import React from 'react';
import '../../../styles/Product-card.css'
// import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {cartActions} from '../../../store/shopping-cart/cartSlice';

const ProductCard = (props) => {
     const {id,title , price , image01} = props.item

     const dispatch  = useDispatch()
     const addToCart = () => {
        dispatch(cartActions.addItem({
            id,
            title,
            image01,
            price
        }))
     }
     
  return (
    <div className='product__item mt-5'>
        <div className='product-img'>
            <img src={image01} alt="product-img" className='w-50' />
        </div>
        <div className='product_content'>
            <h5 className='product__h5'>
                <p>{title}</p>
            </h5>
            <div className='d-flex align-items-center justify-content-between '>
                <span className='product__price'>
                    ${price}
                </span>
                <button className='product__btn' onClick={addToCart} >
                    Add to Cart
                </button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard