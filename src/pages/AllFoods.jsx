import React from 'react'
import { Col, Container, Row } from 'reactstrap'

import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common_section/CommonSection'

import products from '../assets/fake-data/products'
import ProductCart from '../components/UI/product_card/Product_card'
import ReactPaginate from 'react-paginate'
import '../styles/allFood.css'
import '../styles/pagination.css'
import { useState } from 'react'


const AllFoods = () => {
  const [searchTerm , setSearchTerm] = useState('');
  const [pageNumber , setPageNumber] = useState(0)
  const productPerPage = 8
  const visitedPage = pageNumber * productPerPage
  const displayPage = products.slice(visitedPage,visitedPage + productPerPage)
  const pageCount = Math.ceil(products.length / productPerPage)
  const changePage = ({selected}) => {
    setPageNumber(selected)
  }


  return (
    <Helmet title="All-Foods">
      <CommonSection title="All Foods" />
      <Container>
        <Row>
          <Col lg='6' md='6' sm='6'>
            <div className="search__widget d-flex align-item-center justify-content-between">
              <input type="text" placeholder='Looking for...' value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
              <span><i class='ri-search-line'></i></span>
            </div>
          </Col>

          <Col lg='6' md='6' sm='6' >
            <div className="sort__widget text-center">
              <select className='sort__widget__select'>
                <option >Price</option>
                <option value="High to Low ">High to Low</option>
                <option value="Low to High">Low to High</option>
              </select>
            </div>
          </Col>

          {
            displayPage?.filter((item) => {
              if (searchTerm.value === "")  return  item;
              if(item.title.toLowerCase().includes(searchTerm.toLowerCase()))
              return item;
            })
            .map((item) => (
              <Col lg='3' md='4' sm='6' xs='6' key={item.id} >
                <ProductCart item={item} />
              </Col>
            ))
          }
          <div>
            <ReactPaginate 
              pageCount={pageCount}
              onPageChange={changePage}
              previousLabel='Prev'
              nextLabel='Next'
              containerClassName='paginationBtn'
            />
          </div>

        </Row>
      </Container>
    </Helmet>
  )
}

export default AllFoods