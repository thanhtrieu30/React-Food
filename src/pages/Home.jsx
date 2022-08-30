import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import '../styles/Home-hero.css';
//import components
import Helmet from '../components/Helmet/Helmet';

// import images
import heroImg from '../assets/images/hero.png'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <Helmet title='Home'>
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
                <div className="hero__content">
                  <h5 className='mb-3 mt-5'>Easy way to make an order</h5>
                  <h1 className='mb-4 hero__title'><span>HUNGRY?</span> Just wait <br/> food at <span>your door</span></h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Fugit iste illum quasi possimus voluptatibus mollitia vitae rem corporis soluta nihil!</p>
                </div>

                <div className="hero__btn d-flex  align-items-center  gap-5 mt-5  ">
                  <button className='order__btn d-flex align-items-center justify-content-between '>
                    Order Now <i class="ri-arrow-right-s-line"></i>
                  </button>
                  <button className='allfoods__btn d-flex align-items-center justify-content-between'>
                   <Link to='/foods'> See all foods </Link>
                  </button>
                </div>

                  <div className="hero__ship d-flex align-items-center gap-3 mt-5">
                    <div className='hero__secure'><p><span className='shipping__icon'><i  class="ri-roadster-line"></i></span> No shipping charge</p></div>
                    <div className='hero__secure'><p><span className='shipping__icon'><i class="ri-secure-payment-line"></i></span> 100% secure checkout</p></div>
                  </div>

            </Col>
            <Col lg='6' md='6'>
                <div className="hero__img">
                  <img src={heroImg} alt="heroimg" className='w-100' />
                </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home