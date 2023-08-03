import React, { useEffect, useState } from 'react';
import "./Features.scss";
import group_7 from "../../assets/images/group-7.svg"
import one_1 from "../../assets/images/one-1.png"
import one_2 from "../../assets/images/one-2.png"
import one_3 from "../../assets/images/one-3.png"
import one_4 from "../../assets/images/one-4.png"
import backgroundImg from "../../assets/images/backgroundImg.png"
import rectangle_1 from "../../assets/images/Rectangle-1.png"
import rectangle_2 from "../../assets/images/Rectangle-2.png"
import rectangle_3 from "../../assets/images/Rectangle-3.png"
import toolsImg_1 from "../../assets/images/group-12.png"
import toolsImg_2 from "../../assets/images/group-11.png"
import toolsImg_3 from "../../assets/images/group-10.png"
import toolsImg_4 from "../../assets/images/group-9.png"
import toolsImg_5 from "../../assets/images/group-8.png"
import iimm_1 from "../../assets/images/iimm-1.png"
import iimm_2 from "../../assets/images/iimm-2.png"
import iimm_3 from "../../assets/images/iimm-3.png"
import iimm_4 from "../../assets/images/iimm-4.png"
import iimm_5 from "../../assets/images/iimm-5.png"
import iimm_6 from "../../assets/images/iimm-6.png"
import iimm_7 from "../../assets/images/iimm-7.png"
import iimm_8 from "../../assets/images/iimm-8.png"




const oneImages = [one_1, one_2, one_3, one_4];
const backgroundImage = [{img :rectangle_1, text: "Original"},{img: rectangle_2, text: "Transparent Background"},{img: rectangle_3, text: "Image Background"}];
const toolsImage = [toolsImg_1, toolsImg_2, toolsImg_3, toolsImg_4, toolsImg_5];
const ROIImages = [iimm_1, iimm_2, iimm_3, iimm_4, iimm_5, iimm_6, iimm_7, iimm_8];



const Features = () => {
    const [isActiveOneImg, setIsActiveOneImg] = useState(true);
    const [isActiveBackground, setIsActiveBackground] = useState(false);
    const [isActiveTools, setIsActiveTools] = useState(false);
    const [isActiveROI, setIsActiveROI] = useState(false);

    const [currentOneImg, setCurrentOneImg] = useState(one_1);
    const [currentBackgroundImg, setCurrentBackgroundImg] = useState(null); 
    const [currentToolImg, setCurrentToolImg] = useState(null); 
    const [currentROIImg, setCurrentROIImg] = useState(null);

const handleOneImgBtn = () => {
    setIsActiveOneImg(true);
    setIsActiveBackground(false);
    setIsActiveTools(false);
    setIsActiveROI(false);
}
const handleBackgroundImgBtn =() => {
    setIsActiveOneImg(false);
    setIsActiveBackground(true);
    setIsActiveTools(false);
    setIsActiveROI(false);
    console.log(currentBackgroundImg);

}
const handleToolImgBtn =() => {
    setIsActiveOneImg(false);
    setIsActiveBackground(false);
    setIsActiveTools(true);
    setIsActiveROI(false);
}

const handleROIImgBtn = () => {
    setIsActiveOneImg(false);
    setIsActiveBackground(false);
    setIsActiveTools(false);
    setIsActiveROI(true);
}
useEffect(() => {
    const intervalId = setInterval(() => {
         setCurrentOneImg(oneImages[Math.floor(Math.random() * oneImages.length)]);
         setCurrentBackgroundImg(backgroundImage[Math.floor(Math.random() * backgroundImage.length)]);
         setCurrentToolImg((prevImage) => (prevImage + 1) % toolsImage.length);
         setCurrentROIImg((prevImage) => (prevImage + 1) % ROIImages.length);       
    },400)
    return () => clearInterval(intervalId);
}, [])



  return (
    <div className='features-section'>
        <div className='features-logo'>
            <img src={group_7} alt='' />
        </div>
        <div className='features-heading'>
            Features
        </div>
        <div className='features-container'>
            
             {
             isActiveOneImg &&
             <div className='img-section'> 
             <img src={currentOneImg} alt='' /> 
             </div>
             }
             {
             isActiveBackground && 
             <div className='img-section'>
                <div className='background-text' >{currentBackgroundImg.text}</div>
                <div className='background-img' style={{backgroundImage: `url(${currentBackgroundImg.img})`}}><img  src={backgroundImg} alt='' /></div>
                </div>
             }

            {
             isActiveTools && 
             <div className='img-section'>
                <div className='tools-img'><img  src={toolsImage[currentToolImg]} alt='' /></div>
                </div>
             }
             {
             isActiveROI && 
             <div className='img-section'>
                <div className='rois-img'><img  src={ROIImages[currentROIImg]} alt='' /></div>
                </div>
             }
            
            <div className='hover-btn-section'>
               <div className={isActiveOneImg ? 'active-btn' : 'hover-btn'} onClick={handleOneImgBtn}>One size to many sizes</div>
               <div className={isActiveBackground ? 'active-btn' : 'hover-btn'} onClick={handleBackgroundImgBtn}>Background Removal</div>
               <div className={isActiveTools ? 'active-btn' : 'hover-btn'} onClick={handleToolImgBtn}>Resize, align,margin - tools</div>
               <div className={isActiveROI ? 'active-btn' : 'hover-btn'} onClick={handleROIImgBtn}>ROI Cropping</div>
            </div>
        </div>
      
    </div>
  )
}

export default Features
