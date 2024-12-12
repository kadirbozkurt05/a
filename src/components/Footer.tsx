import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import FooterLogo from './footer/FooterLogo';
import QuickLinks from './footer/QuickLinks';
import GradeResources from './footer/GradeResources';
import ContactInfo from './footer/ContactInfo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2C3E50] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FooterLogo />
          <QuickLinks />
          <GradeResources />
          <ContactInfo />
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Esma Öğretmen. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;