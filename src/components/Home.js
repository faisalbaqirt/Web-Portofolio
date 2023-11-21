import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa"

const Home = () => {
  return (
    <>
      <div className="container home-container">
        <div className="home-content">
          <div className="home-introduction">
            <h1>Hello, I'm Faisal Baqir Tahmidi</h1>
            <h1 className="typewriter">
                  <Typewriter
                    options={{
                      strings: [
                        "Fullstack",
                        "Frontend",
                        "Backend",
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
            <h1>Web Developer</h1>
            <div className="buttons-container">
              <button className="btn btn-dark mt-3">My Portfolio</button>
              <button className="btn btn-light mt-3 ms-3">Contact Me</button>
            </div>
            <div className="soc-med mt-4">
              <a href="https://github.com/faisalbaqirt">
                <FaGithub size={30} style={{ color: "#64ffda" }} />
              </a>

              <a href="https://www.linkedin.com/in/faisalbaqirtahmidi/" className="ms-4">
                <FaLinkedin size={30} style={{ color: "#64ffda" }} />
              </a>

              <a href="https://www.instagram.com/faisal.baqirt" className="ms-4">
                <FaInstagram size={30} style={{ color: "#64ffda" }} />
              </a>
            </div>
          </div>
          <div className="home-image-container">
            <img className="home-image" src="https://res.cloudinary.com/dxgjnu4h8/image/upload/v1700488127/DSCF2032B_4x6_lgefvq.jpg" alt="Your Profile" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
