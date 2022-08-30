import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import '../styles/Home-hero.css';
import { Link } from 'react-router-dom';
//import components
import Helmet from '../components/Helmet/Helmet';
import Category from '../components/UI/Category/Category';
import products from '../assets/fake-data/products';
import ProductCard from '../components/UI/product_card/Product_card';
// import images
import heroImg from '../assets/images/hero.png'
import foodBurger from '../assets/images/hamburger.png';
import foodPizza from '../assets/images/pizza.png';
import foodBread from '../assets/images/bread.png';


 
const featureData = [];

const Home = () => {
  return (
    <Helmet title='Home'>

      {/* Home-hero */}
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
      {/* End Home-hero */}

      {/* Home-category */}
      <section>
        <Category />
      </section>
      {/* End Home-category */}

      {/* Home-ProductItem */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2>Popular Foods</h2>
            </Col>

            <Col lg='12' className='food__category d-flex align-items-center justify-content-center gap-5'>
                <button className='btn__all footBtnActive'>All</button>
                <button className='btn__burger '><img src={foodBurger} alt="foodBurger" /> Burger</button>
                <button className='btn__pizza '><img src={foodPizza} alt="foodPizza" /> Pizza</button>
                <button className='btn__bread '><img src={foodBread} alt="foodBread" /> Bread</button>
            </Col>

            {products.map(item => (
              <Col lg='3' md='4' key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
            
          </Row>
        </Container>
      </section>
      {/* End Home-ProductItem */}


    </Helmet>
  )
}

export default Home