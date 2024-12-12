import { ExamsResponse } from '../types/exam';

export async function fetchExams(grade?: string): Promise<ExamsResponse> {
  try {
    const url = grade 
      ? `https://teacher-assistant-server-0a050558c608.herokuapp.com/api/exams?grade=${grade}`
      : 'https://teacher-assistant-server-0a050558c608.herokuapp.com/api/exams';
      
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch exams');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching exams:', error);
    throw error;
  }
}