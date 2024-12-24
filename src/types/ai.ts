export interface StudyPlanRequest {
  grade: string;
  subjects: string[];
  preferredTopics?: string;
  dailyHours: number;
  excludedDays: string[];
  durationWeeks: number;
}

export interface ConceptExplainerRequest {
  topic: string;
}