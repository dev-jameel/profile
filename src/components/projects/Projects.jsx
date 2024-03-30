import './projects.css';
import { projects } from '../../constants';

const Projects = () => {
    return (
        <div className="projects-container">
            <div className="projects-content">
                <abbr>Portfolio</abbr>
                <h1>My Works</h1>
            </div>
            <div className='projects-list'>
                {projects.map((project) => (
                    <div key={project.name} className="project-card">
                        <img src={project.image} alt="project image" />
                        <div className="project-content">
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            {project.source_code_link && (
                                <a href={project.source_code_link} target="_blank" rel="noopener noreferrer" className='project-link'>
                                    <abbr>Source Code</abbr>
                                </a>
                            )}
                            <div className="tags">
                                {project.tags.map((tag, index) => (
                                    <p key={`tag-${index}`} className="tag">
                                        #{tag}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;