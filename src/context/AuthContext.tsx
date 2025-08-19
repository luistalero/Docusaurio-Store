import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface AuthContextType {
  isAuth: boolean;
  login: (user: string, pass: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    const storedAuth = sessionStorage.getItem("auth");
    if (storedAuth === "true") {
      setIsAuth(true);
    }
  }, []);

  const login = (user: string, pass: string) => {
    if (user === "admin" && pass === "1234") {
      sessionStorage.setItem("auth", "true"); 
      setIsAuth(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    sessionStorage.removeItem("auth");
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};
