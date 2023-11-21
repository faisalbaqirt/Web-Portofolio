// About.jsx

import React from "react";

const About = () => {
  return (
    <div className="container">
      <h2 className="title-head">About Me</h2>
      <div className="profile-section row">
        <div className="profile-left col-md-3 col-xs-12">
          <img
            className="profile-image"
            src="https://res.cloudinary.com/dxgjnu4h8/image/upload/v1700488127/DSCF2032B_4x6_lgefvq.jpg"
            alt="Profile"
          />
          <div className="profile-details  mt-2">
            <p>Faisal Baqir Tahmidi <br />
            Bandung, 25 September 2001</p>
          </div>
        </div>
        <div className="profile-right col-md-9 col-xs-12">
          <div className="about-content">
            <p>
              I am a graduate of Bandung Islamic University with a Bachelor's
              degree in Accounting. Despite my background in accountancy, my
              journey has led me to discover a profound passion for programming.
              I am highly motivated and dedicated to evolving as a professional
              in the dynamic world of web development.
            </p>
            <p>
              As a Fullstack Web Developer, I am enthusiastic about both backend
              and frontend development, aiming to create seamless and
              user-friendly experiences.
            </p>
            <p>
              My journey into programming has equipped me with problem-solving
              skills, analytical thinking, and attention to detail from my
              accounting background, which I believe adds a unique perspective
              to my approach as a developer.
            </p>
            <p>
              I am driven by the desire to contribute innovative solutions to
              the evolving tech landscape. Constantly seeking opportunities for
              learning and growth, I am excited about the prospect of making a
              meaningful impact in the field of Fullstack Web Development.
            </p>
          </div>
        </div>
      </div>
      <div className="content-section mt-5">
        <h6 className="title-section">Skills</h6>
        <div className="skill-row row">
          <div className="skill-column col-lg-4 col-md-6 col-sm-12">
            <div className="title-item">Programming Language</div>
            <div className="skill-list">Javascript</div>
          </div>
          <div className="skill-column col-lg-4 col-md-6 col-sm-12">
            <div className="title-item">Front End</div>
            <div className="skill-list">React JS, HTML & CSS</div>
          </div>
          <div className="skill-column col-lg-4 col-md-6 col-sm-12">
            <div className="title-item">Back End</div>
            <div className="skill-list">
              Node JS, Express, Knex JS, PostgreSQL, Rest API
            </div>
          </div>
        </div>
      </div>

      <div className="content-section mt-5">
        <h6 className="title-section">Education</h6>
        <ul>
          <li className="item-content">
            <div className="title-item">Bandung Islamic University</div>
            <div className="date-item">2018-2022</div>
            <div className="major-item">Accounting</div>
            <p>Graduated from Bandung Islamic University with a GPA of 3.45.</p>
          </li>

          <li className="item-content">
            <div className="title-item">Binar Academy</div>
            <div className="date-item">June 2023 - November 2023</div>
            <div className="major-item">Fullstack Web Developer</div>
            <p>
              Successfully completing Fullstack Web Developer Bootcamp Program
              with a score of 98 and the predicate Graduate.
            </p>
          </li>
        </ul>
      </div>

      <div className="content-section mt-5">
        <h6 className="title-section">Experience</h6>
        <ul>
          <li className="item-content">
            <div className="title-item">
              KAP Koesbandijah, Beddy Samsi & Setiasih
            </div>
            <div className="date-item">January 2023 - May 2023</div>
            <div className="major-item">Assistant Auditor</div>
          </li>

          <li className="item-content">
            <div className="title-item">PT Mizan Media Utama</div>
            <div className="date-item">August 2023</div>
            <div className="major-item">Financial Staff</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
