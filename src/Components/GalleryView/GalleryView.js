import React from 'react'
import "./GalleryView.scss";
import galleryViewImg from "../../assets/images/galleryViewImg.svg"
import { Button } from 'antd';
import {ArrowRightOutlined} from "@ant-design/icons"

const GalleryView = () => {
  return (
    <div className='gallery-view-section'>
        <div className='gallery-view-container'>
          <div className='heading'>Gallery View</div>
          <div className='gallery-view-img'>
            {/* <img src={galleryViewImg} alt='' /> */}
            <div className="sliding-background"></div>
          </div>
          <Button className="try-btn">
               Try Now
            <span className="wrapper">
              <span className="slide-1">&#x2192;</span>
              <span className="slide-2">&#x2192;</span>
            </span>
          </Button>
        </div>
      
    </div>
  )
}

export default GalleryView
