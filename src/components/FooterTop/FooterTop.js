import React from 'react'
import './footertop.css'
import person from '../../assets/girl.webp'

const FooterTop = () => {
  return (
    <div className="footer-top">
      <img src={person} alt="" />
      <div className="content1">
        <h1>Teach with Us</h1>
        <p>
          ACH Join the ranks of our esteemed instructors at Source Code Academia
          and become a driving force in the global effort to enhance Muslim
          competency. As a member of our community, you will have the
          opportunity to make a real difference in the lives of students around
          the world and be a part of a movement that is working towards positive
          change. Together, we can create a brighter future for all.
        </p>
      </div>
      {/* <div className='content2'>
        <p>Join Us!</p>
      </div> */}
      <div className='content2'>
        <span style={{ transform: "rotate(90deg)", display: "inline-block" }}>
          J
        </span>
        <span style={{ transform: "rotate(90deg)", display: "inline-block" }}>
          o
        </span>
        <span style={{ transform: "rotate(90deg)", display: "inline-block" }}>
          i
        </span>
        <span style={{ transform: "rotate(90deg)", display: "inline-block" }}>
          n
        </span>
        <span style={{ transform: "rotate(90deg)", display: "inline-block" }}>
          {" "}
        </span>
        <span style={{ transform: "rotate(90deg)", display: "inline-block" }}>
          U
        </span>
        <span style={{ transform: "rotate(90deg)", display: "inline-block" }}>
          s
        </span>
        <span style={{ transform: "rotate(90deg)", display: "inline-block" }}>
          !
        </span>
      </div>
    </div>
  );
}

export default FooterTop