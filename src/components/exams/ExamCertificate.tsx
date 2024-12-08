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
        <div className="w-[297mm] h-[210mm] mx-auto bg-white relative print:w-full print:h-full flex items-center justify-center">
          {/* Decorative Border */}
          <div className="absolute inset-0">
            <div className="w-full h-full border-[16px] border-double border-blue-600">
              {/* Corner Ornaments */}
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-white">
                <div className="w-full h-full border-t-4 border-l-4 border-blue-600 rounded-tl-lg" />
              </div>
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-white">
                <div className="w-full h-full border-t-4 border-r-4 border-blue-600 rounded-tr-lg" />
              </div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-white">
                <div className="w-full h-full border-b-4 border-l-4 border-blue-600 rounded-bl-lg" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-white">
                <div className="w-full h-full border-b-4 border-r-4 border-blue-600 rounded-br-lg" />
              </div>
            </div>
          </div>

          {/* Certificate Content */}
          <div className="w-full px-16 py-12 relative">
            {/* Header */}
            <div className="flex items-center justify-center gap-8 mb-12">
              <img
                src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=100"
                alt="EğitimPortal Logo"
                className="w-20 h-20 rounded-full"
              />
              <div className="text-3xl font-bold text-gray-800">
                EğitimPortal
              </div>
            </div>

            {/* Main Content */}
            <div className="text-center space-y-8">
              <Award className="w-24 h-24 text-blue-600 mx-auto" />
              
              <h1 className="text-5xl font-serif font-bold text-gray-800">
                Başarı Sertifikası
              </h1>

              <div className="text-4xl font-bold text-blue-600 font-serif">
                {studentName}
              </div>

              <div className="max-w-2xl mx-auto text-xl leading-relaxed text-gray-700">
                <p>
                  {examTitle} konulu sınavda {result.totalQuestions} sorudan{' '}
                  {result.correctAnswers} tanesini doğru cevaplayarak %{result.score} başarı
                  oranı ile bu belgeyi almaya hak kazanmıştır.
                </p>
              </div>

              <div className="flex items-center justify-center text-gray-600 text-lg">
                <Calendar className="w-6 h-6 mr-2" />
                <span>{currentDate}</span>
              </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-12 left-16 right-16">
              <div className="border-t-2 border-gray-200 pt-4 flex justify-between items-center">
                <div className="text-center">
                  <div className="font-bold text-gray-700">Sınav Yöneticisi</div>
                  <div className="text-sm text-gray-500">EğitimPortal</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-gray-700">Onay</div>
                  <div className="text-sm text-gray-500">12345</div>
                </div>
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