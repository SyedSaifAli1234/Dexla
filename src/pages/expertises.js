import { Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import ProjectCard from "@/widgets/projects/ProjectCard.jsx";
import projectsData from '@/data/projectsData';
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router"; // Replace useNavigate with useRouter
import projectsImg from "../../public/img/meeting.jpg";
import SmoothScrollbar from 'smooth-scrollbar';

export function Expertises() {
    const [selectedProject, setSelectedProject] = useState(null);
    const router = useRouter(); // Replace useNavigate with useRouter
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
            <section className="relative bg-blue-gray-50/50 py-16 px-4">
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
            </section>
            <div className="bg-blue-gray-50/50">
                <Footer />
            </div>
        </div>
    );
}

export default Expertises;
