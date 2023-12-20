import React, { useState } from "react";

const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      imgSrc:
        "https://res.cloudinary.com/dxgjnu4h8/image/upload/v1700563220/depositphotos_253385334-stock-illustration-vector-illustration-order-fast-food_bme9r0.webp",
      title: "Food Ordering Backend - Binar Academy",
      type: "Gold Challenge (Personal Project)",
      techStack: "Node.js, Express.js, Knex.js, PostgreSQL",
      description:
        "This project involved creating a backend system for a food ordering application. I developed it as a personal project to fullfill the criteria of the Gold Challenge at Binar Academy. I successfully completed the project and achieved a score of 95. The technologies used include Node.js, Express, Knex.js, and PostgreSQL.",
      repositoryLink: "https://github.com/faisalbaqirt/2300964-36-FBT-FoodOrdering-Gold",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/dxgjnu4h8/image/upload/v1700563537/Must-Have-Features-for-Your-Favourite-Restaurant-App_w6vcap.png",
      title: "Food Ordering Web App - Binar Academy",
      type: "Platinum Challenge (Group Project - Scrum Master)",
      techStack: "Node.js, Express.js, React.js, Knex.js, PostgreSQL",
      description:
        "This project was created to fulfill the criteria of the Platinum Challenge. Our group decided to continue my Gold Challenge project, and as a result, I was appointed as the Scrum Master. We achieved a score of 98 for this full-stack project, which utilized technologies such as Node.js, React.js, Express. js, Knex.js, and PostgreSQL",
      repositoryLink:
        "https://github.com/faisalbaqirt/2300964_36_Kelompok3_FoodOrdering_Platinum",
      repositoryLink2: "https://github.com/faisalbaqirt/2300964_36_Kelompok3_FoodOrdering-Backend_Platinum",
      websiteLink: "https://food-ordering-client-w5e2.onrender.com/",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/dxgjnu4h8/image/upload/v1700564259/Desain_tanpa_judul_vdx7sr.png",
      title: "Web Portfolio - Personal Project",
      type: "Responsive Web Development",
      techStack: "HTML, CSS, React.js, Node.js, Express.js",
      description:
        "My personal web portfolio showcasing my skills and projects. Developed using React.js for a dynamic and responsive user experience, and also using Express.js for contact form submission.",
      repositoryLink: "https://github.com/faisalbaqirt/Web-Portofolio",
      websiteLink: "https://web-portofolio-vssu.onrender.com",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/dxgjnu4h8/image/upload/v1703078146/todolist_jt7qnf.jpg",
      title: "Todo List Web App - Personal Project",
      type: "Task Management Web Application",
      techStack: "Node.js, Express.js, Knex.js, PostgreSQL, React.js, Redux",
      description:
        "A Todolist Web App that helps users manage their tasks efficiently. Built using React.js for the frontend, Node.js and Express.js for the backend, and PostgreSQL for database storage. Redux is utilized for state management, providing a seamless user experience. With a simple interface and intuitive functionality, this app allows users to add, update, and delete tasks with ease.",
      repositoryLink:
        "https://github.com/faisalbaqirt/todolist_frontend",
      repositoryLink2: "https://github.com/faisalbaqirt/todolist_backend",
      websiteLink: "https://life-simplify.onrender.com/",
    },
  ];

  const openModal = (index) => {
    setSelectedProject(projects[index]);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="container">
      <div className="title-head">
        <h2>My Projects</h2>
      </div>
      <div className="project">
        {projects.map((project, index) => (
          <div
            className="project-column"
            key={index}
            onClick={() => openModal(index)}
          >
            <img alt={project.title} src={project.imgSrc} />
            <div className="title-item">{project.title}</div>
          </div>
        ))}
      </div>

      {modalOpen && selectedProject && (
        <div className="modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <div className="title-item text-black">{selectedProject.title}</div>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <img alt={selectedProject.title} src={selectedProject.imgSrc} />

                <div className="project-type">{selectedProject.type}</div>
                <div className="tech-stack">{selectedProject.techStack}</div>
                <div className="description">
                  <p>{selectedProject.description}</p>
                </div>
                <div className="project-links mt-2">
                  {selectedProject.repositoryLink && (
                    <div className="project-link ms-3">
                      <a
                        href={selectedProject.repositoryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Repository
                      </a>
                    </div>
                  )}

                  {selectedProject.repositoryLink2 && (
                    <div className="project-link ms-3">
                      <a
                        href={selectedProject.repositoryLink2}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Repository 2 
                      </a>
                    </div>
                  )}

                  {selectedProject.websiteLink && (
                    <div className="project-link ms-3">
                      <a
                        href={selectedProject.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Website
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
