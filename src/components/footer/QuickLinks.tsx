import React from 'react';
import { Link } from 'react-router-dom';

const QuickLinks: React.FC = () => {
  const links = [
    { path: '/', label: 'Anasayfa' },
    { path: '/hakkimda', label: 'Hakkımda' },
    { path: '/kaynaklar', label: 'Kaynaklar' }
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Hızlı Erişim</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.path}>
            <Link 
              to={link.path} 
              className="text-gray-300 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;