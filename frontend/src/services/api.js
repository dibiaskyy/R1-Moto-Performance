import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api/v1',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Request interceptor to automatically attach Bearer token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('r1_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle session expiration
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('r1_token');
      localStorage.removeItem('r1_user');
    }
    return Promise.reject(error);
  }
);

export const endpoints = {
  // Auth
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  logout: () => api.post('/auth/logout'),
  me: () => api.get('/auth/me'),

  // Catalog
  getCategories: () => api.get('/categories'),
  getProducts: (params) => api.get('/products', { params }),
  getProductBySlug: (slug) => api.get(`/products/${slug}`),

  // Compatibility Engine
  getMotorcycleModels: () => api.get('/motorcycle-models'),
  getProductsByMotorcycle: (modelId) => api.get(`/motorcycle-models/${modelId}/products`),

  // Dealer Portal
  submitDealerApplication: (formData) => api.post('/dealer-applications', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
  createDealerOrder: (orderData) => api.post('/dealer-orders', orderData),
  
  // Public
  getCareers: () => api.get('/careers'),
  submitContact: (contactData) => api.post('/contact-inquiries', contactData),
};

export default api;
