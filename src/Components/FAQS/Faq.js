import React from 'react'
import "./Faq.scss";
import { Collapse } from 'antd';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';


const items = [
  {
    key: '1',
    label: 'How does the image resizer work?',
    children: 
    <>
      <div className='box-text'>Our advanced algorithms ensure efficient resizing and adaptation to different sizes and formats, catering specifically to garment images for brands, retailers, studios, and long-tail clients.</div>
        <div className='box-text'>You can resize your images in just 3 simple steps. </div>
        <div className='box-text'>
          <ol>
            <li>Upload images.</li>
            <li>Select size or create a template.</li>
            <li>Download resized images.</li>
          </ol>
        </div>
    </>,
  },
  {
    key: '2',
    label: 'Why should you resize your images?',
    children: <div className='box-text'>Resizing your images is essential to comply with the specific standards and guidelines set by different marketplaces and social media platforms. By utilizing our image resizer, you can optimize your image presentation, maximize your visibility on e-commerce platforms, and effectively attract a larger audience of potential customers, leading to increased sales opportunities.</div>,
  },
  {
    key: '3',
    label: 'Does resizing image affect quality?',
    children: <div className='box-text'>When done properly, resizing an image does not necessarily have to negatively impact its quality. The key lies in using advanced algorithms and techniques that preserve the image's integrity during the resizing process. Our image resizer employs intelligent resizing methods to maintain the visual quality of your images while adapting them to different sizes. This ensures that your resized images retain clarity, sharpness, and overall visual appeal, enabling you to present your content in the best possible way without compromising on quality.</div>,
  },
  {
    key: '4',
    label: 'How do I reduce the size of a photo?',
    children: <div className='box-text'>It is advisable to refer to the guidelines provided by the platform or consult their documentation to determine the optimal size. Alternatively, you can use our image resizer's pre-configured presets designed for popular platforms, which automatically resize images to the recommended sizes. This ensures your images are displayed properly and optimally across various platforms, enhancing their visual impact and user experience.</div>,
  },
  {
    key: '5',
    label: 'Do you have any other tools I can use for free?',
    children: <div className='box-text'>Yes, in addition to the image resizer, we offer a range of other free tools and APIs to enhance your image editing capabilities. These include tools such as background removal, meta model swap, and various other image editing APIs. These tools allow you to remove backgrounds from images, swap models in an images, and perform other editing tasks to meet your specific requirements. Explore our platform to access these additional free tools and APIs and elevate your image editing process.</div>,
  },

];

const Faq = () => {
  return (
    <div className='faq-section'>
      <div className='faq-container'>
        <div className='faq-subheading'>FAQs</div>
        <div className='faq-heading'>Frequently Asked Questions</div>
        <div className='collapse-section'>
        <Collapse items={items} bordered={false} expandIconPosition="end" 
        expandIcon={({ isActive }) => isActive ? (<MinusCircleOutlined />) : (<PlusCircleOutlined />)}
        style={{background: "transparent"}}
        />
        </div>
      </div>
      
    </div>
  )
}

export default Faq
