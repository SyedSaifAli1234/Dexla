import React, { useEffect, useRef, useState } from "react";
import { Typography, Button } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import publicationBack from "../../public/img/publicationBack.jpg";
import publicationImage from "../../public/img/publication.png";
import '../css/actualities.css';
import SmoothScrollbar from "smooth-scrollbar";

export function Actualities() {
    const scrollRef = useRef(null);
    const [publicationDetail, setPublicationDetail] = useState(false);

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
                        backgroundImage: `url(${publicationBack})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
            </section>
            {publicationDetail ? (
                <section className="relative bg-white py-8 px-4">
                    <div className="container max-w-4xl mx-auto text-left">
                        <button type="button"
                                className="mb-10 text-white bg-blue-gray-500 hover:bg-blue-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-gray-600 dark:hover:bg-blue-gray-700 dark:focus:ring-blue-gray-800"
                                onClick={() => setPublicationDetail(false)}>
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1M5.5 9L1 5l4.5-4"/>
                            </svg>
                            Retour
                        </button>


                        <Typography variant="h6" className="text-gray-600 mb-2">👤 Nicolas | 📅 21 December 2023</Typography>
                        <Typography variant="h4" className="font-bold mb-6">Comprendre le rôle essentiel d'un avocat dans le système juridique</Typography>
                        <Typography variant="body1" className="mb-4">
                            Dans le labyrinthe complexe du système juridique, un guide expérimenté peut faire toute la différence entre la confusion et la clarté, entre l'incertitude et la justice. Les avocats, en tant que défenseurs et interprètes du droit, jouent un rôle essentiel dans la préservation des droits individuels et le maintien de l'équité. Dans ce blog, nous explorerons en profondeur le rôle fondamental des avocats et leur impact crucial dans la société.
                        </Typography>
                        <div className="border-l-4 border-blue-500 pl-4 mb-4">
                            <Typography variant="h5" className="font-bold mb-2">La résolution des conflits n'est pas toujours une affaire de tribunal.</Typography>
                            <Typography variant="body1">Nicolas Soukatchoff</Typography>
                        </div>
                        <Typography variant="body1" className="mb-4">
                            Le rôle d'un avocat va bien au-delà de la simple représentation en justice. Ils sont les gardiens des droits, les conseillers éclairés, les défenseurs inébranlables de la justice. Dans un monde complexe où les lois et les réglementations évoluent constamment, l'expertise d'un avocat est une boussole essentielle pour ceux qui cherchent à naviguer dans les eaux tumultueuses du système juridique. Que ce soit pour résoudre des litiges, obtenir des conseils juridiques ou assurer la protection des droits, la présence d'un avocat est une assurance de justice et d'équité.
                        </Typography>
                        <Typography variant="body1" className="mb-4">
                            Partagez : <a href="#"><i className="fab fa-facebook"></i></a> <a href="#"><i className="fab fa-twitter"></i></a> <a href="#"><i className="fab fa-linkedin"></i></a>
                        </Typography>
                    </div>
                </section>
            ) : (
                <section className="relative bg-white py-8 px-4">
                    <div className="container max-w-sm mx-auto text-left">
                        <div className="px-4 py-6">
                            <div
                                className="card rounded overflow-hidden shadow-lg mb-4 transition duration-300"
                                onClick={() => {
                                    setPublicationDetail(true);
                                }}
                                style={{ cursor: "pointer" }}
                            >
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
            )}
            <div className="bg-blue-gray-50/50">
                <Footer />
            </div>
        </div>
    );
}

export default Actualities;
