import React from 'react'

import { Col, Container, Row } from 'reactstrap';
import '../../../styles/Home-category.css';

//import images
import img1 from '../../../assets/images/category-01.png';
import img2 from '../../../assets/images/category-02.png';
import img3 from '../../../assets/images/category-03.png';
import img4 from '../../../assets/images/category-04.png';


const CategoryData = [
    {
        display: 'FastFood',
        image : img1
    },
    {
        display: 'Pizza',
        image : img2
    },
    {
        display: 'Asian Food',
        image : img3
    },
    {
        display: 'Row Meat',
        image : img4
    },
]

const Category = () => {
  return (
    <Container>
        <Row>
            {CategoryData.map((item,index) => (
                <Col lg='3' key={index}>
                    <div className='category__item d-flex align-items-center justify-content-center gap-3'>
                        <div className='category__img '>
                            <img src={item.image} alt="" />
                        </div>
                        <div className='category__content'>
                            <h5>{item.display}</h5>
                        </div>
                    </div>
                </Col>
            ))}
        </Row>
    </Container>
  )
}

export default Category