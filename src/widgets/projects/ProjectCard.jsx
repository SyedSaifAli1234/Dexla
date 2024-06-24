import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import React from "react";

const ProjectCard = (props) => {
    return (
        <div className="w-full md:w-1/2 lg:w-1/2 px-20 mb-20" onClick={props.onClick}>
            <Card className="w-full shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-60">
                    <img
                        alt="Card Image"
                        src={props.project.img}
                        className="h-full w-full object-cover"
                        loading="lazy"
                    />
                </CardHeader>
                <CardBody>
                    <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mb-3 font-bold"
                    >
                        {props.project.title}
                    </Typography>
                    <Typography className="font-normal text-blue-gray-500">
                        {props.project.desc}
                    </Typography>
                </CardBody>
            </Card>
        </div>
    );
};

export default ProjectCard;
