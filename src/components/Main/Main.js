import React from 'react'
import './main.css'
import { LuArrowUpRightFromCircle } from "react-icons/lu";
import grid1 from '../../assets/g1.png'
import grid2 from '../../assets/g2.png'
import grid3 from '../../assets/g3.png'

const Main = () => {
  return (
    <div className="main">
      <div className="main-container">
        <div className="main-first-banner">
          <p className="p1">the</p>
          <p className="p2">100</p>
          <p className="p3">year plan</p>
        </div>
        <div className="main-second-banner">
          <h2>
            Our aim to build the network of all our students and connect them
            into an{" "}
            <span>ecosystem of building knowledge skills and attributes</span>{" "}
            required to solve the global problems for the next{" "}
            <span>century!</span>
          </h2>
          <p>
            Source Code introduces the platform for networking and building a
            sense of community for all its students and behaves as a community
            center with a deeper purpose of preparing its students to clarify
            the identity and purpose for any and every one of its students.
          </p>
          <button>Learn more</button>
        </div>
      </div>
      {/* second maib bar */}
      <div className="second-main">
        <div className="second-main-container">
          <h1>
            Nurture the <span>Next Generation</span> of Excellence
          </h1>
          <h3>
            Identifying and developing the right skills in the current
            generation is crucial for meeting the needs of the next generation
            and achieving excellence over the long-term.
          </h3>
          <p>
            In order to meet the needs of the next generation and achieve
            excellence over the next hundred years, it is essential that we
            identify and cultivate the right skills in the current youth and
            adults. We have divided these skills into three categories:
          </p>
        </div>
      </div>

      {/* third main bar */}
      <div className="all">
        <div className="all-class">
          <div className="grid1">
            <div className="first-class">
              <p>01</p>
              <img src={grid1} alt="" />
            </div>
            <div className="first-inner">
              <p>The Thought</p>{" "}
              <a href="/">
                view detail <LuArrowUpRightFromCircle />
              </a>
            </div>
          </div>
          <div className="grid2">
            <div className="second-class">
              <p>02</p>
              <img src={grid2} alt="" />
            </div>
            <div className='second-inner'>
              <p>The Eloquence</p>
              <a href="/">
                view detail <LuArrowUpRightFromCircle />
              </a>
            </div>
          </div>
          <div className='grid3'>
            <div className="thrid-class">
              <p>03</p>
              <img src={grid3} alt="" />
            </div>
            <div className='third-inner'>
              <p>The Expertise</p>
              <a href="/">
                view detail <LuArrowUpRightFromCircle />
              </a>
            </div>
          </div>
        </div>
        <p className='lastP'>
          Some skills may take multiple generations to fully develop, so it is
          important that we act quickly to identify the skills that are most
          necessary and begin working to enhance them. Without this focus on
          skill development, we may not be able to reach the milestones that are
          necessary for the future.
        </p>
      </div>
    </div>
  );
}

export default Main