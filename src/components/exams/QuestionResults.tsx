import React from 'react';
import { Check, X } from 'lucide-react';
import { Question } from '../../types/exam';

interface QuestionResultsProps {
  questions: Question[];
  answers: Record<number, string>;
  onQuestionClick: (index: number) => void;
  selectedQuestionIndex: number | null;
}

const QuestionResults: React.FC<QuestionResultsProps> = ({
  questions,
  answers,
  onQuestionClick,
  selectedQuestionIndex,
}) => {
  const getQuestionResult = (index: number) => {
    const question = questions[index];
    return answers[index] === question.correct;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {questions.map((_, index) => (
          <button
            key={index}
            onClick={() => onQuestionClick(index)}
            className={`w-10 h-10 rounded-lg flex items-center justify-center font-medium transition-colors ${
              getQuestionResult(index)
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {selectedQuestionIndex !== null && (
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">
            Soru {selectedQuestionIndex + 1}
          </h3>
          <p className="mb-4">{questions[selectedQuestionIndex].text}</p>
          <div className="space-y-2">
            {questions[selectedQuestionIndex].options.map((option, index) => {
              const isSelected = answers[selectedQuestionIndex] === option;
              const isCorrect = questions[selectedQuestionIndex].correct === option;

              return (
                <div
                  key={index}
                  className={`p-3 rounded-lg flex items-center justify-between ${
                    isCorrect
                      ? 'bg-green-100 text-green-800'
                      : isSelected
                      ? 'bg-red-100 text-red-800'
                      : 'bg-white'
                  }`}
                >
                  <span>{option}</span>
                  {(isSelected || isCorrect) && (
                    <span>
                      {isCorrect ? (
                        <Check className="w-5 h-5 text-green-600" />
                      ) : (
                        <X className="w-5 h-5 text-red-600" />
                      )}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionResults;