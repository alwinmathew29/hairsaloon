/**
 * API Configuration utility for handling different environments
 */

// Get the API base URL based on environment
export const getApiUrl = (): string => {
  // In production, use the same domain (since frontend and backend are served together)
  if (import.meta.env.PROD) {
    return window.location.origin;
  }
  
  // In development, use the configured API URL or default to localhost:3000
  return import.meta.env.VITE_API_URL || 'http://localhost:3000';
};

// Create full API endpoint URLs
export const createApiEndpoint = (path: string): string => {
  const baseUrl = getApiUrl();
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};

// Environment checks
export const isDevelopment = import.meta.env.DEV;
export const isProduction = import.meta.env.PROD;

// Example usage:
// const pingEndpoint = createApiEndpoint('/api/ping');
// const demoEndpoint = createApiEndpoint('/api/demo');
