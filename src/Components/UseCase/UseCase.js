import React from "react";
import "./UseCase.scss";
import { Button, Col, Row } from "antd";
import group_1 from "../../assets/images/group-13.png";
import card from "../../assets/images/card-2.png"
import card_1 from "../../assets/images/Card-1.png"
import arrow_1 from "../../assets/images/Arrow 2.png"
import vectorImg from "../../assets/images/vector-1.png"
import group_2 from "../../assets/images/group-14.png"
import vector_3 from "../../assets/images/Vector-3.png"

const UseCase = () => {
  return (
    <div className="useCase-section">
      <div className="useCase-container">
        <div className="use-case-subheading">Use Case</div>
        <div className="use-case-heading">
          Do More With Your <span>Catalog Images</span>{" "}
        </div>
        <div className="use-case-content">
          <Row>
            <Col span={12}  className="text-container">
              <div className="subheading-text">
                For Brands, Retailers & Long tail clients
              </div>
              <div className="heading-text text-1">
                Maximise your presence on web to showcase your images and drive
                more sales
              </div>
              <Button className="try-btn">
               Try Now
            <span className="wrapper">
              <span className="slide-1">&#x2192;</span>
              <span className="slide-2">&#x2192;</span>
            </span>
          </Button>
          <div className="vector-img">
            <img src={vectorImg}/>
            <img src={vectorImg}/>
            <img src={vectorImg}/>
          </div>
            </Col>
            <Col span={12}>
            <div className="first-row-img">
                <div className="fixed-img">
                    <img src={card} alt="" />
                </div>
                <div className="arrow">
                    <img src={arrow_1} alt="" />
                </div>
                <div className="sliding-img">
                    <img src={card_1} alt="" />
                </div>
              </div>
            </Col>
            <Col span={12}>
            <div className="second-row-img">
              <img src={group_1} alt="" />
              </div>
            </Col>
            <Col className="text-container" span={12}>
            <div className="group-img">
              <img src={group_2} alt=""/>
            </div>
              <div className="subheading-text">Image Editing Company</div>
              <div className="heading-text text-2">
                <img src={vector_3} alt="" className="text-vector" />
                Batch process for bulk image processing at scale for editing
                houses
              </div>
              <Button className="try-btn">
               Try Now
            <span className="wrapper">
              <span className="slide-1">&#x2192;</span>
              <span className="slide-2">&#x2192;</span>
            </span>
          </Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default UseCase;
