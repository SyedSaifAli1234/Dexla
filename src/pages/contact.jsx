import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import { Footer, PageTitle } from "@/widgets/layout";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import contactUs from "../../public/img/contactus.jpg";
import "../css/contact.css";
import SmoothScrollbar from "smooth-scrollbar";

export function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [verificationAnswer, setVerificationAnswer] = useState("");
    const correctAnswer = "7"; // Correct answer to the verification question

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

    const controls = useAnimation();

    useEffect(() => {
        controls.start('visible');
    }, [controls]);

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
    };

    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } },
    };

    emailjs.init("qypEBbU0sp4R-nhpQ");

    const emailHandler = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Check if the verification answer is correct
        if (verificationAnswer.trim() !== correctAnswer) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Incorrect verification answer! Please try again.",
            });
            return; // Exit function early if answer is incorrect
        }

        emailjs
            .send("service_rwv5usl", "template_lnpy5s8", {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message,
            })
            .then((response) => {
                Swal.fire({
                    icon: "success",
                    title: "Email sent successfully!",
                });
                setName("");
                setEmail("");
                setSubject("");
                setMessage("");
                setVerificationAnswer("");
            })
            .catch((error) => {
                console.error("Error sending email:", error);
            });
    };

    return (
        <motion.div initial="hidden" animate={controls} variants={containerVariants}>
            <div data-scrollbar ref={scrollRef}>
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
                <motion.section className="relative bg-blue-gray-50/50 py-16 px-4" variants={sectionVariants}>
                    <div className="container mx-auto">
                        <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
                            <div className="px-6">
                                <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                                    <PageTitle heading="Want to write us?">
                                        Complete this form and we will get back to you in 24 hours.
                                    </PageTitle>
                                    <form
                                        className="mx-auto mt-12 max-w-3xl text-left"
                                        onSubmit={emailHandler}
                                    >
                                        <div className="mb-4">
                                            <Input
                                                variant="outlined"
                                                size="lg"
                                                label="Name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                className="w-full form-input"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <Input
                                                variant="outlined"
                                                size="lg"
                                                label="Email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full form-input"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <Input
                                                variant="outlined"
                                                size="lg"
                                                label="Subject"
                                                value={subject}
                                                onChange={(e) => setSubject(e.target.value)}
                                                className="w-full form-input"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <Textarea
                                                variant="outlined"
                                                size="lg"
                                                label="Message"
                                                rows={8}
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                className="w-full form-input"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <Input
                                                variant="outlined"
                                                size="lg"
                                                label="3 + 4 = ?"
                                                value={verificationAnswer}
                                                onChange={(e) => setVerificationAnswer(e.target.value)}
                                                className="w-full form-input"
                                            />
                                        </div>
                                        <div className="mb-4 flex items-center">
                                            <input
                                                type="checkbox"
                                                id="agreement"
                                                className="mr-2"
                                                required
                                            />
                                            <label
                                                htmlFor="agreement"
                                                className="text-sm text-gray-600"
                                            >
                                                J'accepte les conditions d'utilisation et la politique de
                                                confidentialité et je déclare avoir lu les informations
                                                requises conformément à l'article 13 du RGPD.
                                            </label>
                                        </div>
                                        <Button
                                            variant="gradient"
                                            size="lg"
                                            className="w-full mt-4"
                                            type="submit"
                                        >
                                            Envoyer
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>
                <motion.div className="bg-blue-gray-50/50" variants={sectionVariants}>
                    <Footer />
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Contact;
