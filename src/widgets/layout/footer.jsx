import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";

const year = new Date().getFullYear();

export function Footer({
                         title = "NS Avocat",
                         description = "Nicolas Soukatchoff",
                         contactEmail = "accueil@soukatchoff-avocat.com",
                         contactHours = "Lundi au vendredi : 9h - 18h",
                         contactPhone = "06 07 16 78 56",
                         legalNotice = "Mentions légales - RGPD"
                       }) {
  return (
      <footer className="relative bg-blue-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <Typography variant="h4" className="mb-4" style={{ textAlign: 'center' }}>
            {title}
          </Typography>
          <Typography className="font-normal mb-4" style={{ textAlign: 'center' }}>
            {description}
          </Typography>
          <Typography className="font-normal mb-4" style={{ textAlign: 'center' }}>
            {contactEmail}
          </Typography>
          <Typography className="font-normal mb-4" style={{ textAlign: 'center' }}>
            {contactHours}
          </Typography>
          <Typography className="font-normal mb-4" style={{ textAlign: 'center' }}>
            {contactPhone}
          </Typography>
          <hr className="my-6 border-gray-300" />
          <div className="text-center">
            <Typography
                variant="small"
                className="font-normal mb-2"
            >
              {legalNotice}
            </Typography>
            <Typography
                variant="small"
                className="font-normal"
            >
              © {year} {title}. All rights reserved.
            </Typography>
          </div>
        </div>
      </footer>
  );
}

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  contactEmail: PropTypes.string,
  contactHours: PropTypes.string,
  contactPhone: PropTypes.string,
  legalNotice: PropTypes.string,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
