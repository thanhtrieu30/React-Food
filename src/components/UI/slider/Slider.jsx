import React from 'react';
import SliderIU from "react-slick";
import avatar1 from '../../../assets/images/ava-3.jpg';
import avatar2 from '../../../assets/images/ava-2.jpg';
import avatar3 from '../../../assets/images/ava-4.jpg';
import '../../../styles/Slider.css';

const Slider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        swipeToSlide: true

      };
  return (
        <SliderIU {...settings}>
            <div>
                <h6 className=' mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Dolorem distinctio quae saepe optio quisquam qui dicta reprehenderit repellendus omnis corporis.</h6>
                <div className='slider-content'>
                   <div className='d-flex align-items-center gap-3 justify-content-center'><img src={avatar1} alt="avatar1" className='rounded' /><h6>trieu</h6></div> 

                </div>
            </div>
            <div>
             <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Est voluptatem dolorem consequuntur iure. Aspernatur, quis. Repellat accusantium dignissimos exercitationem quae?</h6>
                 <div className='slider-content'>
                   <div className='d-flex align-items-center gap-3 justify-content-center'><img src={avatar2} alt="avatar2" className='rounded'  /><h6>rose</h6></div> 

                </div>
            </div>
            <div>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Autem, laudantium enim explicabo harum saepe dolor tempora quas porro architecto officiis!</h6>
                <div className='slider-content'>
                   <div className='d-flex align-items-center gap-3 justify-content-center'><img src={avatar3} alt="avatar3" className='rounded'  /><h6>lisa</h6></div> 

                </div>
            </div>
        </SliderIU>
  )
}

export default Slider