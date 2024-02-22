import React from 'react';
import { useParams } from 'react-router-dom';
import { projectDetails } from './ProjectsData'; 
import './ProjectDetail.css'; 

const ProjectDetail = () => {
    let { projectId } = useParams();
    let projectKey = projectId.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); // Simplistic slugify example
    let project = projectDetails[projectKey];

    // Basic conditional rendering in case of an undefined project
    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="project-detail">
                <h2>{project.title}</h2>
                <br></br>
            <video src={project.videoPath} autoPlay loop muted className="project-detail-video">
                <source src={project.videoPath} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <img src={project.imagePath} alt={project.title} className="project-detail-image" />
            <br></br>
            <p>{project.summary}</p>
            <br></br>
            <p>{project.description}</p>
            {/* Render more project details as needed */}
        </div>
    );
};

export default ProjectDetail;
