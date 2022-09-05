import React from 'react';


import products from '../assets/fake-data/products';
import {useParams} from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common_section/CommonSection';
import {Container,Row,Col } from 'reactstrap';
import product_img1 from '../assets/images/product_01.1.jpg'
import '../styles/Product-card.css'


const FoodDetails = () => {
  return (
    <Helmet title='product-detail'>
      <CommonSection title='product 01' />
          <section>
            <Container>
              <Row>
                <Col lg='2' md='2'>
                  <div className="product_img">
                    <div className="image_item">
                        <img src={product_img1} alt="" className='w-50' />
                    </div>
                    <div className="image_item">
                        <img src={product_img1} alt="" className='w-50' />
                    </div>
                    <div className="image_item">
                        <img src={product_img1} alt="" className='w-50' />
                    </div>
                  </div>
                </Col>
                <Col lg='3' md='3'>
                  <div>
                       <img src={product_img1} alt="" className='w-100' />
                  </div>
                </Col>
                <Col lg='6' md='6'>
                  <div className="product_detail_content">
                    <h2 className='title__detail'>burger</h2>
                    <span className='product__price '>Price: $34</span>
                    <p>Category: <span>Burger</span></p>
                    <button className='product__btn'>Add to card</button>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

    </Helmet>

  )
}

export default FoodDetails