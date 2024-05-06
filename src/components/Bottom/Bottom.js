import React from 'react'
import './bottom.css'
import salih from  '../../assets/Sahil-Adeem.webp'
import { LuArrowUpRightFromCircle } from 'react-icons/lu';

const Bottom = () => {
  return (
    <div className="bottom-container">
      <img src={salih} alt="" />
      <div className="element">
        <h3>Elevate Your Potential with</h3>
        <h1>Expert Coaching</h1>
        <hr />
        <p>
          Take your personal and professional development to the next level with
          expert coaching from our team of domain experts. Our one-on-one
          coaching sessions are tailored to your specific needs and goals,
          providing you with the support and guidance you need to succeed.
        </p>
        <div className="bottom-grid">
          <div className="b-grid1">
            <p>01</p>
            <h1>Personal coaching</h1>
            <span>
              Personalized one-on-one coaching to improve skills and
              perspective.
            </span>
            <div className='b-link1'>
              <br/>
              <br/>
              <a href="/">
                Book Now <LuArrowUpRightFromCircle />
              </a>
            </div>
          </div>
          <div className="b-grid2">
            <p>02</p>
            <h1>Business Coaching</h1>
            <span>Expert business coaching to drive growth and success.</span>
            <div className='b-link2'>
              <br/>
              <br/>
              <a href="/">
                Book Now <LuArrowUpRightFromCircle />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bottom