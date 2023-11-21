// Contact.jsx

// import { useState } from "react";
import {
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const formData = {
  //       name,
  //       email,
  //       message,
  //     };
  //     const response = await fetch(proccess.env.REACT_APP_API_URL, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       console.log("Email sent successfully");
  //     } else {
  //       console.error("Failed to send email");
  //     }
  //   } catch (error) {
  //     console.error("Error sending email:", error);
  //   }
  // };

  return (
    <div className="container">
      <h2>Contact Information</h2>
      <div className="row">
        <div className="col-lg-12">
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

        {/* <div className="col-lg-6">
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
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
