
import { Divider, Input, Layout } from "antd";
import "./App.scss";
import TopBar from "./Components/TopBar/TopBar";
import Home from "./page/Home/Home";
import logo from "./assets/images/ImageResizer.svg"
import {RightSquareFilled} from "@ant-design/icons"

function App() {
  const {Footer, Content } = Layout;
  return (
    <>
    <Layout>
      <TopBar />
      <Content >
        <Home />
      </Content>
      <Footer >
        <div className="footer-section">
          <div className="footer-container">
            <div className="footer-top-section">
              <div className="footer-top-left">
                <div className="footer-logo">
                  <img src={logo} alt="" />
                </div>
                <div className="logo-text">
                "FlixStock offers a cutting-edge technology
                  solution to help online sellers create high-quality
                  product images for selling and marketing
                  purposes"
                </div>
              </div>
              <div className="footer-top-right">
                <div className="footer-top-right-up">
                  <div className="footer-top-up">
                    <div className="footer-top-up-heading">info@flixstock.com</div>
                    <div className="footer-top-up-text">Company</div>
                    <div className="footer-top-up-text">About Us</div>
                    <div className="footer-top-up-text">Partner with us</div>
                    <div className="footer-top-up-text">Contact us</div>
                  </div>
                  <div className="footer-top-up">
                    <div className="footer-top-up-heading">(917) 830-6172</div>
                    <div className="footer-top-up-text">Blog</div>
                    <div className="footer-top-up-text">Blog</div>
                    <div className="footer-top-up-text">News & Events</div>
                    <div className="footer-top-up-text">Customer Story</div>
                    <div className="footer-top-up-text"></div>
                  </div>
                </div>
                <div className="footer-top-right-bottom">
                  <label >Subscribe to our emails</label>
                  <Input placeholder="Your email" suffix={<RightSquareFilled />} />

                </div>
              </div>
            </div>
            <Divider orientation="left" orientationMargin="0" className="divider">
              <span >USA</span>
              <span>EUROPE</span>
              <span>EUROPE</span>
              <span>OTHERS</span>
            </Divider>
            <div className="footer-middle-section">
              <div className="content">E-commerce Product Photography, San Francisco Flat Lay Product Photography, San Francisco Ghost Mannequin Product Photography, San Francisco Clothing Product Photography, San Francisco</div>
              <div className="content">E-commerce Product Photography, San Francisco Flat Lay Product Photography, San Francisco Ghost Mannequin Product Photography, San Francisco Clothing Product Photography, San Francisco</div>
              <div className="content">E-commerce Product Photography, San Francisco Flat Lay Product Photography, San Francisco Ghost Mannequin Product Photography, San Francisco Clothing Product Photography, San Francisco</div>
            </div>
            <div className="footer-bottom-section">
              <div className="bootom-left">
                <div>Career</div>
                <div>FAQ</div>
                <div>Terms & Condition</div>
                <div>Privacy Policy</div>
              </div>
              <div className="bootom-right">
              © FlixStock 2023 | All rights reserved
              </div>
            </div>
          </div>
        </div>
      </Footer>
    </Layout>
    
    </>
  );
}

export default App;
