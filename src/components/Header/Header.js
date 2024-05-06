import React, { useEffect, useState } from 'react'
import './header.css'
import logo from '../../assets/logo.png'
import  {CiMail}  from "react-icons/ci";
import  {CiPhone}  from "react-icons/ci";
import { CiUser } from "react-icons/ci";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup the interval
  }, []);

  const timezoneOffsetHours = currentTime.getTimezoneOffset() / 60;
  const timezoneOffsetString =
    timezoneOffsetHours > 0
      ? `UTC-${timezoneOffsetHours}`
      : `UTC+${Math.abs(timezoneOffsetHours)}`;
    
  return (
    <div className="auto-container">
      <div className="inner-container">
        <div className="left-column">
          <div className="text">
            <div className="icons">
              <CiPhone style={{ fontSize: "24px", color: "green" }} />

              <span
                className="phone"
                style={{ fontSize: "18px", color: "white" }}
              >
                +92 317 1119981{" "}
              </span>
            </div>
            <div className="icons">
              <CiMail style={{ fontSize: "24px", color: "green" }} />
              <span
                className="mail"
                style={{ fontSize: "18px", color: "white" }}
              >
                info@sourcecode.com.pk
              </span>
            </div>
          </div>
        </div>

        {/* right column */}
        <div className="right-column">
          <p>
            Time Zone: {currentTime.toLocaleTimeString()} (
            {timezoneOffsetString})
          </p>
        </div>
        <hr />
        <div className="users">
          <CiUser style={{ fontSize: "28px", color: "green" }} />
          <p className="text">Login/Register</p>
        </div>
      </div>
      <hr />

      {/* bottom header */}
      <div className="header-upper">
        <div className="upper-container">
          <div className="logo-box">
            <div className="logo">
              <a href="/">
                <img src={logo} alt="" />
              </a>
            </div>
          </div>

          <div className="nav-outer">
            <ul className="navigation">
              <li>
                <a href="/">Categories</a>
              </li>
              <li>
                <a href="/">Coaching</a>
              </li>
              <li>
                <a href="/">About ss</a>
              </li>
              <li>
                <a href="/">Courses</a>
              </li>
              <li>
                <a href="/">Our Faculties</a>
              </li>
              <li>
                <a href="/">Blogs</a>
              </li>
            </ul>
          </div>

          <div className="team">
            <h1>team with us</h1>
          </div>
        </div>
      </div>

      {/* bar */}
    </div>
  );
}

export default Header