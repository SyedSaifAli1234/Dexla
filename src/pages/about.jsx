import {Typography,} from "@material-tailwind/react";
import {Footer} from "@/widgets/layout";
import aboutUs from "../../public/img/about.jpg";

export function About() {
    return (
        <>
            <section className="relative block h-[50vh]">
                <div
                    className="bg-profile-background absolute top-0 h-full w-full"
                    style={{
                        backgroundImage: `url(${aboutUs})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center"/>
            </section>
            <section className="relative bg-blue-gray-50/50 py-16 px-4">
                <div className="container mx-auto">
                    <div
                        className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
                        <div className="px-6">
                            <div className="my-8 text-center">
                                <Typography variant="h2" color="blue-gray"
                                            className="mb-2 font-normal text-blue-gray-500">
                                    About us
                                </Typography>
                            </div>
                            <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                                <div className="flex flex-wrap justify-center p-5">
                                    <Typography variant="lead" color="blue-gray" className="opacity-80 mb-4"
                                                style={{textAlign: 'justify'}}>
                                        At Dexla Tech, we specialise in a range of projects that leverage the power of AI. Our core
                                        competencies include Digitalization Strategies, Big Data Analysis, Data Security, and the
                                        development of AI-based solutions such as Software-as-a-Service (SaaS) offerings. We create
                                        tailored solutions to address complex business challenges by utilising state-of-the-art algorithms
                                        and cutting-edge techniques. We firmly believe that Artificial Intelligence has the potential to
                                        unlock unprecedented opportunities for organisations. By tapping into the immense capabilities
                                        of AI, we enable our clients to optimise their operations, gain invaluable insights from their data,
                                        and achieve competitive advantages in their respective industries. Whether it's streamlining
                                        processes, enhancing decision-making, or improving customer experiences, we are committed to
                                        delivering tangible results through our AI-powered solutions. Digitalization is essential for business success due to technological
                                        advancements and evolving customer expectations. It involves using digital tools
                                        and technologies to optimize workflows, enhance customer experiences, and gain a
                                        competitive advantage. It can also improve financial performance by reducing
                                        costs, increasing revenue, and creating new opportunities.
                                    </Typography>
                                    <Typography variant="h4" color="blue-gray"
                                                className="mt-5 font-normal text-blue-gray-700"
                                                style={{textAlign: 'left'}}>
                                        <u>How Business Digitalization Can Benefit Your Organization</u>
                                    </Typography>
                                    <Typography variant="lead" color="blue-gray" className="opacity-80 p-5"
                                                style={{textAlign: 'justify'}}>
                                        <ol style={{listStyle: 'block'}}>
                                            <li><b>Improved Efficiency:</b> Businesses can work more efficiently and
                                                make better decisions by automating repetitive tasks and leveraging data
                                                analytics. This can reduce costs and increase profitability.
                                            </li>
                                            <li><b>Enhanced Customer Experience:</b> Digitalization can help businesses
                                                offer personalized and convenient services to their customers, improving
                                                satisfaction and loyalty.
                                            </li>
                                            <li><b>Increased Agility:</b> By embracing digital transformation,
                                                businesses can become more agile and responsive to changes in the
                                                market. This can help companies to stay ahead of the competition and
                                                adapt quickly to new challenges.
                                            </li>
                                            <li><b>Improved Data Insights:</b> Digitalization can help businesses gather
                                                and analyze large amounts of data, providing valuable insights into
                                                customer behavior, market trends, and other critical business metrics.
                                            </li>
                                            <li><b>New Revenue Opportunities:</b> Digitalization can also open up new
                                                revenue streams for businesses. By leveraging the latest technologies
                                                and tools, companies can develop innovative products and services that
                                                meet customers' changing needs.
                                            </li>
                                        </ol>
                                    </Typography>
                                    <Typography variant="h4" color="blue-gray"
                                                className="mt-2 font-normal text-blue-gray-700"
                                                style={{textAlign: 'left'}}>
                                        <u>How We Implement Business Digitalization</u>
                                    </Typography>
                                    <Typography variant="lead" color="blue-gray" className="opacity-80 p-5"
                                                style={{textAlign: 'justify'}}>
                                        <ol style={{listStyle: 'block'}}>
                                            <li><b>Conduct a Digital Assessment:</b> We assess our digital capabilities
                                                and identify areas for improvement, such as our website, social media
                                                presence, and internal workflows.
                                            </li>
                                            <li><b>Define Our Digital Strategy:</b> We clearly define our digitalization
                                                goals, establish timelines, and allocate necessary resources to
                                                implement our digital strategy effectively.
                                            </li>
                                            <li><b>Invest in Digital Technologies:</b> We allocate resources to invest
                                                in and adopt digital technologies and tools, such as cloud-based
                                                software, IoT devices, and data analytics tools.
                                            </li>
                                            <li><b>Train Our Employees:</b> We ensure a successful digital
                                                transformation by investing in employee training and development,
                                                enabling them to use digital tools and technologies effectively.
                                            </li>
                                            <li><b>Monitor and Adapt:</b> We continuously monitor our digitalization
                                                efforts, analyze data, gather feedback, and make necessary adjustments
                                                to our digital system over time.
                                            </li>
                                        </ol>
                                    </Typography>
                                    <Typography variant="h4" color="blue-gray"
                                                className="mt-2 font-normal text-blue-gray-700"
                                                style={{textAlign: 'left'}}>
                                        <u>How We Measure the Success of Our Digitalization Efforts</u>
                                    </Typography>
                                    <Typography variant="lead" color="blue-gray" className="opacity-80 p-5"
                                                style={{textAlign: 'justify'}}>
                                        <ol style={{listStyle: 'block'}}>
                                            <li><b>Return on Investment (ROI):</b> This is one of the most critical
                                                metrics for measuring the success of our digitalization projects. We
                                                measure the financial recovery we're getting on our investments in
                                                digital technologies and tools.
                                            </li>
                                            <li><b>Customer Satisfaction:</b> We use customer satisfaction as an
                                                excellent way to track the success of our digitalization efforts, as
                                                digitalization can help improve the customer experience.
                                            </li>
                                            <li><b>Employee Productivity:</b> We measure employee productivity and
                                                efficiency to track the success of our digitalization initiatives, as
                                                digitalization can help improve employee productivity. Metrics like
                                                time-to-task completion and error rates can be used for measurement.
                                            </li>
                                            <li><b>Website Traffic and Engagement:</b> If we're using digital
                                                technologies to enhance our online presence, metrics like website
                                                traffic and engagement serve as a great way to measure the success of
                                                our efforts.
                                            </li>
                                            <li><b>Data Analytics:</b> We leverage data analytics to track various
                                                metrics related to our digitalization efforts, including customer
                                                behavior, market trends, and other critical business metrics.
                                            </li>
                                        </ol>
                                    </Typography>
                                    <Typography variant="lead" color="blue-gray" className="opacity-80 mt-8 mb-2"
                                                style={{textAlign: 'justify'}}>
                                        Business digitalization is a fundamental shift in how organizations operate and
                                        compete in the digital age. It improves efficiency, enhances customer
                                        experiences, and creates a competitive advantage. At Dexla, we help businesses
                                        navigate and implement effective digital strategies for success.
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bg-blue-gray-50/50">
                <Footer/>
            </div>
        </>
    );
}

export default About;
