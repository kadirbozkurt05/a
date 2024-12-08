import { Exam } from '../types/exam';

export const mockExams: Exam[] = [
  {
    id: '1',
    title: 'Toplama ve Çıkarma Değerlendirmesi',
    subject: 'Matematik',
    topic: 'Doğal Sayılarla Toplama ve Çıkarma',
    grade: 1,
    duration: 40,
    questionCount: 20,
    difficulty: 'Kolay',
    createdAt: '2024-03-15'
  },
  {
    id: '2',
    title: 'Okuma Anlama Testi',
    subject: 'Türkçe',
    topic: 'Okuduğunu Anlama',
    grade: 1,
    duration: 30,
    questionCount: 15,
    difficulty: 'Orta',
    createdAt: '2024-03-14'
  },
  {
    id: '3',
    title: 'Çarpma İşlemi Değerlendirmesi',
    subject: 'Matematik',
    topic: 'Çarpma İşlemi',
    grade: 2,
    duration: 45,
    questionCount: 25,
    difficulty: 'Orta',
    createdAt: '2024-03-13'
  },
  {
    id: '4',
    title: 'Dilbilgisi Testi',
    subject: 'Türkçe',
    topic: 'Sözcük Bilgisi',
    grade: 3,
    duration: 40,
    questionCount: 20,
    difficulty: 'Zor',
    createdAt: '2024-03-12'
  }
];