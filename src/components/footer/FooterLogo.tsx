import React from 'react';

const FooterLogo: React.FC = () => {
  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <img 
          src="https://i.ibb.co/pPNXtGp/logo-black.png" 
          alt="Esma Öğretmen Logo" 
          className="h-12 bg-white rounded-lg p-1"
        />
      </div>
      <p className="text-gray-300">
        İlkokul öğrencilerine özel, kişiselleştirilmiş eğitim desteği ve özel ders hizmetleri.
      </p>
    </div>
  );
};

export default FooterLogo;