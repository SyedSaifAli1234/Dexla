import { Avatar, Typography, Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";
import ProjectCard from "@/widgets/ProjectCard.jsx";

export function Projects() {
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
                  <ProjectCard title={"Digitalisation"} img={"/img/digitalisation.jpg"} desc={"Business digitalization uses digital technologies to transform business operations, processes, and customer experiences. It uses digital tools and technologies to optimize workflows, improve efficiency, and enhance customer experiences."}/>
                  <ProjectCard title={"Big data processing"} img={"/img/bigdata.jpg"} desc={"Our company specializes in developing cutting-edge big data analytics software solutions, empowering businesses to extract valuable insights from massive data sets and make data-driven decisions."}/>
                  <ProjectCard title={"Data security and data anonymization"} img={"/img/security.jpg"} desc={"Our company specializes in data anonymization services, utilizing state-of-the-art techniques and algorithms to protect individual privacy while allowing organizations to derive valuable insights from anonymized datasets, enabling compliant and ethical data analysis."}/>
                  <ProjectCard title={"Natural language processing"} img={"/img/nlp.jpg"} desc={"Our software solutions leverage Natural Language Processing expertise to analyze and interpret human language, empowering businesses to automate text-based processes, improve customer interactions, and gain valuable insights from textual data sources."}/>
                  <ProjectCard title={"Chat based SaaS"} img={"/img/chat.jpg"} desc={"Dexla offers Chat-based SaaS services, enabling businesses to engage with their customers in real-time through interactive chat platforms, enhancing customer support, sales, and overall user experience."}/>
                </div>
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
