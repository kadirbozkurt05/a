import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo: React.FC = () => {
  const contactDetails = [
    { icon: Mail, text: 'iletisim@esmaogretmen.com' },
    { icon: Phone, text: '+90 (555) 123 45 67' },
    { icon: MapPin, text: 'İstanbul, Türkiye' }
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">İletişim</h3>
      <ul className="space-y-2">
        {contactDetails.map((detail, index) => (
          <li key={index} className="flex items-center space-x-2 text-gray-300">
            <detail.icon className="h-5 w-5" />
            <span>{detail.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactInfo;