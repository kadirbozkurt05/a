export interface Question {
  id: number;
  text: string;
  options: string[];
  correct: string;
}

export interface Exam {
  _id: string;
  title: string;
  subject: string;
  keywords: string[];
  grade: number;
  duration: number;
  questionCount: number;
  difficulty: 'Kolay' | 'Orta' | 'Zor';
  createdAt: string;
  questions: Question[];
}

export interface ExamsResponse {
  exams: Exam[];
  totalPages: number;
  currentPage: number;
  total: number;
}

export interface ExamResult {
  totalQuestions: number;
  correctAnswers: number;
  score: number;
  timeSpent: number;
}