import React from 'react';
import { Link } from 'react-router-dom';

const GradeResources: React.FC = () => {
  const grades = [1, 2, 3, 4];

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Sınıf Kaynakları</h3>
      <ul className="space-y-2">
        {grades.map((grade) => (
          <li key={grade}>
            <Link 
              to={`/sinif/${grade}`} 
              className="text-gray-300 hover:text-white transition-colors"
            >
              {grade}. Sınıf
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GradeResources;