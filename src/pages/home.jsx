import React, { useEffect, useRef } from "react";
import { Card, CardBody, CardHeader, Typography, Button } from "@material-tailwind/react";
import { Footer, PageTitle } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { contactData, featuresData, teamData } from "@/data";
import judge from '../../public/img/judge.jpg';
import locomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';

export function Home() {
  const scrollRef = useRef(null);

  useEffect(() => {
    import('@/pages/projects.jsx');

    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.1,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
      <div data-scroll-container ref={scrollRef}>
        <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
          <video aria-hidden="true" muted className="absolute top-0 h-full w-full bg-cover bg-center object-cover" autoPlay loop playsInline>
            <source src="/video/video3.mp4" type="video/mp4" />
          </video>
          <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
          <div className="max-w-8xl container relative mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                <Typography variant="h1" color="white" className="mb-6 font-black">
                  Droit des
                </Typography>
                <Typography variant="h1" color="white" className="mb-6 font-black">
                  des sociétés
                </Typography>
                <Typography variant="lead" color="white" className="opacity-80">
                  Plus de 10 ans d'expérience
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
              {featuresData.map(({ color, title, icon, description }) => (
                  <FeatureCard
                      key={title}
                      color={color}
                      title={title}
                      icon={React.createElement(icon, {
                        className: "w-5 h-5 text-white",
                      })}
                      description={description}
                  />
              ))}
            </div>
            <div className="mt-32 flex flex-wrap justify-center">
              <div className="max-w-lg px-4 md:w-1/2 text-left">
                <Typography variant="h3" className="mb-6 text-4xl font-extrabold text-blue-gray-900">
                  Ma présentation
                </Typography>
                <Typography variant="h3" className="mb-6 text-4xl font-extrabold text-blue-gray-900">
                  <span className="text-5xl text-blue-gray-600">Nicolas Soukatchoff</span>
                </Typography>
                <Typography variant="h3" className="mb-6 text-4xl font-extrabold text-blue-gray-900">
                  Mon expérience au service de mes clients.
                </Typography>
                <Typography className="mb-12 text-lg text-blue-gray-600">
                  Fort de plus de 10 ans de pratique juridique, j'ai exercé dans plusieurs cabinets prestigieux où j'ai pu acquérir une expertise approfondie en droit des sociétés, des contrats et des affaires à destination des entrepreneurs individuels, TPE/PME et start-ups. Outre le français, je suis également compétent en anglais, ce qui me permet de représenter des clients dans des contextes internationaux.
                </Typography>
                <Button className="bg-blue-gray-900 text-white hover:bg-blue-gray-800" size="lg">
                  En savoir plus
                </Button>
              </div>
              <div className="mx-auto mt 35 flex w-full px-4 md:w-4/12 lg:mt-0">
                <Card className="shadow-lg shadow-gray-500/10">
                  <CardHeader className="relative h-56">
                    <img alt="Card Image" src={judge} className="h-full w-full object-cover" />
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-3 font-bold">
                      Engagement pour l'Excellence
                    </Typography>
                    <Typography className="font-normal text-blue-gray-500">
                      Nous incarnons l'excellence et l'innovation avec une équipe dévouée. Notre approche centrée sur le client et nos solutions supérieures nous positionnent comme des leaders dans l'avenir de notre domaine, forgeant des partenariats solides basés sur la qualité, la fiabilité et la satisfaction client.
                    </Typography>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
  );
}

export default Home;