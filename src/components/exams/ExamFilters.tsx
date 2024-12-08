import React from 'react';

interface ExamFiltersProps {
  subjects: string[];
  selectedSubject: string;
  onSubjectChange: (subject: string) => void;
  keywords: string[];
  selectedKeywords: string[];
  onKeywordChange: (keyword: string) => void;
  difficulty: string;
  onDifficultyChange: (difficulty: string) => void;
}

const ExamFilters: React.FC<ExamFiltersProps> = ({
  subjects,
  selectedSubject,
  onSubjectChange,
  keywords,
  selectedKeywords,
  onKeywordChange,
  difficulty,
  onDifficultyChange
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-lg font-semibold mb-4">Filtreler</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ders
          </label>
          <select
            value={selectedSubject}
            onChange={(e) => onSubjectChange(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Tümü</option>
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Anahtar Kelimeler
          </label>
          <div className="flex flex-wrap gap-2">
            {keywords.map((keyword) => (
              <button
                key={keyword}
                onClick={() => onKeywordChange(keyword)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedKeywords.includes(keyword)
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {keyword}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Zorluk
          </label>
          <div className="flex flex-wrap gap-2">
            {['Tümü', 'Kolay', 'Orta', 'Zor'].map((level) => (
              <button
                key={level}
                onClick={() => onDifficultyChange(level === 'Tümü' ? '' : level)}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  (level === 'Tümü' && !difficulty) || difficulty === level
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamFilters;