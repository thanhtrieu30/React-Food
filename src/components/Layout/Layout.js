import React from 'react';



//import components
import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header.jsx';
import Routers from '../../routes/Routers';

const Layout = () => {
  return (
    <div>
        <Header/>
        <div>
            <Routers/>
        </div>
        <Footer/>
    </div>
    
  )
}

export default Layout