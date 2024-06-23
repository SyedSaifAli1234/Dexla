import React from 'react';
import contract from "../../public/img/contract.jpg";
import corporateLaw from "../../public/img/corporateLaw.jpg";
import paperWork from "../../public/img/paperWork.jpg";
import legalRules from "../../public/img/legalRules.jpg";

const projectsData = [
    {
        title: 'Droit des sociétés',
        img: corporateLaw,
        desc: 'Constitution, augmentation de capital, émission de valeurs mobilières : BSA, BSPCE, OC, actions gratuites, transformation de société, fusion, TUP, dissolution, liquidation.'
    },
    {
        title: 'Contrat',
        img: contract,
        desc: 'Baux, cession de fonds de commerce, cession de titres, GAP, pacte d’associés, mandat, contrat de fourniture, apport d’affaires, partenariat, CGV, accord de confidentialité, lettre d\'intention.'
    },
    {
        title: 'Vie des sociétés',
        img: paperWork,
        desc: 'Assemblées, approbation des comptes, formalités administratives.'
    },
    {
        title: 'Structuration des professions libérales',
        img: legalRules,
        desc: 'Évaluation de la patientèle, owner-buy out, création de SEL, SPFPL, rapport avec les ordres professionnels (médecins, dentistes, pharmaciens, etc.).'
    }
];

export default projectsData;
