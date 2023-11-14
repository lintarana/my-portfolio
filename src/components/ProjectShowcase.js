import React from 'react';
import '../styles/ProjectShowcaseStyles.css'; 

const ProjectShowcase = () => {
  
  const projects = [
    {
      title: "Task Tracker",
      description: "This websites tracks your tasks and the time taken for each task",
      
    },
    {
      title: "E-Commerce Website",
      description: "This is a website of a simple clothing store",
      
    },
    
  ];

  return (
    <section className="project-showcase">
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
