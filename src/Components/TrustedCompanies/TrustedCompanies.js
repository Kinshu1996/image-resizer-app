import React from 'react'
import "./TrustedCompanies.scss";
import { Card} from 'antd';
import vector_2 from "../../assets/images/Vector (2).svg"
import { data } from './data';


const TrustedCompanies = () => {
  return (
    <div className='trusted-companies-section'>
      <div className='trusted-companies-container'>
        <div className='top'>
        <div className='top-heading'>Trusted Companies</div>
        <div className='top-txt'>Our best partners who have worked for 5+ years</div>
        <div className='vector-img'><img src={vector_2} alt='' /></div>
        </div>
        <div className='bottom'>
        <Card>
          {
            data.map((item,index) => (
              <Card.Grid key={item.key}><img src={item.img} alt=''  /></Card.Grid>
            ))
          }
        </Card>
        </div>
      </div>
      
    </div>
  )
}

export default TrustedCompanies
