export interface Exam {
  id: string;
  title: string;
  subject: string;
  topic: string;
  grade: number;
  duration: number;
  questionCount: number;
  difficulty: 'Kolay' | 'Orta' | 'Zor';
  createdAt: string;
}

export interface ExamsResponse {
  exams: Exam[];
  totalPages: number;
  currentPage: number;
  total: number;
}