import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Typography, Button, Card, CardBody, CardHeader } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { FeatureCard } from "@/widgets/cards";
import { featuresData } from "@/data";
import judge from '../../public/img/judge.webp';
import SmoothScrollbar from 'smooth-scrollbar';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer'; // Import useInView hook
import '../css/home.css';

const texts = [
  ["Droit des", "sociétés", "Plus de 10 ans d'expérience"],
  ["Droit des", "contrats", "à destination des entrepreneurs individuels, TPE/PME, start-up"],
  ["Droit des", "affaires", "Sens du relationnel - Anglais courant"]
];

const animationDuration = 0.8; // Duration in seconds
const animationInterval = 4000; // Interval in milliseconds for text change

export function Home() {
  const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateOut, setAnimateOut] = useState(false); // State to trigger fade out animation
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  // useInView hook to detect when the component is in view
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // Trigger animation when 50% of the component is in view
  });

  // useInView hook for the section you want to animate
  const { ref: animateRef, inView: animateInView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // Trigger animation when 50% of the component is in view
  });

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

    const interval = setInterval(() => {
      setAnimateOut(true); // Trigger fade out animation
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setAnimateOut(false); // Reset animation state after changing text
      }, animationDuration * 1000);
    }, animationInterval);

    initializeScrollbar(); // Initialize Smooth Scrollbar

    return () => {
      clearInterval(interval); // Clear interval on component unmount
      if (scrollbarInstance) {
        scrollbarInstance.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (textInView) {
      controls.start('visible');
    }
  }, [controls, textInView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: animationDuration, ease: 'easeInOut' } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { delay: 0.8, duration: animationDuration, ease: 'easeInOut' } },
  };

  return (
      <div data-scrollbar ref={scrollRef}>
        <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
          <video aria-hidden="true" muted className="absolute top-0 h-full w-full bg-cover bg-center object-cover" autoPlay loop playsInline>
            <source src="/video/video3.mp4" type="video/mp4" />
          </video>
          <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
          <motion.div className="max-w-8xl container relative mx-auto" ref={textRef} variants={cardVariants} initial="hidden" animate={controls}>
            <div className="flex flex-wrap items-center">
              <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                <Typography variant="h1" color="white" className="mb-6 font-black text-6xl">
                  Droit des
                </Typography>
                <Typography variant="h1" color="gray" className={`mb-6 font-black text-6xl ${animateOut ? 'typography-animation' : 'typography-animation-show'}`}>
                  {texts[currentIndex][1]}
                </Typography>
                <Typography variant="lead" color="white" className={`opacity-80 text-xl ${animateOut ? 'typography-animation' : 'typography-animation-show'}`}>
                  {texts[currentIndex][2]}
                </Typography>
                <div className="mt-8 flex justify-center space-x-4">
                  <Button className="bg-blue-gray-900 text-white hover:bg-blue-gray-800 rounded-none" size="large" onClick={() => navigate('/expertises')}>
                    EN SAVOIR PLUS
                  </Button>
                  <Button className="bg-transparent border border-blue-gray-900 text-white hover:bg-blue-gray-900 hover:text-white rounded-none" size="large" onClick={() => navigate('/contact')}>
                    Prendre rendez-vous
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
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
            <motion.div ref={animateRef} variants={cardVariants} initial="hidden" animate={animateInView ? 'visible' : 'hidden'} className="mt-32 flex flex-wrap justify-center">
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
                <div variants={buttonVariants}>
                  <Button className="bg-blue-gray-900 text-white hover:bg-blue-gray-800 rounded-none" size="lg" onClick={() => navigate('/expertises')}>
                    EN SAVOIR PLUS →
                  </Button>
                </div>
              </div>
              <motion.div variants={cardVariants} className="mx-auto mt-35 flex w-full px-4 md:w-4/12 lg:mt-0">
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
              </motion.div>
            </motion.div>
          </div>
        </section>
        <Footer />
      </div>
  );
}

export default Home;
