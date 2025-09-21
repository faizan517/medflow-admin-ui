import React, { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 'admin' | 'doctor' | 'lab' | 'patient' | 'corporate' | 'insurance-corporate';

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (role: UserRole, userData?: Partial<User>) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (role: UserRole, userData?: Partial<User>) => {
    const defaultUserData = {
      admin: { name: 'Admin User', email: 'admin@mentorhealth.com' },
      doctor: { name: 'Dr. Sarah Ahmed', email: 'sarah@mentorhealth.com' },
      lab: { name: 'Lab Manager', email: 'lab@mentorhealth.com' },
      patient: { name: 'Ali Hassan', email: 'ali@example.com' },
      corporate: { name: 'Corporate Manager', email: 'corporate@mentorhealth.com' },
      'insurance-corporate': { name: 'Insurance Manager', email: 'insurance@mentorhealth.com' }
    };

    setUser({
      id: `${role}-1`,
      role,
      ...defaultUserData[role],
      ...userData
    });
  };

  const logout = () => {
    setUser(null);
  };

  const isAuthenticated = user !== null;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};