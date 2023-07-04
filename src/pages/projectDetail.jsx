import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import { PageTitle } from "../widgets/layout/page-title";
import React from "react";
import ProjectCard from "@/widgets/ProjectCard";

const ProjectDetails = ({ title, img, desc, setSelectedProject }) => {
    return (
        <>
            <div className="my-8 text-center">
                <div className="flex justify-between items-center">
                    <button onClick={() => setSelectedProject(null)} className="text-blue-500">
                        Back
                    </button>
                    <div className="flex flex-grow items-center justify-center">
                        <Typography variant="h2" color="blue-gray" className="mb-2 font-normal text-blue-gray-500">
                            Project Details
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-10 flex flex-wrap justify-center">
                    <div className="max-w-xl">
                        <img src={img} alt={title} className="w-full h-auto mb-6" />
                        <Typography variant="h3" color="gray" className="mb-2 font-semibold">
                            {title}
                        </Typography>
                        <Typography variant="body" color="blue-gray-500" className="mb-4">
                            {desc}
                        </Typography>
                        {/* Add additional content here if needed */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetails;
