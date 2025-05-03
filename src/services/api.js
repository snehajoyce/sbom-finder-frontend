import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || '';

const api = axios.create({
  baseURL: API_URL,
});

// SBOM List and Metadata
export const getAllSboms = async () => {
  const response = await api.get('/api/sboms');
  return response.data;
};

export const getAllSbomsMetadata = async () => {
  const response = await api.get('/api/sboms/metadata');
  return response.data;
};

// SBOM Details
export const getSbomDetails = async (filename) => {
  const response = await api.get(`/api/sbom/${filename}`);
  return response.data;
};

// Search SBOMs
export const searchSboms = async (params) => {
  const response = await api.get('/api/search', { params });
  return response.data;
};

// Search Components
export const searchComponents = async (data) => {
  const response = await api.post('/api/search-components', data);
  return response.data;
};

// Compare SBOMs
export const compareSboms = async (sbom1, sbom2) => {
  const response = await api.post('/api/compare', { sbom1, sbom2 });
  return response.data;
};

// Upload SBOM
export const uploadSbom = async (formData) => {
  const response = await api.post('/api/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

// Generate SBOM
export const generateSbom = async (formData) => {
  const response = await api.post('/api/generate-sbom', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

// Get Statistics
export const getStatistics = async (params) => {
  const response = await api.get('/api/statistics', { params });
  return response.data;
};

// Get Platform Statistics
export const getPlatformStatistics = async () => {
  const response = await api.get('/api/platform-stats');
  return response.data;
};

// Get Suggestions for Autocomplete
export const getSuggestions = async (field, prefix) => {
  const response = await api.get('/api/suggestions', {
    params: { field, prefix },
  });
  return response.data.suggestions;
};

export default api;