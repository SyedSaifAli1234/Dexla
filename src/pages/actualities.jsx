import { Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import aboutUs from "../../public/img/about.jpg";
import publicationImage from "../../public/img/publication.png";
import '../css/actualities.css'; // Import the custom CSS
import { useEffect, useRef } from "react";
import SmoothScrollbar from 'smooth-scrollbar';

export function Actualities() {
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

        const timeout = setTimeout(() => {
            initializeScrollbar();
        }, 100); // Delay initialization to ensure all elements are loaded

        return () => {
            if (scrollbarInstance) {
                scrollbarInstance.destroy();
            }
            clearTimeout(timeout);
        };
    }, []);

    return (
        <div data-scrollbar ref={scrollRef}>
            <section className="relative block h-[25vh]">
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
            <section className="relative bg-white py-8 px-4">
                <div className="container max-w-sm mx-auto text-left">
                    <div className="px-4 py-6">
                        <div className="card rounded overflow-hidden shadow-lg mb-4 transition duration-300">
                            <div className="flex flex-col items-center">
                                <img className="w-full h-auto max-w-lg object-cover" src={publicationImage} alt="Publication" />
                                <div className="p-4 text-center">
                                    <Typography variant="h6" color="blue-gray" className="font-bold mb-2">
                                        PUBLICATION
                                    </Typography>
                                    <Typography variant="body1" color="blue-gray" className="flex justify-center items-center mb-2 text-gray-600">
                                        <span className="text-gray-600 mr-2">👤 Nicolas</span> | <span className="text-gray-600 ml-2">📅 21 December 2023</span>
                                    </Typography>
                                    <Typography variant="h5" color="blue-gray" className="font-bold mb-2">
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
            </section>
            <div className="bg-blue-gray-50/50">
                <Footer />
            </div>
        </div>
    );
}

export default Actualities;
