import React, { useEffect, useRef, useState } from "react";
import { Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import ProjectCard from "@/widgets/projects/ProjectCard.jsx";
import ProjectDetails from "@/pages/projectDetail";
import projectsData from '../data/projectsData';
import { useNavigate } from "react-router-dom";
import projectsImg from "../../public/img/meeting.jpg";
import locomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';
import "../css/styling.css";

export function Projects() {
    const scrollRef = useRef(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const navigate = useNavigate();

    const handleCardClick = (project) => {
        setSelectedProject(project);
    };

    useEffect(() => {
        if (localStorage.getItem('projectNameSelected')) {
            const selectedProjectName = localStorage.getItem('projectNameSelected');
            if (selectedProjectName === 'Digi Dexla') {
                setSelectedProject(projectsData[0]);
                localStorage.clear();
            } else if (selectedProjectName === 'Dexla Safe') {
                setSelectedProject(projectsData[2]);
                localStorage.clear();
            }
        }
    }, []);

    useEffect(() => {
        const scroll = new locomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            lerp: 0.1,
        });

        return () => {
            if (scroll) scroll.destroy();
        };
    }, []);

    return (
        <div data-scroll-container ref={scrollRef}>
            <section className="relative block h-[50vh]">
                <div
                    className="bg-profile-background absolute top-0 h-full w-full"
                    style={{
                        backgroundImage: `url(${projectsImg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
            </section>
            <section className="relative bg-blue-gray-50/50 py-16 px-4">
                <div className="container mx-auto">
                    <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
                        <div className="px-6">
                            {
                                !selectedProject && (
                                    <div className="my-8 text-center">
                                        <Typography variant="h2" color="blue-gray" className="mb-2 font-normal text-blue-gray-500">
                                            What we can do for you
                                        </Typography>
                                    </div>
                                )
                            }
                            <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                                {selectedProject ? (
                                    <ProjectDetails
                                        selectedProject={selectedProject}
                                        setSelectedProject={setSelectedProject}
                                    />
                                ) : (
                                    <div className="mt-10 flex flex-wrap justify-center">
                                        {projectsData.map((project, index) => (
                                            <ProjectCard
                                                key={index}
                                                project={project}
                                                onClick={() => handleCardClick(project)}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bg-blue-gray-50/50">
                <Footer />
            </div>
        </div>
    );
}

export default Projects;
