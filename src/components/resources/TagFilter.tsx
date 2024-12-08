import React from 'react';
import { X } from 'lucide-react';

interface TagFilterProps {
  availableTags: string[];
  selectedTags: string[];
  onTagSelect: (tag: string) => void;
  onTagRemove: (tag: string) => void;
}

const TagFilter: React.FC<TagFilterProps> = ({
  availableTags,
  selectedTags,
  onTagSelect,
  onTagRemove,
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-4">Filtrele</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {selectedTags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagRemove(tag)}
            className="flex items-center bg-blue-600 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-700 transition-colors"
          >
            {tag}
            <X className="w-4 h-4 ml-1" />
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {availableTags
          .filter((tag) => !selectedTags.includes(tag))
          .map((tag) => (
            <button
              key={tag}
              onClick={() => onTagSelect(tag)}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
            >
              {tag}
            </button>
          ))}
      </div>
    </div>
  );
};

export default TagFilter;