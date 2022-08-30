import React from 'react'
import '../../styles/Footer.css';
import { Col, Container, Row,ListGroup,ListGroupItem } from 'reactstrap'

//import images
import logo from '../../assets/images/res-logo.png';


const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6' >
            <div className="logo footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>FASTFOOD</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
           </div>
          </Col>

          <Col lg='3' md='4' sm='6' >
            <h5 className='footer__title'>Work Time Intern</h5>
            <ListGroup className='delivery__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Fulltime</span> 
                <p>8:00am - 17:00pm</p>
              </ListGroupItem>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Saturday - Sunday</span> 
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg='3' md='4' sm='6' >
          <h5 className='footer__title'>Contact</h5>
            <ListGroup className='delivery__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Phone: 0356474232</span>
              </ListGroupItem>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Email: zpeng2k@gmail.com</span> 
              </ListGroupItem>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <a  href='https://www.facebook.com/3illion'>Facebook: <i class="ri-facebook-line"></i></a> 
              </ListGroupItem>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <a  href='https://github.com/thanhtrieu30'>GitHub: <i class="ri-github-line"></i></a> 
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg='3' md='4' sm='6' >
            <h5 className='footer__title'>News Letter</h5>
            <p>Let's send email</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <div className="newsletter">
              <input type="email" placeholder='Enter your email' />
              <span><i class="ri-send-plane-line"></i></span>
            </div>
          </Col>
        </Row>
        
      </Container>
    </footer>
  )
}

export default Footer