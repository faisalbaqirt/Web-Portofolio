// Contact.jsx

import { useState } from "react";
import axios from "axios"
import {
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const formData = {
        name,
        email,
        message,
      };
      const response = await axios.post(process.env.REACT_APP_API_URL, formData)

      if (response.status === 200) {
        setIsLoading(false);
        setShowModal(true);
        console.log("Email sent successfully");
      } else {
        console.error("Failed to send email");
      }

    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setName("")
    setEmail("")
    setMessage("")
  };

  return (
    <div className="container">
      <h2 className="title-head">Contact Information</h2>
      {isLoading && (
        <div className="loader-container">
          <div className="spinner-border text-light" role="status"></div>
        </div>
      )}
      <div className="row">
        <div className="col-lg-6 mb-5">
          <div className="contact-info">
            <p>
              Connecting with you is my joy! Feel free to reach out for exciting
              projects, collaboration opportunities, discussions about potential
              work and projects, or just to say hello.
            </p>
            <p>
              <FaEnvelope size={30} style={{ color: "#64ffda" }} />{" "}
              faishalb0@gmail.com
            </p>
            <p>
              <FaWhatsapp size={30} style={{ color: "#64ffda" }} /> 082119783317
            </p>
            <div className="soc-med">
              <a href="https://github.com/faisalbaqirt">
                <FaGithub size={30} style={{ color: "#64ffda" }} />
              </a>

              <a href="https://www.linkedin.com/in/faisalbaqirtahmidi/" className="ms-3">
                <FaLinkedin size={30} style={{ color: "#64ffda" }} />
              </a>

              <a href="https://www.instagram.com/faisal.baqirt" className="ms-3">
                <FaInstagram size={30} style={{ color: "#64ffda" }} />
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e)=> setName(e.target.value)}
                />
              </div>
              <div className="col-6">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        {showModal && (
        <div className="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                onClick={handleCloseModal}
              ></button>
            </div>
            <div className="modal-body">
            <div className="description" style={{color:"black", fontWeight:"bold"}}>Message sent successfully!</div>
            </div>
          </div>
        </div>
      </div>
      )}
      </div>
    </div>
  );
};

export default Contact;
