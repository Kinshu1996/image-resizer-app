import React from 'react'
import "./Adaption.scss"
import adaptionImg from "../../assets/images/Safari (Big Sur) - Light.png"

const Adaption = () => {
  return (
    <div className='adaption-section'>
        <div className='adaption-container'>
            <div className='top-heading'>Try Now - <span>Adaptation</span></div>
            <div className='top-subheading'>Make your products live in a day at a flat low price per product!</div>
            <div className='img-container'>
                <img src={adaptionImg} />
                
            </div>
        </div>
      
    </div>
  )
}

export default Adaption
