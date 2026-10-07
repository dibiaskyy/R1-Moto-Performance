import React, { createContext, useContext, useState, useEffect } from 'react';
import { endpoints } from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('r1_token') || null);
  const [loading, setLoading] = useState(true);
  // Login / Sign Up is the first thing a visitor sees if not authenticated
  const [authModalOpen, setAuthModalOpen] = useState(!localStorage.getItem('r1_token'));
  const [authModalMode, setAuthModalMode] = useState('login'); // 'login' or 'signup'

  useEffect(() => {
    const savedUser = localStorage.getItem('r1_user');
    if (savedUser && token) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        localStorage.removeItem('r1_user');
      }
    }
    setLoading(false);
  }, [token]);

  const login = async (credentials) => {
    try {
      const response = await endpoints.login(credentials);
      const { user, token } = response.data;
      setUser(user);
      setToken(token);
      localStorage.setItem('r1_token', token);
      localStorage.setItem('r1_user', JSON.stringify(user));
      setAuthModalOpen(false);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Invalid email or password.'
      };
    }
  };

  const register = async (userData) => {
    try {
      const response = await endpoints.register(userData);
      const { user, token } = response.data;
      setUser(user);
      setToken(token);
      localStorage.setItem('r1_token', token);
      localStorage.setItem('r1_user', JSON.stringify(user));
      setAuthModalOpen(false);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Registration failed. Please check inputs.'
      };
    }
  };

  const logout = async () => {
    try {
      if (token) {
        await endpoints.logout();
      }
    } catch (e) {
      // Proceed with local logout regardless of network error
    } finally {
      setUser(null);
      setToken(null);
      localStorage.removeItem('r1_token');
      localStorage.removeItem('r1_user');
    }
  };

  const openLogin = () => {
    setAuthModalMode('login');
    setAuthModalOpen(true);
  };

  const openSignUp = () => {
    setAuthModalMode('signup');
    setAuthModalOpen(true);
  };

  const value = {
    user,
    token,
    loading,
    isAuthenticated: !!user,
    role: user?.role || 'guest',
    login,
    register,
    logout,
    authModalOpen,
    setAuthModalOpen,
    authModalMode,
    setAuthModalMode,
    openLogin,
    openSignUp,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
