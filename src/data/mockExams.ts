import { Exam } from '../types/exam';

export const mockExams: Exam[] = [
  {
    id: '1',
    title: 'Toplama ve Çıkarma Değerlendirmesi',
    subject: 'Matematik',
    keywords: ['doğal sayılar', 'dört işlem', 'toplama', 'çıkarma'],
    grade: 1,
    duration: 40,
    questionCount: 20,
    difficulty: 'Kolay',
    createdAt: '2024-03-15',
    questions: [
      {
        id: 1,
        text: "2 + 2 = ?",
        options: ["3", "4", "5", "6"],
        correct: "4"
      },
      {
        id: 2,
        text: "3 x 4 = ?",
        options: ["10", "11", "12", "13"],
        correct: "12"
      },
      {
        id: 3,
        text: "10 - 3 = ?",
        options: ["5", "6", "7", "8"],
        correct: "7"
      }
    ]
  },
  {
    id: '2',
    title: 'Okuma Anlama Testi',
    subject: 'Türkçe',
    keywords: ['okuma anlama', 'paragraf', 'ana fikir'],
    grade: 1,
    duration: 30,
    questionCount: 15,
    difficulty: 'Orta',
    createdAt: '2024-03-14',
    questions: [
      {
        id: 1,
        text: "Ali okula gidiyor. Ali kaçıncı sınıfa gidiyor?",
        options: ["1. sınıf", "2. sınıf", "3. sınıf", "Belirtilmemiş"],
        correct: "Belirtilmemiş"
      },
      {
        id: 2,
        text: "Ayşe kitap okuyor. Kitabın konusu nedir?",
        options: ["Macera", "Bilim", "Belirtilmemiş", "Tarih"],
        correct: "Belirtilmemiş"
      }
    ]
  },
  {
    id: '3',
    title: 'Çarpma İşlemi Değerlendirmesi',
    subject: 'Matematik',
    keywords: ['doğal sayılar', 'dört işlem', 'çarpma'],
    grade: 2,
    duration: 45,
    questionCount: 25,
    difficulty: 'Orta',
    createdAt: '2024-03-13',
    questions: [
      {
        id: 1,
        text: "5 x 5 = ?",
        options: ["20", "25", "30", "35"],
        correct: "25"
      },
      {
        id: 2,
        text: "3 x 6 = ?",
        options: ["15", "16", "17", "18"],
        correct: "18"
      }
    ]
  },
  {
    id: '4',
    title: 'Dilbilgisi Testi',
    subject: 'Türkçe',
    keywords: ['dilbilgisi', 'sözcük türleri', 'noktalama işaretleri'],
    grade: 3,
    duration: 40,
    questionCount: 20,
    difficulty: 'Zor',
    createdAt: '2024-03-12',
    questions: [
      {
        id: 1,
        text: "Hangi sözcük isimdir?",
        options: ["Koşmak", "Güzel", "Kitap", "Hızlı"],
        correct: "Kitap"
      },
      {
        id: 2,
        text: "Hangi noktalama işareti cümle sonuna konur?",
        options: [".", ",", ";", ":"],
        correct: "."
      }
    ]
  }
];