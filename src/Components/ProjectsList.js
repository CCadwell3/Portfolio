import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import './ProjectsList.css'; // Make sure to create and import your CSS for styling
// Import images
import project1Image from './Img/TitleTanks.jpg';
import project2Image from './Img/TitleUnNamed.jpg';

const projects = [
    {
        id: 1,
        title: "UATanks",
        summary: "This is an over the shoulder style shooter where you play as a tank.",
        imagePath: project1Image,
        detailPath: "/projects/UATanks"
    },
    {
        id: 2,
        title: "Project 2",
        summary: "This is a brief description of Project 2.",
        imagePath: project2Image,
        detailPath: "/projects/project2"
    },
    // Add more projects as needed
];

const ProjectsList = () => {
    return (
        <div className="projects-list">
            {projects.map((project) => (
                <Link to={project.detailPath} key={project.id} className="project-box">
                    <img src={project.imagePath} alt={project.title} className="project-image" />
                    <div className="project-info">
                        <h3>{project.title}</h3>
                        <p>{project.summary}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ProjectsList;