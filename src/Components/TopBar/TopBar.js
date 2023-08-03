import React from 'react'
import { Button, Layout } from 'antd';
import "./TopBar.scss";
import logo from "../../assets/images/ImageResizer.svg"

const {Header } = Layout;

const TopBar = () => {
  return (
    <Header className='header-section'>
        <div className='header-container'>
            <div className='logo'>
                {/* <img src={logo} alt='' /> */}
                Image<span>Resizer</span>
            </div>
            <div className='login-section'>
                <Button className='btn signIn-btn'>Sign in</Button>
                <Button className='btn signUp-btn'>Sign up</Button>
            </div>
        </div>

    </Header>
  )
}

export default TopBar
