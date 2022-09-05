import React from 'react'

import { useSelector } from 'react-redux';
import {Container , Row, Col} from 'reactstrap';
import CommonSection from '../components/UI/common_section/CommonSection';
import Helmet from '../components/Helmet/Helmet';

import '../styles/checkout.css';
import { useState } from 'react';

const Checkout = () => {
  const cartTotalAmount = useSelector(state => state.cart.totalAmount)
  const shipping = 30;

  const totalAmount = cartTotalAmount + Number(shipping);
  const shippingInto =[];
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [number,setNumber] = useState('');
  const [country,setCountry] = useState('');
  const [city,setCity] = useState('');
  const [code,setCode] = useState([]);

  const submitHandler = e => {
    e.preventDefault()
    const userShipping = {
      name : name,
      email: email,
      phone: number,
      country: country,
      city: city,
      code: code
    }

    shippingInto.push(userShipping);
    console.log(shippingInto)
  }



  return (
    <Helmet title='Check out '>
        <CommonSection title='Check out ' />
        <section>
          <Container>
            <Row>
              <Col lg='8' md='6'>
                <h4>Shipping Address</h4>
                <form className='checkout_form' onSubmit={submitHandler}>
                   <div className="form__group">
                      <input type="text" placeholder='enter your name' required
                      onChange={e => setName(e.target.value) }
                      />
                   </div>
                   <div className="form__group">
                      <input type="email" placeholder='enter your email' required
                      onChange={e => setEmail(e.target.value) }
                      />
                   </div>
                   <div className="form__group">
                      <input type="number" placeholder='enter your phone' required 
                      onChange={e => setNumber(e.target.value) }
                      />
                   </div>
                   <div className="form__group">
                      <input type="text" placeholder='enter your country' required 
                      onChange={e => setCountry(e.target.value) }
                      />
                   </div>
                   <div className="form__group">
                      <input type="text" placeholder='city ' required  
                      onChange={e => setCity(e.target.value) }
                      />
                   </div>
                   <div className="form__group">
                      <input type="number" placeholder='Postal Code'  required
                      onChange={e => setCode(e.target.value) }
                      />
                   </div>
                   <button className='addToCart__btnn'>Payment</button>
                </form>


               
              </Col>
              <Col lg='4' md='6'>
                  <div className='checkout__total'>
                    <h5 className='d-flex align-items-center justify-content-between'>Subtotal : ${cartTotalAmount}</h5>
                    <h5>Shipping : ${shipping}</h5>
                    <div className='end'>
                      <h4>Total : <span>${totalAmount} </span></h4>
                    </div>
                  </div>
              </Col>
            </Row>
          </Container>
        </section>
    </Helmet>
  )
}

export default Checkout