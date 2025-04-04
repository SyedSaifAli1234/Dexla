import React from 'react';
import solutionsImg from "../../public/img/solutions.jpg";
import man from "../../public/img/man.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ComposedChart,
  Line,
  Legend
} from 'recharts';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
export function Solutions() {
  const solution = {
    title: "Dexla Law",
    tagline: "Transforming the Future, AI in Legal Tech",
    description:
      "Dexla Law is a transformative legal tech platform that streamlines, automates, and audits legal document workflows intelligently. Our solution leverages AI and advanced NLP to draft, review, and ensure compliance of legal documents, reducing manual effort and minimizing errors.",
    features: [
      {
        icon: "📄",
        title: "AI-Assisted Drafting",
        detail:
          "Auto-generates contracts and legal documents based on user input and templates."
      },
      {
        icon: "🔍",
        title: "Intelligent Review",
        detail:
          "Identifies risks, inconsistencies, and missing clauses using NLP-based document analysis."
      },
      {
        icon: "✅",
        title: "Built-In Compliance",
        detail:
          "Checks documents against jurisdiction-specific rules and regulatory standards."
      },
      {
        icon: "🌐",
        title: "One Interface for All",
        detail:
          "A single, accessible SaaS platform for legal teams, clients, and compliance officers."
      }
    ],
    benefits:
      "AI-powered drafting can cut document comprehension time by up to 300% compared to traditional methods. Our platform's advanced NLP extracts key entities, reduces human errors, and ensures adherence to regulations like GDPR—minimizing the risk of legal disputes and regulatory penalties."
  };

  // Data for Market Size Chart
  const marketSizeData = [
    { year: '2024', value: 1.45 },
    { year: '2025', value: 1.7 },
    { year: '2026', value: 2.0 },
    { year: '2027', value: 2.3 },
    { year: '2028', value: 2.7 },
    { year: '2029', value: 3.2 },
    { year: '2030', value: 3.78 }
  ];

  // Data for Revenue Projections
  const revenueData = [
    { year: '2025', min: 8, avg: 10, max: 15 },
    { year: '2026', min: 15, avg: 20, max: 30 },
    { year: '2027', min: 20, avg: 30, max: 45 },
    { year: '2028', min: 30, avg: 45, max: 85 }
  ];

  // First, add this data near your other chart data
  const investmentTrendsData = [
    { year: '2015', funding: 10, rounds: 5 },
    { year: '2016', funding: 25, rounds: 8 },
    { year: '2017', funding: 28, rounds: 15 },
    { year: '2018', funding: 65, rounds: 18 },
    { year: '2019', funding: 175, rounds: 34 },
    { year: '2020', funding: 70, rounds: 10 },
    { year: '2021', funding: 275, rounds: 28 },
    { year: '2022', funding: 45, rounds: 15 },
    { year: '2023', funding: 80, rounds: 25 },
    { year: '2024', funding: 239, rounds: 32 }
  ];

  // Add this data near your other chart data
  const globalRevenueData = [
    { year: '2025', min: 8, avg: 10, max: 15 },
    { year: '2026', min: 15, avg: 20, max: 30 },
    { year: '2027', min: 20, avg: 30, max: 45 },
    { year: '2028', min: 30, avg: 45, max: 85 }
  ];

  const domesticRevenueData = [
    { year: '2025', value: 0.24 },
    { year: '2026', value: 1.4 },
    { year: '2027', value: 3.4 },
    { year: '2028', value: 8.0 }
  ];

  // Add this component
  const AnimatedText = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
      <div className="relative py-20 text-center px-4" ref={ref}>
        <motion.div
          className="absolute left-1/2 -top-12 w-px h-24 bg-gradient-to-b from-transparent to-blue-300"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={isInView ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        
        <div className="overflow-hidden w-full">
          <motion.div
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : { y: "100%" }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="whitespace-normal md:whitespace-nowrap"
          >
            <motion.span
              className="text-4xl md:text-5xl lg:text-7xl font-light text-blue-500 inline-block"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              DexlaLaw was born
            </motion.span>
          </motion.div>
        </div>

        {/* Underline */}
        <motion.div
          className="h-px bg-blue-300 w-[90%] md:max-w-4xl mx-auto mt-4"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        />

        {/* Background effects */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <div className="absolute right-0 top-0 w-48 h-48">
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-transparent opacity-20 rounded-full blur-xl" />
          </div>
          <div className="absolute left-0 bottom-0 w-32 h-32">
            <div className="w-full h-full bg-gradient-to-tr from-blue-400 to-transparent opacity-20 rounded-full blur-xl" />
          </div>
        </motion.div>
      </div>
    );
  };

  return (
    <>
      <section className="relative block h-[50vh]">
          <div
              className="bg-profile-background absolute top-0 h-full w-full"
              style={{
                  backgroundImage: `url(${solutionsImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
              }}
          />
          <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 px-4">
        <div className="container mx-auto">
          <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="my-8 text-center">
                <h2 className="mb-2 font-bold text-blue-gray-500 text-5xl">
                  {solution.title}
                </h2>
                <p className="text-blue-gray-500 text-lg">
                  {solution.tagline}
                </p>
              </div>
              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                {/* Hero Description */}
                <div className="relative max-w-4xl mx-auto mb-24">
                  <p className="text-xl text-blue-gray-600 leading-relaxed text-center relative z-10">
                    {solution.description}
                  </p>
                </div>

                {/* Story Section */}
                <div className="max-w-6xl mx-auto mb-32">
                  {/* Title with modern design */}
                  <div className="text-center mb-20">
                    <p className="text-blue-500 font-medium mb-4">OUR STORY</p>
                    <h2 className="text-4xl font-light text-blue-gray-700 mb-3">Where It All Started</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-blue-500 mx-auto"></div>
                  </div>

                  {/* Story Content with Image */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Left Column - Image */}
                    <div>
                      <img src="/img/lawBooks.png" alt="Law Books"/>
                    </div>
                    {/* Right Column - Text */}
                    <div className="space-y-8">
                      <p className="text-xl font-light text-blue-gray-600 leading-relaxed italic">
                        "While working across legal, tech, and research fields, we noticed something surprising:"
                      </p>
                      <div className="py-6">
                        <p className="text-3xl font-light text-blue-500 leading-tight">
                          AI wasn't being used in legal document workflows.
                        </p>
                      </div>
                      <p className="text-lg text-blue-gray-600">
                        Other industries were innovating fast... but legal professionals were still stuck with repetitive, manual work.
                      </p>
                    </div>
                  </div>

                  {/* The Idea Section */}
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-12 mb-20">
                    <div className="max-w-3xl mx-auto text-center">
                      <h3 className="text-2xl font-medium text-blue-gray-800 mb-6">
                        That sparked the idea:
                      </h3>
                      <p className="text-xl text-blue-gray-600 leading-relaxed">
                        What if AI could support the way legal documents are analysed, drafted, and managed, without compromising on accuracy or compliance?
                      </p>
                    </div>
                  </div>

                  {/* Birth of DexlaLaw */}
                  <div className="text-center relative">
                    <AnimatedText />
                  </div>
                </div>

                {/* Problems We Address Section */}
                <div className="bg-navy-900 text-white py-20 relative overflow-hidden">
                  {/* Decorative dots background - similar to the image */}
                  <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
                    <div className="relative w-full h-full">
                      {/* Add a pattern of dots using CSS grid or background image */}
                    </div>
                  </div>

                  <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-orange-400 mb-12">Problems We Address</h2>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                      {/* Time Consumption */}
                      <div className="bg-orange-400 bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                        <div className="flex items-start gap-4">
                          <div className="text-3xl">⌛</div>
                          <div>
                          <h3 className="text-xl font-bold mb-2 text-black">Time Consumption</h3>
                          <p className="text-black">Manual drafting, reviewing, and managing legal documents are slow and hinder efficiency in legal workflows</p>
                          </div>
                        </div>
                      </div>

                      {/* Prone to Errors */}
                      <div className="bg-orange-400 bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                        <div className="flex items-start gap-4">
                          <div className="text-3xl">⚠️</div>
                          <div>
                          <h3 className="text-xl font-bold mb-2 text-black">Prone to Errors</h3>
                          <p className="text-black">Human errors during document handling and compliance checks can result in costly legal and financial consequences</p>
                          </div>
                        </div>
                      </div>

                      {/* Inefficient Workflows */}
                      <div className="bg-orange-400 bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                        <div className="flex items-start gap-4">
                          <div className="text-3xl">⚙️</div>
                          <div>
                          <h3 className="text-xl font-bold mb-2 text-black">Inefficient Workflows</h3>
                          <p className="text-black">Traditional methods involve repetitive tasks and administrative overhead, slowing down productivity and decision-making</p>
                          </div>
                        </div>
                      </div>

                      {/* Complex Compliance */}
                      <div className="bg-orange-400 bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                        <div className="flex items-start gap-4">
                          <div className="text-3xl">🔄</div>
                          <div>
                          <h3 className="text-xl font-bold mb-2 text-black">Complex Compliance</h3>
                          <p className="text-black">Navigating evolving regulations and ensuring adherence is challenging and resource-intensive</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Statistics Box */}
                    <div className="bg-blue-900 bg-opacity-50 rounded-xl p-8 max-w-3xl mx-auto">
                      <p className="text-lg leading-relaxed">
                        <span className="text-2xl font-bold text-orange-400">60% </span>
                        of legal professionals spend their time on administrative tasks, detracting from strategic work.
                        <span className="text-2xl font-bold text-orange-400"> 90% </span>
                        report errors in manual contract reviews, highlighting the need for reliable systems. With
                        <span className="text-2xl font-bold text-orange-400"> 70% </span>
                        of firms struggling with compliance and legal documents increasing
                        <span className="text-2xl font-bold text-orange-400"> 30% annually</span>,
                        scalable and efficient solutions are essential.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ChatGPT Case Study */}
                <div className="bg-navy-800 text-black py-20">
                  <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-orange-400 mb-8">The ChatGPT Case Mishap: When AI Met the Courtroom</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Incident:</h3>
                          <p>In June 2023, attorney Steven A. Schwartz submitted a legal brief in a lawsuit against Avianca, relying on ChatGPT for research. The brief cited six fabricated cases, which Schwartz failed to verify.</p>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Impact:</h3>
                          <p>The presiding judge, P. Kevin Castel, condemned the "bogus judicial decisions," tarnishing Schwartz's professional reputation and raising concerns about AI's reliability in legal work.</p>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Solution Gap:</h3>
                          <p>A lack of proper verification processes and overrelianceon a generic AI tool led to the submission of unvetted, inaccurate information.</p>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Lesson:</h3>
                          <p>Legal professionals should use AI tools specifically trained for legal contexts, as generic AI models lack the expertise and precision required for accurate legal research.</p>
                        </div>
                      </div>
                      <img src={man} alt="Legal Case Cutout" className="hidden md:block w-3/4 object-contain" />
                    </div>
                  </div>
                </div>

                {/* Original Features Section continues here */}
                <div className="max-w-6xl mx-auto mb-32">
                  <h2 className="text-4xl font-bold text-orange-400 mb-8">Our Solution: Dexla Law</h2>
                  <p className="text-lg leading-relaxed mb-6">
                    A single platform that streamlines, automates, and audits legal document workflows intelligently.
                  </p>
                  <h3 className="text-2xl font-semibold text-blue-gray-800 mb-4">⚙ What Dexla Law Does</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {solution.features.map((feature, index) => (
                      <div key={index} 
                           className="group p-8 rounded-xl bg-white hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                        <div className="flex items-start space-x-6">
                          <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                            <span className="text-2xl">{feature.icon}</span>
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-blue-gray-800 mb-3">{feature.title}</h3>
                            <p className="text-blue-gray-600 leading-relaxed">{feature.detail}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* New Solution Section with Timeline */}
                <div className="bg-navy-900 text-grey py-16 px-4 rounded-xl relative overflow-hidden">
                  {/* Decorative dots pattern */}
                  <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 bg-dots"></div>
                  
                  <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-orange-400 mb-8">Our Solution</h2>
                    
                    <div className="mb-12">
                      <p className="text-xl leading-relaxed">
                        We offer a transformative legal tech platform that streamlines document drafting, review, and 
                        compliance using AI and NLP. Our solution automates routine tasks, ensures data security, and 
                        integrates seamlessly with existing systems, enhancing efficiency and reducing risks for legal firms.
                      </p>
                    </div>

                    {/* Timeline Features */}
                    <div className="relative">
                      {/* Timeline line */}
                      
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="relative">
                          <div className="bg-orange-400 text-navy-900 font-bold text-xl w-12 h-12 rounded-lg flex items-center justify-center mb-6 mx-auto relative z-10">01</div>
                          <h3 className="text-xl font-bold mb-4">Automated Document Drafting</h3>
                          <p className="text-gray-500">
                            AI-powered drafting of legal documents, such as contracts and compliance reports, 
                            <span className="text-orange-400 font-semibold"> cuts document comprehension time by up to 300% </span>
                            compared to traditional methods, improving efficiency in handling large volumes quickly.
                          </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="relative">
                          <div className="bg-orange-400 text-navy-900 font-bold text-xl w-12 h-12 rounded-lg flex items-center justify-center mb-6 mx-auto relative z-10">02</div>
                          <h3 className="text-xl font-bold mb-4">Intelligent Document Analysis</h3>
                          <p className="text-gray-500">
                            Our Advanced NLP extracts key entities, identifies risks, and highlights discrepancies in legal documents. 
                            The AI model consistently delivers highly accurate analysis, reducing human errors and matching or exceeding 
                            the performance of legal professionals.
                          </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="relative">
                          <div className="bg-orange-400 text-navy-900 font-bold text-xl w-12 h-12 rounded-lg flex items-center justify-center mb-6 mx-auto relative z-10">03</div>
                          <h3 className="text-xl font-bold mb-4">Compliance and Risk Management</h3>
                          <p className="text-gray-500">
                            Our automated compliance checks ensure adherence to regulations like GDPR and local legal standards, 
                            ensuring your legal documents comply with required regulations and minimizing the risk of legal disputes 
                            and regulatory penalties.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features Section */}
                <div className="max-w-6xl mx-auto mb-32">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                      {
                        title: "Comprehensive All-in-One Solution",
                        detail: "DexlaLaw combines drafting, analysis, compliance, and risk management into one platform"
                      },
                      {
                        title: "Advanced AI and Transparency",
                        detail: "DexlaLaw uses advanced NLP and AI transparency to ensure accuracy and reliability"
                      },
                      {
                        title: "Localized Compliance",
                        detail: "Tailored for European legal systems, meeting GDPR requirements"
                      },
                      {
                        title: "Cost-Effective Solution",
                        detail: "Affordable legal tech for SMEs while ensuring market expansion"
                      }
                    ].map((advantage, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-orange-50 hover:bg-orange-100 transition-all duration-300 p-8 rounded-2xl shadow-lg hover:shadow-xl"
                      >
                        <div className="text-center">
                          <h4 className="text-xl font-bold text-gray-900 mb-4">
                            {advantage.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {advantage.detail}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Market Opportunity Section with Charts */}
                <div className="bg-navy-900 text-black py-20">
                  <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-orange-400 mb-12">Market Opportunity</h2>
                    
                    {/* Market Size and Growth */}
                    <div className="mb-16">
                      <h3 className="text-2xl font-semibold mb-6">Market Size and Growth</h3>
                      <p className="text-lg mb-8">
                        The global legal AI market was valued at
                        <span className="text-orange-400 font-bold"> USD 1.45 billion in 2024 </span>
                        and is anticipated to grow significantly at a compound annual growth rate (CAGR) of 17.3% from 2025 to 2030. By 2030, the market is projected to reach USD 3.78 billion, driven by the growing adoption of artificial intelligence in legal operations to enhance efficiency, reduce costs, and improve accuracy.
                      </p>

                      {/* Market Size Chart */}
                      <div className="h-60 w-full md:w-[90%] md:h-52 mx-auto mb-16">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={marketSizeData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" fill="#f97316" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>

                      {/* NLP Section */}
                      <div className="mb-12">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="text-3xl">🤖</div>
                          <h3 className="text-2xl font-semibold">Natural Language Processing (NLP)</h3>
                        </div>
                        <p className="text-lg">
                          The Natural Language Processing (NLP) segment is projected to grow at a 17% CAGR from 2025 to 2030. Key drivers include automating repetitive tasks, reducing human errors in document analysis, and accelerating legal research and document generation, making NLP essential for modern legal practices.
                        </p>
                      </div>

                      {/* Regional Market Dynamics */}
                      <div className="bg-orange-400 bg-opacity-20 rounded-xl p-8">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="text-3xl">🌍</div>
                          <h3 className="text-2xl font-semibold">Regional Market Dynamics</h3>
                        </div>
                        <p className="text-lg">
                          In 2024, North America led the global legal AI market with over 46% of the revenue share, driven by efficiency, cost-effectiveness, and advancements in AI and NLP. Europe's legal AI market is projected to grow at a 17% CAGR from 2025 to 2030, fueled by advancements in AI, machine learning, and NLP, and the need to optimize workflows for regulatory compliance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Investment Stats Section */}
                <div className="max-w-6xl mx-auto mb-20">
                  <h2 className="text-3xl font-bold text-center mb-12">Investment Stats</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-blue-50 rounded-xl p-8 text-center">
                      <div className="text-4xl font-bold text-blue-600 mb-2">350</div>
                      <div className="text-gray-600">Legal AI Companies in Europe</div>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-8 text-center">
                      <div className="text-4xl font-bold text-orange-600 mb-2">$1.01Bn</div>
                      <div className="text-gray-600">Total funding raised to date</div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-8 text-center">
                      <div className="text-4xl font-bold text-blue-600 mb-2">$239Mn</div>
                      <div className="text-gray-600">Funding raised in 2024</div>
                    </div>
                  </div>
                  {/* Added Investment Stats Graph */}
                  <div className="bg-navy-900 p-4 md:p-8 rounded-xl mt-12">
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-6 text-center">Legal AI Investment Trends</h3>
                    <div className="h-[300px] md:h-[400px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart
                          data={investmentTrendsData}
                          margin={{
                            top: 20,
                            right: 20,
                            left: 0,
                            bottom: 20,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                          <XAxis 
                            dataKey="year" 
                            stroke="#000"
                            fontSize={12}
                          />
                          <YAxis 
                            yAxisId="left"
                            orientation="left"
                            stroke="#000"
                            domain={[0, 300]}
                            fontSize={12}
                            width={40}
                          />
                          <YAxis 
                            yAxisId="right"
                            orientation="right"
                            stroke="#000"
                            domain={[0, 40]}
                            fontSize={12}
                            width={40}
                          />
                          <Tooltip 
                            contentStyle={{ backgroundColor: '#1e293b', border: 'none', color: '#fff' }}
                            labelStyle={{ color: '#fff' }}
                          />
                          <Legend 
                            verticalAlign="top" 
                            height={36}
                            wrapperStyle={{ color: '#fff', fontSize: '12px' }}
                          />
                          <Bar 
                            yAxisId="left"
                            dataKey="funding" 
                            fill="#f97316" 
                            name="Total Funding (USD Mn)"
                            barSize={20}
                          />
                          <Line 
                            yAxisId="right"
                            type="monotone" 
                            dataKey="rounds" 
                            stroke="#7dd3fc"
                            strokeWidth={2}
                            name="Funding Rounds"
                            dot={{ fill: '#7dd3fc', stroke: '#7dd3fc', strokeWidth: 2 }}
                          />
                        </ComposedChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

                {/* Why Us Section */}
                <div className="bg-navy-900 py-20 px-4 mb-20">
                  <div className="container mx-auto">
                    <h2 className="text-5xl font-bold text-orange-400 mb-16">Why Us?</h2>

                    {/* Description Text */}
                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="text-black">
                        <p className="text-lg leading-relaxed">
                          By targeting major markets in Europe and North America and considering the projected global market size of UD$35.62 billion, Dexla aims to capture a conservative 0.25% of the global market. This equates to projected international revenue of approximately UD$ 85 million within the same timeframe.
                        </p>
                      </div>
                      <div className="text-black">
                        <p className="text-lg leading-relaxed">
                          Dexla targets to capture a very conservative share of the Austrian legal tech market, the domestic revenue is projected to reach approximately €8 million within the first three years.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Benefits Section */}
                <div className="max-w-5xl mx-auto mb-20">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-12 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-10 -mr-32 -mt-32"></div>
                    <div className="relative z-10">
                      <h3 className="text-2xl font-semibold mb-6">Key Benefits</h3>
                      <p className="text-lg leading-relaxed opacity-90">{solution.benefits}</p>
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mb-12">
                  <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-10 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
                    Contact Us for a Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <footer className="py-6">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>© 2025 Dexla Law. All rights reserved.</p>
            <p className="mt-2">info@dexla.at | www.dexla.at</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Solutions;