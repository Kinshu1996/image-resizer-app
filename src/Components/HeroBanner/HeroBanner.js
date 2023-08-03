import React from "react";
import "./HeroBanner.scss";
import { Button } from "antd";
import heroBannerImg from "../../assets/images/hero-banner.svg";
import group_1 from "../../assets/images/group-1.svg";
import { ArrowRightOutlined } from "@ant-design/icons";

const HeroBanner = () => {
  return (
    <div className="heroBanner-section">
      <div className="heroBanner-container">
        <div className="left-container">
          <div className="heading">
            Resize your product
            images for{" "}
            <span>
              multiple 
              marketplaces
            </span>{" "}
            & 
            social media platform 
            in bulk
          </div>
          <div className="text">
            Tailored for garment images, our image resizer is specifically
            designed to cater to the needs of brands, retailers, studios, and
            long-tail clients.
          </div>
          {/* <Button className="try-btn">Try Now 
        <span className="arrow" ><ArrowRightOutlined /></span>
        </Button> */}

          <Button className="try-btn">
               Try Now
            <span className="wrapper">
              <span className="slide-1">&#x2192;</span>
              <span className="slide-2">&#x2192;</span>
            </span>
          </Button>
        </div>
        <div className="right-container">
          <img src={heroBannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
