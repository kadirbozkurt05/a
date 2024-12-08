import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">EğitimPortal</span>
            </div>
            <p className="text-gray-400">
              İlkokul öğretmenlerine yönelik yardımcı araçlar ve kaynaklar sunan eğitim platformu.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Erişim</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Anasayfa</Link></li>
              <li><Link to="/hece-calismasi" className="text-gray-400 hover:text-white transition-colors">Heceleme Çalışması</Link></li>
              <li><Link to="/kaynaklar" className="text-gray-400 hover:text-white transition-colors">Kaynaklar</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Sınıf Kaynakları</h3>
            <ul className="space-y-2">
              {[1, 2, 3, 4].map((grade) => (
                <li key={grade}>
                  <Link to={`/sinif/${grade}`} className="text-gray-400 hover:text-white transition-colors">
                    {grade}. Sınıf
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-5 w-5" />
                <span>iletisim@egitimportal.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-5 w-5" />
                <span>+90 (555) 123 45 67</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-5 w-5" />
                <span>Ankara, Türkiye</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} EğitimPortal. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;