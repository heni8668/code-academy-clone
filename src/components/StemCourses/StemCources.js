import React from 'react'
import { GoDash } from "react-icons/go";
import './stem-course.css'
import { BsBarChartLineFill } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { BiBookmarkHeart } from "react-icons/bi";

import licon from "../../assets/l-icon.png";
import maths from '../../assets/maths.jpg'
import chemistry from '../../assets/chemistry.jpg'
import biology from '../../assets/biology.jpg'
import physics from '../../assets/physics.jpg'
import teen from '../../assets/teen.png'


const StemCources = () => {
 
  return (
    <>
      <div className="stem-cource-container">
        <div className="container">
          <div className="title">
            <h1>STEM Courses</h1>
            <GoDash className="hr" />
          </div>
          <h3 className="p1">
            All of these STEM courses, accredited and aligned with modern
            standards of education, will be starting this <br /> summer,
            allowing students to excel in commercial certifications within just
            3 to 4 years.
          </h3>
          <div
            className="stem-course"
           
          >
            <div className="c-image1">
              <img src={maths} alt="" />
              <div className='stem-course-detail'>
                <div className="stem-c1">
                  <div className="stem-c1-duration">
                    <h2>
                      <span>
                        <BsBarChartLineFill />
                      </span>
                      Beginner
                    </h2>
                    <p>
                      <span>
                        <IoCalendarOutline />
                      </span>
                      18 months
                    </p>
                  </div>
                  <p>Arabic for Adults</p>
                  <img src={licon} alt="" />
                  <a href="/">arabic language</a>
                  <hr />
                  <p>
                    <CiCalendar />
                    <span>Starting: 2024-04-17</span>
                  </p>
                  <h1>USD. 34.99/Month</h1>

                  <div className="detail-btn">
                    <button>View Detail</button>
                    {/* <img className="bookmark" src={bookmark} alt="" /> */}
                    <BiBookmarkHeart />
                  </div>
                </div>
              </div>
            </div>
            <div className="c-image2">
              <img src={biology} alt="" />
            </div>
            <div className="c-image3">
              <img src={chemistry} alt="" />
            </div>
            <div className="c-image4">
              <img src={physics} alt="" />
            </div>
            <div className="c-image5">
              <img src={teen} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StemCources