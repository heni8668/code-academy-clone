import React from 'react'
import "../Courses/cources.css";
// import "./stem-course.css";
import { BsBarChartLineFill } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { BiBookmarkHeart } from "react-icons/bi";
import { GoDash } from "react-icons/go";
// import { GiBrain } from "react-icons/gi";
import adult from "../../assets/maths.jpg";
import kids from "../../assets/biology.jpg";
import emotional from "../../assets/chemistry.jpg";
import critical from "../../assets/physics.jpg";
// import licon from "../../assets/l-icon.png";


const StemCourse = () => {
  return (
    <div className="course-container">
      {/* <div className="title">
        <h1>Featured Courses</h1>
        <button>view all courses</button>
      </div> */}
      <div className="title">
        <h1 style={{ textAlign:"center",display:"block", justifyContent:"center"}}>STEM Courses</h1>
        <GoDash className="hr" />
      </div>
      <h3 className="p1" style={{textAlign: "center", color: "gray"}}>
        All of these STEM courses, accredited and aligned with modern standards
        of education, will be starting this <br /> summer, allowing students to
        excel in commercial certifications within just 3 to 4 years.
      </h3>
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
              48 months
            </p>
          </div>
          <p>Mathematics</p>
          {/* <img src={licon} alt="" />
          <a href="/">arabic language</a> */}
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
              48 months
            </p>
          </div>
          <p>Biology</p>
          {/* <img src={licon} alt="" />
          <a href="/">arabic language</a> */}
          <hr />
          <p>
            <CiCalendar />
            <span>Starting: 2024-04-17</span>
          </p>
          <h1>USD. 34.99/Month</h1>
          <div className="detail-btn">
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
              48 months
            </p>
          </div>
          <p>Chemistry</p>
          {/* <img src={licon} alt="" />
          <a href="/">arabic language</a> */}
          <hr />
          <p>
            <CiCalendar />
            <span>Starting: 2024-04-17</span>
          </p>
          <h1>USD. 34.99/Month</h1>
          <div className="detail-btn">
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
              48 months
            </p>
          </div>
          <p>Physics</p>

          {/* <img src={licon} alt="" />
          <a href="/">arabic language</a> */}
          <hr />
          <p>
            <CiCalendar />
            <span>Starting: 2024-04-17</span>
          </p>
          <h1>USD. 34.99/Month</h1>
          <div className="detail-btn">
            <button>View Detail</button>
            <BiBookmarkHeart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StemCourse