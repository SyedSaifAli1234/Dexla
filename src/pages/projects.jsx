import { Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import ProjectCard from "@/widgets/ProjectCard.jsx";
import ProjectDetails from "@/pages/projectDetail";
import projectsData from '../data/projectsData';
import {useState} from "react";

export function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    console.log("Clicked");
    setSelectedProject(project);
  };

  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 px-4">
        <div className="container mx-auto">
          <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2 font-normal text-blue-gray-500">
                  What we can do for you
                </Typography>
              </div>
              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-10 flex flex-wrap justify-center">
                  {projectsData.map((project, index) => (
                      <ProjectCard
                          key={index}
                          title={project.title}
                          img={project.img}
                          desc={project.desc}
                          onClick={() => handleCardClick(project)}
                      />
                  ))}
                </div>
                {selectedProject && (
                    <ProjectDetails
                        title={selectedProject.title}
                        img={selectedProject.img}
                        desc={selectedProject.desc}
                    />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Projects;
