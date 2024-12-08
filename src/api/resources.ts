import { ResourcesResponse } from '../types/resources';

export async function fetchResources(): Promise<ResourcesResponse> {
  try {
    const response = await fetch('https://assitant-server.onrender.com/api/resources');
    if (!response.ok) {
      throw new Error('Failed to fetch resources');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching resources:', error);
    throw error;
  }
}