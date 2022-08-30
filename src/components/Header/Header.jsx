import React, { useRef } from 'react';
import '../../styles/Header.css';
//import 
import { Container } from 'reactstrap';
import {NavLink , Link } from 'react-router-dom';
//import images
import logo from '../../assets/images/res-logo.png';


const nav__link = [
  {
    display : 'Home',
    path: '/home'
  },
  {
    display : 'Foods',
    path: '/foods'
  },
  {
    display : 'Cart',
    path: '/cart'
  },
  {
    display : 'Contact',
    path: '/contact'
  },
]

const Header = () => {
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')
  return (
    <header className="header">
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">

          {/* nav logo */}
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>FASTFOOD</h5>
          </div>
          {/* nav menu */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu gap-5 d-flex align-items-center">
              {nav__link.map((item,index) => (
                <NavLink  to={item.path} key={index} 
                    className={navClass => navClass.isActive ? "active__menu" : " " }
                >{item.display}</NavLink>
              ))}
            </div>
          </div>
          {/* nav right icon */}
            <div className="nav__right d-flex gap-3 align-items-center">
                <span className="cart__icon">
                  <i class="ri-shopping-cart-2-line"></i>
                  <span className="cart__badge">3</span>
                </span>

                <span className="user">
                  <Link to='/login'><i class="ri-user-3-line"></i></Link>
                </span>

                <span className="moblie__menu" onClick={toggleMenu}>
                <i class="ri-menu-line"></i>
                </span>
            </div>

        </div>
      </Container>
    </header>
  )
}

export default Header