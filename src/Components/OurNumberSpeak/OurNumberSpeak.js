import React from 'react'
import "./OurNumberSpeak.scss";
import { Button } from 'antd';
import vector_1 from "../../assets/images/Vector (1).svg"
import vector from "../../assets/images/Vector.svg"


const OurNumberSpeak = () => {
  return (
    <div className='our-number-section'>
      <div className='our-number-container'>
      <div className='left-container'>
       <div className='heading-box'>
       <div className='heading'>Our number speak itself</div>
       <img src={vector} alt='' />
       </div>
        
        <Button className="get-started-btn">Get Started</Button>
      </div>
      <div className='right-container'>
        <div className='col'>
        <div className='first-row'>
            <div className='sub-heading'>3.5M</div>
            <div className='text'>Images Processed</div>
          </div>
          <div className='second-row'>
            <div className='sub-heading'>8.5+</div>
            <div className='text'>Years Experience</div>
          </div>
        </div>
        <div className='col'>
        <div className='first-row'>
            <div className='sub-heading'>6.8k</div>
            <div className='text'>Happy Customers</div>
          </div>
          <div className='second-row'>
            <div className='sub-heading'>95%</div>
            <div className='text'>Accurate Results</div>
          </div>
          </div>
          <div className='col'>
          <img src={vector_1} alt='' />
          </div>
      </div>
      </div>
      
      
    </div>
  )
}

export default OurNumberSpeak
