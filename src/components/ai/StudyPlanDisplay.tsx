import React from 'react';

interface StudyPlanDisplayProps {
  content: string;
}

const StudyPlanDisplay: React.FC<StudyPlanDisplayProps> = ({ content }) => {
  // Convert markdown-style content to HTML-friendly format
  const formatContent = (text: string) => {
    return text
      .split('\n')
      .map((line) => {
        if (line.startsWith('**')) {
          // Handle bold and italic text (headers)
          return `<h2 class="text-xl font-bold text-gray-800 mt-6 mb-3">${line.replace(/\*\*(.*?)\*\*/g, '<b><i>$1</i></b>')}</h2>`;
        } else if (line.startsWith('* ')) {
          // Handle bullet points
          return `<li class="mb-2">${line.substring(2)}</li>`;
        } else if (line.startsWith('_')) {
          // Handle italic text
          return `<p class="text-gray-600 italic">${line.replace(/_/g, '')}</p>`;
        } else {
          // Handle bold and italic text within normal lines
          return `<p class="mb-2">${line.replace(/\*\*(.*?)\*\*/g, '<b><i>$1</i></b>')}</p>`;
        }
      })
      .join('');
  };

  return (
    <div className="prose max-w-none">
      <div
        className="text-gray-800 leading-relaxed font-['Poppins']"
        dangerouslySetInnerHTML={{ __html: formatContent(content) }}
      />
    </div>
  );
};

export default StudyPlanDisplay;
