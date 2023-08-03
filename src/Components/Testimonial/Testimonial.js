import React from 'react'
import "./Testimonial.scss";
import AliceCarousel from 'react-alice-carousel';
import avtarImg from "../../assets/images/avtar-img.png"


const items = [
  <div className="item" data-value="1">
        <div className='dashed'>“</div>
        <div className='text'>Working with a photo studio to obtain images of our apparels in the past has become a time-consuming task because of the many criteria’s and demands set from customers. As a middle-sized company, we found it difficult to find the time and resources to coordinate this process. Coordination with the studio to arrange the right model and ensuring studio executes as per brand’s styling requirement was extremely time consuming.</div>
        <div className='item-bottom'>
          <div className='avtar-img'>
            <img src={avtarImg} alt=''  />
          </div>
          <div className='avtar-name'>Zoe Miller</div>
        </div>
  </div>,
  <div className="item" data-value="2">
  <div className='dashed'>“</div>
  <div className='text'>Working with a photo studio to obtain images of our apparels in the past has become a time-consuming task because of the many criteria’s and demands set from customers. As a middle-sized company, we found it difficult to find the time and resources to coordinate this process. Coordination with the studio to arrange the right model and ensuring studio executes as per brand’s styling requirement was extremely time consuming.</div>
  <div className='item-bottom'>
    <div className='avtar-img'>
      <img src={avtarImg} alt=''  />
    </div>
    <div className='avtar-name'>Zoe Miller</div>
  </div>
</div>,
  <div className="item" data-value="3">
  <div className='dashed'>“</div>
  <div className='text'>Working with a photo studio to obtain images of our apparels in the past has become a time-consuming task because of the many criteria’s and demands set from customers. As a middle-sized company, we found it difficult to find the time and resources to coordinate this process. Coordination with the studio to arrange the right model and ensuring studio executes as per brand’s styling requirement was extremely time consuming.</div>
  <div className='item-bottom'>
    <div className='avtar-img'>
      <img src={avtarImg} alt=''  />
    </div>
    <div className='avtar-name'>Zoe Miller</div>
  </div>
</div>,
  <div className="item" data-value="4">
  <div className='dashed'>“</div>
  <div className='text'>Working with a photo studio to obtain images of our apparels in the past has become a time-consuming task because of the many criteria’s and demands set from customers. As a middle-sized company, we found it difficult to find the time and resources to coordinate this process. Coordination with the studio to arrange the right model and ensuring studio executes as per brand’s styling requirement was extremely time consuming.</div>
  <div className='item-bottom'>
    <div className='avtar-img'>
      <img src={avtarImg} alt=''  />
    </div>
    <div className='avtar-name'>Zoe Miller</div>
  </div>
</div>,
];


const Testimonial = () => {
  return (
    <div className='testimonial-section'>
      <div className='testimonial-container'>
        <div className='testimonial-left-side'>
        <AliceCarousel
        mouseTracking
        items={items}
        controlsStrategy="alternate"
        paddingLeft={126}
        paddingRight={126}
    />
        </div>
        <div className='testimonial-right-side'>
          <div className='sub-heading'>Testimonial</div>
          <div className='heading'>What Customer<br />Say About Us</div>
        </div>
      </div>
      
    </div>
  )
}

export default Testimonial
