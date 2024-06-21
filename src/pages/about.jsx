import { Typography, Button } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import aboutUs from "../../public/img/about.jpg";
import '../css/about.css';
import { useEffect, useRef } from "react";
import locomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';
import "../css/styling.css";
import photocv from "../../public/img/photocv.png";

export function About() {
    const scrollRef = useRef(null);

    useEffect(() => {
        let scroll;
        const timeout = setTimeout(() => {
            scroll = new locomotiveScroll({
                el: scrollRef.current,
                smooth: true,
                lerp: 0.1,
            });
        }, 100); // Delay initialization to ensure all elements are loaded

        return () => {
            if (scroll) scroll.destroy();
            clearTimeout(timeout);
        };
    }, []);

    return (
        <div data-scroll-container ref={scrollRef}>
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
                            <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
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
                                    <Typography variant="body1" className="text-blue-gray-700 leading-relaxed mb-6">
                                        Certificat d'aptitude à la profession d'avocat – École de formation des barreaux de la Cour d’appel de Paris / Master 2 Droit international privé et du commerce international / Master 1, Droit des affaires – Université Panthéon-Assas Paris II / Licence bi-disciplinaire droit et économie – Université Nancy II.
                                    </Typography>
                                    <Button className="bg-blue-gray-900 text-white hover:bg-blue-gray-800 rounded-none">
                                        EN SAVOIR PLUS →
                                    </Button>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 px-4">
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
    );
}

export default About;
