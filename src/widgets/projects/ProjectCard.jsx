import {Card, CardBody, CardHeader, Typography} from "@material-tailwind/react";
import React from "react";

const ProjectCard =(props)=> {
    return(
        <div className="mx-auto mt-24 mb-20 flex w-full justify-center px-4 md:w-4/12 lg:mt-0 cursor-pointer" onClick={props.onClick}>
            <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                    <img
                        alt="Card Image"
                        src={props.project.img}
                        className="h-full w-full"
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
    )
}
export default ProjectCard;
