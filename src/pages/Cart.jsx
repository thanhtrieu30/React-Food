import React from 'react'

import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common_section/CommonSection';
import { useSelector , useDispatch } from 'react-redux';
import { Container , Row , Col } from 'reactstrap';
import '../styles/yourcard.css'

import {cartActions} from '../store/shopping-cart/cartSlice';
import { Link } from 'react-router-dom';



const Cart = () => {

  const cartItems = useSelector(state=> state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)

  
  return (
    <Helmet title='Card'>
      <CommonSection title='Your Card' />
      <section>
        <Container>
          <Row>
            <Col lg='12' >
              {
                cartItems.length === 0 ? <h5 className='text-center'>Your cart is empty</h5> :
                <table className='table table-bordered'>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                    { 
                      cartItems.map(item => <Tr item={item} key={item.id} />)
                    }
                </tbody>
              </table>
              }
                  <div>
                    <h6>Subtotal : <span className='total__detail'>${totalAmount}</span></h6>
                    <p>Taxes and shipping will calculate at checkout</p>
                    <div>
                      <button className='addToCart__btnn'><Link to='/foods'>Continue Shopping</Link></button>
                      <button className='addToCart__btnn'><Link to='/checkout'>Check out</Link></button>
                    </div>
                  </div>


            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}


const Tr = (props) => {
  const {id,image01,title,price,quantity} = props.item
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id))
  }
  return (
      <tr >
        <td className='text-center detail_img' ><img src={image01} alt=""  /></td>
        <td className='text-center'>{title}</td>
        <td className='text-center'>${price}</td>
        <td className='text-center'>{quantity}</td>
        <td className='text-center detail__delete'><i  class='ri-delete-bin-line' onClick={deleteItem} ></i></td>
      </tr>
  )
}

export default Cart