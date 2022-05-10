import { createContext } from 'react';

export const AuthContext = createContext({
    token: null,
    user: null,
    login: (token, userId) => {},
    logout: () => {},
    isAuthenticated: false,
});