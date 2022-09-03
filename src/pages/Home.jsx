import React from 'react';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';
import '../styles/Home-hero.css';
import { Link } from 'react-router-dom';
//import components
import Helmet from '../components/Helmet/Helmet';
import Category from '../components/UI/Category/Category';
import products from '../assets/fake-data/products';
import ProductCard from '../components/UI/product_card/Product_card';
import Slider from '../components/UI/slider/Slider';
// import images
import heroImg from '../assets/images/hero.png'
import foodBurger from '../assets/images/hamburger.png';
import foodPizza from '../assets/images/pizza.png';
import foodBread from '../assets/images/bread.png';
import ImgIntro1 from '../assets/images/location.png';
import ImgIntro2 from '../assets/images/network.png';
import { useState } from 'react';
import { useEffect } from 'react';



 
// const featureData = [];

const Home = () => {

  const [category , setCategory] = useState('ALL');
  const [allProducts , setAllProducts] = useState(products);

  useEffect(() => {
    if (category === 'ALL'){
      setAllProducts(products)
    }

    if (category === 'BURGER'){
      const filteredProducts = products.filter((product) => product.category === 'Burger');
      setAllProducts(filteredProducts)
    }

    if (category === 'PIZZA'){
      const filteredProducts = products.filter((product) => product.category === 'Pizza');
      setAllProducts(filteredProducts)
    }

    if (category === 'BREAD'){
      const filteredProducts = products.filter((product) => product.category === 'Bread');
      setAllProducts(filteredProducts)
    }
  },[category]);





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
                <button className={`btn__all ${category === 'ALL' ? 'footBtnActive' : '' }`} onClick={() => setCategory('ALL')}>All</button>
                <button className={`btn__burger ${category === 'BURGER' ? 'footBtnActive' : '' }`} onClick={() => setCategory('BURGER')}><img src={foodBurger} alt="foodBurger" /> Burger</button>
                <button className={`btn__pizza ${category === 'PIZZA' ? 'footBtnActive' : '' }`}  onClick={() => setCategory('PIZZA')}><img src={foodPizza} alt="foodPizza" /> Pizza</button>
                <button className={`btn__bread ${category === 'BREAD' ? 'footBtnActive' : '' }`} onClick={() => setCategory('BREAD')}><img src={foodBread} alt="foodBread" /> Bread</button>
            </Col>

            {allProducts.map(item => (
              <Col lg='3' md='4' key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
            
          </Row>
        </Container>
      </section>
      {/* End Home-ProductItem */}

      {/* Home introduce 1 */}
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' >
              <img src={ImgIntro1} alt="" className='w-100' />
            </Col>
            <Col lg='6' md='6'>
              <div >
                <h2 className='mb-4 css__intro' >Why Tasty Treat?</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                   Expedita nemo perferendis adipisci tempora debitis tempore, obcaecati magni minima aspernatur deserunt?</p>
                <ListGroup className='mt-4'>
                  <ListGroupItem className='border-0 ps-0'>
                    <p className='d-flex align-items-center gap-2 introP css__intro' ><i class="ri-checkbox-circle-line"></i>Fresh and tasty foods</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, alias.</p>
                  </ListGroupItem>
                  <ListGroupItem className='border-0 ps-0 '> 
                    <p className='d-flex align-items-center gap-2 introP css__intro' ><i class="ri-checkbox-circle-line"></i>Quality support</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, alias.</p>
                  </ListGroupItem>
                  <ListGroupItem className='border-0 ps-0'>
                    <p className='d-flex align-items-center gap-2 introP css__intro'><i class="ri-checkbox-circle-line"></i>Order from any location</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, alias.</p>
                  </ListGroupItem>
                </ListGroup>
              </div>
              
            </Col>
          </Row>
        </Container>
      </section>
      {/* End Home introduce 1  */}

      {/* Home introduce 2 */}
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div>
                <h5 className='mb-4 css__intro' >Testimonial</h5>
                <h3 className='mb-4'>What our  <span className='css__intro'>Customers</span>  are saying</h3>
                <p className='mb-4'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                 Distinctio quasi qui minus quos sit perspiciatis inventore quis provident placeat fugiat!
                </p>
                <Slider />

              </div>
            </Col>
            <Col lg='6' md='6'>
              <img src={ImgIntro2} alt="Intro2" className='w-100' />
            </Col>
            
          </Row>
        </Container>
      </section>
      {/* End Home introduce 2  */}


    </Helmet>
  )
}

export default Home