import React from 'react';
import { Resource } from '../../types/resources';
import ResourceCard from './ResourceCard';

interface ResourceListProps {
  resources: Resource[];
}

const ResourceList: React.FC<ResourceListProps> = ({ resources }) => {
  if (resources.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Eşleşen kaynak bulunamadı.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {resources.map((resource) => (
        <ResourceCard
          key={resource._id}
          resource={resource}
        />
      ))}
    </div>
  );
};

export default ResourceList;