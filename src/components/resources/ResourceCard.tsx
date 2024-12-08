import React from 'react';
import { FileDown } from 'lucide-react';
import { Resource } from '../../types/resources';

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const handleDownload = () => {
    window.open(resource.fileUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={resource.image} alt={resource.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
            {resource.category}
          </span>
          {resource.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <button
          onClick={handleDownload}
          className="flex items-center justify-center w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <FileDown className="w-4 h-4 mr-2" />
          İndir
        </button>
      </div>
    </div>
  );
};

export default ResourceCard;