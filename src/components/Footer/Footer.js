import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'
import { IoIosMailUnread } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="f-content">
        <div className="first-content">
          <img src={logo} alt="" />
          <p>Email: info@sourcecode.com.pk</p>
          <h2>Join Our Mailing List</h2>
          <div className="inputs">
            <input type="text" />
            <IoIosMailUnread />
          </div>
          {/*  */}

          <h1>Follow Us</h1>
          <div className="social">
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaLinkedin />
            </span>
            <span>
              <FaInstagram />
            </span>
            <span>
              <FaYoutube />
            </span>
            <span>
              <FaTwitter />
            </span>
          </div>
        </div>
        <div className='second-content'>
          <h1>Categories</h1>
          <p>
            <a href="/">The Thought </a>
          </p>
          <p>
            <a href="/">The Eloquence </a>
          </p>
          <p>
            <a href="/">The Expertise </a>
          </p>
        </div>
        <div className='third-content'>
          <h1>About</h1>
          <p>
            <a href="/">About Us </a>
          </p>
          <p>
            <a href="/">Contact Us </a>
          </p>
          <p>
            <a href="/">Terms of Use </a>
          </p>
          <p>
            <a href="/">Privacy Policy </a>
          </p>
        </div>
        <div className='fourth-content'>
          <h1>Learn More</h1>
          <p>
            <a href="/">FAQs </a>
          </p>
          <p>
            <a href="/">Blogs </a>
          </p>
          <p>
            <a href="/">Learning </a>
          </p>
          <p>
            <a href="/">Resources</a>
          </p>
          <p>
            <a href="/"> Jobs </a>
          </p>
        </div>
      </div>
      {/* <hr /> */}
      <p className='copy-right'>
        Copyright © 2022 sourcecode.academy All Rights Reserved. Developed By
        Allomate Solutions.
      </p>
    </div>
  );
}

export default Footer