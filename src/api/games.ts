export async function fetchWords(): Promise<string[]> {
  try {
    const response = await fetch('https://assitant-server.onrender.com/api/games/words');
    if (!response.ok) {
      throw new Error('Failed to fetch words');
    }
    const data = await response.json();
    return data.words;
  } catch (error) {
    console.error('Error fetching words:', error);
    throw error;
  }
}