import React, { createContext, useContext, useState, useEffect } from 'react';
import { endpoints } from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('r1_token') || null);
  const [isGuest, setIsGuest] = useState(sessionStorage.getItem('r1_guest') === 'true');
  const [loading, setLoading] = useState(true);
  const [authModalOpen, setAuthModalOpen] = useState(false);
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

  // Demo / Seeded User Database for Standalone/Live Demo & Sanctum emulation
  const SEED_USERS = [
    {
      id: 1,
      name: 'R1 Master Administrator',
      email: 'admin@r1moto.com',
      password: 'password',
      role: 'admin',
      phone: '+63 917 123 4567',
    },
    {
      id: 2,
      name: 'SpeedZone Moto Parts (Authorized Dealer)',
      email: 'dealer@r1moto.com',
      password: 'password',
      role: 'dealer',
      phone: '+63 928 987 6543',
    },
    {
      id: 3,
      name: 'Juan Dela Cruz (Aerox 155 Rider)',
      email: 'rider@r1moto.com',
      password: 'password',
      role: 'customer',
      phone: '+63 905 555 1234',
      motorcycle_model_id: 1,
    }
  ];

  const login = async (credentials) => {
    try {
      // 1. Try Laravel Sanctum backend API first
      const response = await endpoints.login(credentials);
      const { user, token } = response.data;
      setUser(user);
      setToken(token);
      setIsGuest(false);
      sessionStorage.removeItem('r1_guest');
      localStorage.setItem('r1_token', token);
      localStorage.setItem('r1_user', JSON.stringify(user));
      setAuthModalOpen(false);
      return { success: true, user };
    } catch (error) {
      // 2. Seamless Fallback to Local/Demo Authentication Engine
      const foundUser = SEED_USERS.find(
        (u) => u.email.toLowerCase() === credentials.email.toLowerCase() && (u.password === credentials.password || credentials.password === 'password')
      );

      // Check registered users in localStorage
      let registeredUsers = [];
      try {
        registeredUsers = JSON.parse(localStorage.getItem('r1_registered_users') || '[]');
      } catch (e) {}

      const customUser = registeredUsers.find(
        (u) => u.email.toLowerCase() === credentials.email.toLowerCase() && u.password === credentials.password
      );

      const authedUser = foundUser || customUser;

      if (authedUser) {
        // Enforce dealer approval
        if (authedUser.role === 'dealer' && authedUser.is_approved === false) {
          return {
            success: false,
            message: 'Your dealer account is awaiting admin approval. You will receive access once verified.'
          };
        }

        // Generate simulated Sanctum Bearer token: 1|R1_Sanctum_Token_...
        const generatedToken = `1|sanctum_token_${Date.now()}_${Math.random().toString(36).substring(2)}`;
        const userObj = {
          id: authedUser.id,
          name: authedUser.name,
          email: authedUser.email,
          phone: authedUser.phone,
          role: authedUser.role || 'customer',
          motorcycle_model_id: authedUser.motorcycle_model_id,
        };

        setUser(userObj);
        setToken(generatedToken);
        setIsGuest(false);
        sessionStorage.removeItem('r1_guest');
        localStorage.setItem('r1_token', generatedToken);
        localStorage.setItem('r1_user', JSON.stringify(userObj));
        setAuthModalOpen(false);
        return { success: true, user: userObj };
      }

      return {
        success: false,
        message: error.response?.data?.message || 'Invalid email or password.'
      };
    }
  };

  const register = async (userData) => {
    try {
      // 1. Try backend API first
      await endpoints.register(userData);
      return { success: true, message: 'Account created successfully! Please sign in with your credentials.' };
    } catch (error) {
      // 2. Seamless Fallback: Create and persist new user locally if backend is unreachable
      if (!userData.email || !userData.password || !userData.name) {
        return { success: false, message: 'Please complete all required fields.' };
      }

      let registeredUsers = [];
      try {
        registeredUsers = JSON.parse(localStorage.getItem('r1_registered_users') || '[]');
      } catch (e) {}

      if (SEED_USERS.some(u => u.email.toLowerCase() === userData.email.toLowerCase()) || 
          registeredUsers.some(u => u.email.toLowerCase() === userData.email.toLowerCase())) {
        return { success: false, message: 'An account with this email already exists.' };
      }

      const selectedRole = userData.role === 'admin' ? 'admin' : userData.role === 'dealer' ? 'dealer' : 'customer';
      const isApproved = selectedRole === 'dealer' ? false : true;

      const newUser = {
        id: Date.now(),
        name: userData.name,
        email: userData.email,
        phone: userData.phone || '',
        password: userData.password,
        role: selectedRole,
        is_approved: isApproved,
      };

      registeredUsers.push(newUser);
      localStorage.setItem('r1_registered_users', JSON.stringify(registeredUsers));

      const successMsg = selectedRole === 'dealer'
        ? 'Dealer registration submitted! Your account is pending admin verification before you can log in.'
        : 'Account created successfully! Please sign in with your credentials.';

      return { success: true, message: successMsg };
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
      setIsGuest(false);
      sessionStorage.removeItem('r1_guest');
      localStorage.removeItem('r1_token');
      localStorage.removeItem('r1_user');
    }
  };

  const continueAsGuest = () => {
    setIsGuest(true);
    sessionStorage.setItem('r1_guest', 'true');
    setAuthModalOpen(false);
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
    isGuest,
    role: user?.role || 'guest',
    login,
    register,
    logout,
    continueAsGuest,
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
