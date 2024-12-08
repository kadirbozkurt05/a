import React, { forwardRef } from 'react';
import { Award, Calendar } from 'lucide-react';
import { ExamResult } from '../../types/exam';

interface CertificateProps {
  examTitle: string;
  studentName: string;
  result: ExamResult;
}

const ExamCertificate = forwardRef<HTMLDivElement, CertificateProps>(
  ({ examTitle, studentName, result }, ref) => {
    const currentDate = new Date().toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    return (
      <div ref={ref} className="p-8 print:p-0">
        <div className="w-[210mm] h-[297mm] mx-auto bg-white border-8 border-double border-blue-600 p-12 print:border-8 print:p-12 print:w-full print:h-full">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8">
              <Award className="w-24 h-24 text-blue-600 print:text-blue-600" />
            </div>
            
            <h1 className="text-4xl font-serif font-bold text-gray-800 mb-6 print:text-gray-800">
              Başarı Sertifikası
            </h1>

            <div className="text-xl text-gray-600 mb-12 print:text-gray-600">
              Bu belge
            </div>

            <div className="text-3xl font-bold text-blue-600 mb-12 font-serif print:text-blue-600">
              {studentName}
            </div>

            <div className="max-w-2xl text-lg leading-relaxed text-gray-700 mb-12 print:text-gray-700">
              <p>
                {examTitle} konulu sınavda {result.totalQuestions} sorudan{' '}
                {result.correctAnswers} tanesini doğru cevaplayarak %{result.score} başarı
                oranı ile bu belgeyi almaya hak kazanmıştır.
              </p>
            </div>

            <div className="flex items-center justify-center text-gray-600 mb-12 print:text-gray-600">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{currentDate}</span>
            </div>

            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=100"
                alt="EğitimPortal Logo"
                className="w-12 h-12 rounded-full mr-3 print:w-12 print:h-12"
              />
              <div className="text-2xl font-bold text-gray-800 print:text-gray-800">
                EğitimPortal
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

ExamCertificate.displayName = 'ExamCertificate';

export default ExamCertificate;