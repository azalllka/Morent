const API_BASE = 'https://localhost:5121';

export const fetchWithRetry = async (url, options = {}, retries = 3) => {
  try {
    const response = await fetch(`${API_BASE}${url}`, {
      ...options,
      credentials: 'include', // Для CORS с credentials
    });
    
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    if (retries > 0) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return fetchWithRetry(url, options, retries - 1);
    }
    throw error;
  }
};