import React from 'react'
import './cources.css'
import { BsBarChartLineFill } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { BiBookmarkHeart } from "react-icons/bi";
// import { GiBrain } from "react-icons/gi";
import adult from '../../assets/adult.jpg'
import kids from '../../assets/kids.jpg'
import emotional from '../../assets/emotional.jpg'
import critical from '../../assets/critical.jpg'
import licon from '../../assets/l-icon.png'

const Cources = () => {
   
  return (
    <div className="course-container">
      <div className="title">
        <h1>Featured Courses</h1>
        <button>view all courses</button>
      </div>
      <div className="cource-grids">
        <div className="c-one">
          <img src={adult} alt="" />
        </div>

        <div className="c-two">
          <img src={kids} alt="" />
        </div>
        <div className="c-three">
          <img src={critical} alt="" />
        </div>
        <div className="c-four">
          <img src={emotional} alt="" />
        </div>
      </div>
      <div className="cource-detail">
        <div className="c1">
          <div className="c1-duration">
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
        <div className="c2">
          <div className="c1-duration">
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
          <p>Arabic For Kids (age 5 to 12)</p>
          <img src={licon} alt="" />
          <a href="/">arabic language</a>
          <hr />
          <p>
            <CiCalendar />
            <span>Starting: 2024-04-17</span>
          </p>
          <h1>USD. 34.99/Month</h1>
          <div className='detail-btn'>
            <button>View Detail</button>
            <BiBookmarkHeart />
          </div>
        </div>
        <div className="c3">
          <div className="c1-duration">
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
          <p>Critical thinking – Learning how to think</p>
          <img src={licon} alt="" />
          <a href="/">arabic language</a>
          <hr />
          <p>
            <CiCalendar />
            <span>Starting: 2024-04-17</span>
          </p>
          <h1>USD. 34.99/Month</h1>
          <div className='detail-btn'>
            <button>View Detail</button>
            <BiBookmarkHeart />
          </div>
        </div>
        <div className="c4">
          <div className="c1-duration">
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
          <p>Emotional Intelligence</p>

          <img src={licon} alt="" />
          <a href="/">arabic language</a>
          <hr />
          <p>
            <CiCalendar />
            <span>Starting: 2024-04-17</span>
          </p>
          <h1>USD. 34.99/Month</h1>
          <div className='detail-btn'>
            <button>View Detail</button>
            <BiBookmarkHeart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cources