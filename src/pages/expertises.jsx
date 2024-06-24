import { Typography } from "@material-tailwind/react";
import { motion, useAnimation } from "framer-motion";
import { Footer } from "@/widgets/layout";
import ProjectCard from "@/widgets/projects/ProjectCard.jsx";
import projectsData from '../data/projectsData';
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import projectsImg from "../../public/img/3.webp";
import SmoothScrollbar from 'smooth-scrollbar';
import "../css/styling.css";

export function Expertises() {
    const controls = useAnimation();
    const [selectedProject, setSelectedProject] = useState(null);
    const navigate = useNavigate();
    const scrollRef = useRef(null);

    useEffect(() => {
        let scrollbarInstance;

        const initializeScrollbar = () => {
            scrollbarInstance = SmoothScrollbar.init(scrollRef.current, {
                damping: 0.1,
                thumbMinSize: 20,
                renderByPixels: true,
                alwaysShowTracks: false,
            });
        };

        initializeScrollbar();

        return () => {
            if (scrollbarInstance) {
                scrollbarInstance.destroy();
            }
        };
    }, []);

    useEffect(() => {
        controls.start('visible');
    }, [controls]);

    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } },
    };

    return (
        <div data-scrollbar ref={scrollRef}>
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
            <motion.section className="relative bg-blue-gray-50/50 py-16 px-4" variants={sectionVariants} initial="hidden" animate={controls}>
                <div className="container mx-auto">
                    <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
                        <div className="px-6">
                            {
                                !selectedProject && (
                                    <div className="my-8 text-center">
                                        <Typography variant="h1" color="blue-gray-900" className="mb-4 font-bold">
                                            Mes spécialités
                                        </Typography>
                                        <Typography variant="h1" color="blue-gray-900" className="mb-4 font-bold">
                                            Domaines de pratique juridique
                                        </Typography>
                                    </div>
                                )
                            }
                            <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                                <div className="mt-10 flex flex-wrap justify-center">
                                    {projectsData.map((project, index) => (
                                        <ProjectCard
                                            key={index}
                                            project={project}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
            <div className="bg-blue-gray-50/50">
                <Footer />
            </div>
        </div>
    );
}

export default Expertises;
