import {Typography} from "@material-tailwind/react";
import React, {useEffect} from "react";

const ProjectDetails = ({ selectedProject, setSelectedProject }) => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    return (
        <>
            <div className="my-5 text-center">
                <div className="flex justify-between items-center">
                    <img className="inline-block h-10 w-10 cursor-pointer" src={'/img/back.png'} onClick={() => setSelectedProject(null)}/>
                    <div className="flex flex-grow items-center justify-center">
                        <Typography variant="h2" color="blue-gray" className="mb-2 font-normal text-blue-gray-500">
                            {selectedProject.title}
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="mb-4 border-t border-blue-gray-50 p-6">
                <div className="mt-8 flex flex-wrap justify-center">
                    <div className="text-center">
                        <Typography variant="lead" color="blue-gray-500" className="mb-4">
                            {selectedProject.desc}
                        </Typography>
                        {selectedProject.details && <selectedProject.details />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetails;
