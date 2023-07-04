import {Typography} from "@material-tailwind/react";
import React from "react";

const ProjectDetails = ({ title, img, desc, setSelectedProject }) => {
    return (
        <>
            <div className="my-8 text-center">
                <div className="flex justify-between items-center">
                    <img className="inline-block h-10 w-10 cursor-pointer" src={'/img/back-icon.png'} onClick={() => setSelectedProject(null)}/>
                    <div className="flex flex-grow items-center justify-center">
                        <Typography variant="h2" color="blue-gray" className="mb-2 font-normal text-blue-gray-500">
                            {title}
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="mb-10 border-t border-blue-gray-50 py-6">
                <div className="mt-10 flex flex-wrap justify-center">
                    <div className="w-full">
                        <Typography variant="body" color="blue-gray-500" className="mb-4">
                            {desc}
                        </Typography>
                        <img src={img} alt={title} className="w-full h-auto mb-6" />
                        {/* Add additional content here if needed */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetails;
