import React from 'react';
import DataSecurity from '@/widgets/projects/DataSecurity.jsx';
import Digitalization from "@/widgets/projects/Digitalization.jsx";
import BigData from "@/widgets/projects/BigData.jsx";
import NLP from "@/widgets/projects/NLP.jsx";
import ChatSaas from "@/widgets/projects/ChatSaas.jsx";
import digitalizationImg from "../../public/img/digitalisation.webp";
import bigdataImg from "../../public/img/bigdata.webp";
import securityImg from "../../public/img/security.webp";
import nlpImg from "../../public/img/nlp.webp";
import chatImg from "../../public/img/chat.webp";

const projectsData = [
    {
        title: 'Digitalisation',
        img: digitalizationImg,
        desc: 'Business digitalization uses digital technologies to transform business operations, processes, and customer experiences. It uses digital tools and technologies to optimize workflows, improve efficiency, and enhance customer experiences.',
        details: Digitalization
    },
    {
        title: 'Big data processing',
        img: bigdataImg,
        desc: 'Our company specializes in developing cutting-edge big data analytics software solutions, empowering businesses to extract valuable insights from massive data sets and make data-driven decisions.',
        details: BigData
    },
    {
        title: 'Data security and data anonymization',
        img: securityImg,
        desc: 'Our company specializes in data anonymization services, utilizing state-of-the-art techniques and algorithms to protect individual privacy while allowing organizations to derive valuable insights from anonymized datasets, enabling compliant and ethical data analysis.',
        details: DataSecurity
    },
    {
        title: 'Natural language processing',
        img: nlpImg,
        desc: 'Our software solutions leverage Natural Language Processing expertise to analyze and interpret human language, empowering businesses to automate text-based processes, improve customer interactions, and gain valuable insights from textual data sources.',
        details: NLP
    },
    {
        title: 'Chat based SaaS',
        img: chatImg,
        desc: 'Dexla offers Chat-based SaaS services, enabling businesses to engage with their customers in real-time through interactive chat platforms, enhancing customer support, sales, and overall user experience.',
        details: ChatSaas
    }
];

export default projectsData;
