import { Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import aboutUs from "../../public/img/about.jpg";
import publicationImage from "../../public/img/publication.png";
import '../css/actualities.css'; // Import the custom CSS
import { useEffect, useRef } from "react";
import locomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';
import "../css/styling.css";

export function Actualities() {
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
            <section className="relative bg-white py-16 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
                        <div className="px-6 py-12">
                            <div className="rounded overflow-hidden shadow-lg mb-10">
                                <div className="flex flex-col">
                                    <img className="w-30 object-cover" src={publicationImage} alt="Publication" />
                                    <div className="p-6">
                                        <Typography variant="h6" color="blue-gray" className="font-bold mb-2">
                                            PUBLICATION
                                        </Typography>
                                        <Typography variant="body1" color="blue-gray" className="flex items-center mb-4 text-gray-600">
                                            <span className="text-gray-600 mr-2">👤 Nicolas</span> | <span className="text-gray-600 ml-2">📅 21 December 2023</span>
                                        </Typography>
                                        <Typography variant="h5" color="blue-gray" className="font-bold mb-4">
                                            Comprendre le rôle essentiel d'un avocat dans le système juridique
                                        </Typography>
                                        <Typography variant="body2" color="blue-gray" className="mb-2">
                                            Lire la publication
                                        </Typography>
                                    </div>
                                </div>
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

export default Actualities;
