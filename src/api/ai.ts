import { StudyPlanRequest, ConceptExplainerRequest } from '../types/ai';

export async function generateStudyPlan(data: StudyPlanRequest): Promise<string> {
  try {
    const response = await fetch('https://teacher-assistant-server-0a050558c608.herokuapp.com/api/ai/study-plan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error('Failed to generate study plan');
    }
    
    return await response.text();
  } catch (error) {
    console.error('Error generating study plan:', error);
    throw error;
  }
}

export async function explainConcept(data: ConceptExplainerRequest): Promise<string> {
  try {
    const response = await fetch('https://teacher-assistant-server-0a050558c608.herokuapp.com/api/ai/concept-explainer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error('Failed to explain concept');
    }
    
    return await response.text();
  } catch (error) {
    console.error('Error explaining concept:', error);
    throw error;
  }
}