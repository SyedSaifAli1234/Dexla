import { Typography, Button } from "@material-tailwind/react";
import { motion, useAnimation } from "framer-motion";
import { Footer } from "@/widgets/layout";
import aboutUs from "../../public/img/corporateLaw.webp";
import "../css/about.css";
import { useEffect, useRef } from "react";
import SmoothScrollbar from 'smooth-scrollbar';
import "../css/styling.css";
import photocv from "../../public/img/photocv.webp";

export function About() {
    const controls = useAnimation();
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

    useEffect(() => {
        controls.start('visible');
    }, [controls]);

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
    };

    const textContainerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1, transition: { delay: 1.2, duration: 0.8, ease: 'easeInOut' } },
    };

    return (
        <motion.div initial="hidden" animate={controls} variants={containerVariants}>
            <div data-scrollbar ref={scrollRef}>
                <section className="relative block h-[50vh]">
                    <div
                        className="bg-profile-background absolute top-0 h-full w-full"
                        style={{
                            backgroundImage: `url(${aboutUs})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />
                    <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
                </section>
                <section className="relative bg-blue-gray-50/50 py-16 px-4">
                    <div className="container mx-auto">
                        <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
                            <div className="px-6 py-12 lg:flex lg:flex-wrap lg:items-center">
                                <motion.div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0" variants={textContainerVariants}>
                                    <div className="text-left">
                                        <Typography variant="h6" className="text-orange-600 font-semibold mb-2">
                                            Mes formations
                                        </Typography>
                                        <Typography variant="h2" className="text-blue-gray-900 font-extrabold mb-2">
                                            Nicolas Soukatchoff
                                        </Typography>
                                        <Typography variant="body1" className="text-orange-600 font-medium mb-4">
                                            Plus de 12 ans d'expérience à votre service.
                                        </Typography>
                                        <div className="text-blue-gray-700 leading-relaxed mb-6">
                                            <section className="mb-4">
                                                <Typography variant="body1" className="font-bold">
                                                    Certificat d'aptitude à la profession d'avocat
                                                </Typography>
                                                <Typography variant="body1">
                                                    École de formation des barreaux de la Cour d’appel de Paris
                                                </Typography>
                                            </section>
                                            <section className="mb-4">
                                                <Typography variant="body1" className="font-bold">
                                                    Master 2 Droit international privé et du commerce international
                                                </Typography>
                                                <Typography variant="body1">
                                                    Université Panthéon-Assas Paris II
                                                </Typography>
                                            </section>
                                            <section className="mb-4">
                                                <Typography variant="body1" className="font-bold">
                                                    Master 1, Droit des affaires
                                                </Typography>
                                                <Typography variant="body1">
                                                    Université Panthéon-Assas Paris II
                                                </Typography>
                                            </section>
                                            <section className="mb-4">
                                                <Typography variant="body1" className="font-bold">
                                                    Licence bi-disciplinaire droit et économie
                                                </Typography>
                                                <Typography variant="body1">
                                                    Université Nancy II
                                                </Typography>
                                            </section>
                                        </div>

                                        <Button className="bg-blue-gray-900 text-white hover:bg-blue-gray-800 rounded-none">
                                            EN SAVOIR PLUS →
                                        </Button>
                                    </div>
                                </motion.div>
                                <div className="w-full lg:w-1/2 px-4" variants={imageVariants}>
                                    <img src={photocv} alt="Nicolas Soukatchoff" className="rounded-lg shadow-lg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="bg-blue-gray-50/50">
                    <Footer />
                </div>
            </div>
        </motion.div>
    );
}

export default About;
