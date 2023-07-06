import { Button, Input, Textarea } from "@material-tailwind/react";
import { Footer, PageTitle } from "@/widgets/layout";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import contactUs from "../../public/img/contactus.jpg";
import projectsImg from "@/../../public/img/projects.webp";


export function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    emailjs.init("qypEBbU0sp4R-nhpQ");

    const emailHandler = () => {
        emailjs
            .send("service_rwv5usl", "template_qbh7edg", {
                from_name: name,
                from_email: email,
                message: message,
            })
            .then((response) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Email sent successfully!'
                });
                setName("");
                setEmail("");
                setMessage("");
            })
            .catch((error) => {
                console.error("Error sending email:", error);
            });
    };

    return (
        <>
            <section className="relative block h-[50vh]">
                <div
                    className="bg-profile-background absolute top-0 h-full w-full"
                    style={{
                        backgroundImage: `url(${contactUs})`,
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
                            <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                                <PageTitle heading="Want to write us?">
                                    Complete this form and we will get back to you in 24 hours.
                                </PageTitle>
                                <form className="mx-auto mt-12 max-w-3xl text-center">
                                    <div className="mb-8 flex gap-8">
                                        <Input
                                            className="min-w-0"
                                            variant="standard"
                                            size="lg"
                                            label="Full Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        <Input
                                            className="min-w-0"
                                            variant="standard"
                                            size="lg"
                                            label="Email Address"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <Textarea
                                        variant="standard"
                                        size="lg"
                                        label="Message"
                                        rows={8}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                    <Button
                                        variant="gradient"
                                        size="lg"
                                        className="mt-8"
                                        onClick={emailHandler}
                                    >
                                        Send Message
                                    </Button>
                                </form>
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

export default Contact;
