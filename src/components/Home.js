import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="container home-container">
        <div className="home-content">
          <div className="home-introduction">
            <div className="introduction">
              <h1>Hello, I'm Faisal Baqir Tahmidi</h1>
              <h1 className="typewriter">
                <Typewriter
                  options={{
                    strings: ["Fullstack", "Frontend", "Backend"],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 10,
                  }}
                />
              </h1>
              <h1>Web Developer</h1>
            </div>
            <div className="buttons-container">
              <a className="btn btn-dark mt-3" href="/faisal-baqir/portfolio">
                My Portfolio
              </a>
              <a
                className="btn btn-light mt-3 ms-3"
                href="/faisal-baqir/contact"
              >
                Contact Me
              </a>
            </div>
            <div className="soc-med mt-4">
              <a href="https://github.com/faisalbaqirt">
                <FaGithub size={30} style={{ color: "#64ffda" }} />
              </a>

              <a
                href="https://www.linkedin.com/in/faisalbaqirtahmidi/"
                className="ms-4"
              >
                <FaLinkedin size={30} style={{ color: "#64ffda" }} />
              </a>

              <a
                href="https://www.instagram.com/faisal.baqirt"
                className="ms-4"
              >
                <FaInstagram size={30} style={{ color: "#64ffda" }} />
              </a>
            </div>
          </div>
          <div className="home-image-container">
            <img
              className="home-image"
              src="https://res.cloudinary.com/dxgjnu4h8/image/upload/v1700641022/Desain_tanpa_judul__1_-removebg-preview_nyij7y.png"
              alt="Your Profile"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
