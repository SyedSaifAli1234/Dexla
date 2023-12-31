import React, {useEffect} from "react";
import {Card, CardBody, CardHeader, IconButton, Typography,} from "@material-tailwind/react";
import {Footer, PageTitle} from "@/widgets/layout";
import {FeatureCard, TeamCard} from "@/widgets/cards";
import {contactData, featuresData, teamData} from "@/data";
import teamImg from '../../public/img/teamwork.jpeg';

export function Home() {

  useEffect(() => {
    import('@/pages/projects.jsx');
  },[]);

  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <video aria-hidden="true" muted className="absolute top-0 h-full w-full bg-cover bg-center object-cover" autoPlay loop playsInline>
          <source src="/video/video2.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Where AI makes Digitalization easy
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Business digitalization strategically utilizes advanced digital technologies to optimize operations, streamline processes, and enhance customer experiences, resulting in improved efficiency, productivity, and competitive advantage.
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
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Our Vision
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                We have set our sights on greatness in the AI landscape. We aspire to be at the forefront of
                innovation, driving transformative change through intelligent digital solutions. By combining the
                top methods available in the industry with our team's expertise, we aim to shape the future of
                technology and empower businesses across various sectors.
              </Typography>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src={teamImg}
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Commitment to Excellence
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    At Dexla Tech, we embody excellence and innovation with a dedicated team. Our client-centric approach and superior solutions position us as pioneers in the future of AI, forging strong partnerships based on quality, reliability, and customer satisfaction.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle heading="Our Services">
            We are a dynamic startup revolutionizing industries with AI. Our exceptional team of seasoned professionals, backed by advanced degrees and industry experience, positions us as a prominent player in the AI field.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-2">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-lg fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-blue-gray-50/50 py-24 px-4">
        <div className="container mx-auto">
          <PageTitle heading="Our Expertise">
            Dexla Tech specializes in AI-powered projects, offering expertise in Digitalization Strategies, Big Data Analysis, and Data Security. Our tailored solutions harness cutting-edge techniques and algorithms, unlocking unparalleled opportunities for organizations to optimize operations, gain valuable insights, and achieve competitive advantages. From streamlining processes to enhancing decision-making and improving customer experiences, we deliver tangible results through our AI-powered solutions.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
