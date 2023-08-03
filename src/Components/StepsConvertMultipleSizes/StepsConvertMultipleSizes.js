import React from 'react'
import "./StepsConvertMultipleSizes.scss";
import group_5 from "../../assets/images/Group-5.svg"
import group_2 from "../../assets/images/Group-2.svg"
import group_3 from "../../assets/images/Group-3.svg"
import group_4 from "../../assets/images/Group-4.svg"


const data = [
  {
    key: 1,
    img: group_2,
   heading: "Upload Image",
   text: "You can upload single image as well as multiple images",
  },
  {
    key: 2,
    img: group_3,
   heading: "Choose/Create Presets",
   text: "You can choose from marketplace or social media presets. you can also create your own presets",
  },
  {
    key: 3,
    img: group_4,
   heading: "Download Images",
   text: "Individual image as well as batch download available ",
  },

]
const StepsConvertMultipleSizes = () => {
  return (
    <div className='convert-section'>
      <div className='convert-container'>
        <>
        <div className='heading'>3 Step process to convert one image to <span>multiple sizes</span></div>
        <div className='heading-text'>Effortlessly convert a single image into multiple sizes and formats, streamlining your workflow with our intuitive tool that takes just three simple steps to generate outputs for your desired marketplace.</div>
        <span className='heading-img'><img src={group_5} alt=''/></span>
        </>
        <div className='converting-steps'>
           {
            data.map((item,index) => (
              <div className='item' key={index}>
                <div className='item-img'>
                  <img src={item.img} alt='' />
                </div>
                <div className='item-heading'>{item.heading}</div>
                <div className='item-text'>{item.text}</div>
              </div>
            ))
           }
        </div>

      </div>
      
    </div>
  )
}

export default StepsConvertMultipleSizes
