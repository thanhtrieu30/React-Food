import React from 'react'

import CommonSection from '../components/UI/common_section/CommonSection'
import Helmet from '../components/Helmet/Helmet'

import {Container , Row, Col} from 'reactstrap'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <Helmet title='Login'>
        <CommonSection title='Login' />
        <section>
          <Container>
            <Row>
              <Col lg='6' md='6' sm='12' className='m-auto text-center'>
                <form className='form mb-5'>
                  <div className="form__group">
                    <input type="email"  placeholder='Email' required/>
                  </div>
                  <div className="form__group">
                    <input type="password"  placeholder='Password' required/>
                  </div>
                  <button className='addToCart__btnn'>Login</button>
                </form>
                <Link to='/register'>
                    Don't have an account? Create an account
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
    </Helmet>
  )
}

export default Login