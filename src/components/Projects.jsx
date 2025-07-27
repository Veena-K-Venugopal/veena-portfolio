import ProjectCard from "./ProjectCard";
import projects from "../data/projectsData";
import { FaGithub } from 'react-icons/fa';

function Projects() {
    return (
        <section id="projects" className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                    Projects
                </h2>
            </div>
            <div className="px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        tech={project.tech}
                        link={project.link}
                    />
                ))}
            </div>
            <div className="text-center mt-12">
                <a
                    href="https://github.com/Veena-K-Venugopal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#2B3137] text-white rounded-lg font-medium hover:bg-[#2DBA4E] transition-colors"
                >
                    <FaGithub className="text-lg" />
                    See More Projects →
                </a>
            </div>
        </section>
    )
}

export default Projects;