import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface AuthContextType {
  isAuth: boolean;
  role: string | null;
  login: (user: string, pass: string, durationMinutes?: number) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    const storedRole = localStorage.getItem("role");
    const expiry = localStorage.getItem("expiry");

    if (storedAuth === "true" && expiry) {
      const now = Date.now();
      if (now < parseInt(expiry)) {
        setIsAuth(true);
        setRole(storedRole); // 🔥 recuperar rol
      } else {
        localStorage.removeItem("auth");
        localStorage.removeItem("expiry");
        localStorage.removeItem("role");
        setIsAuth(false);
        setRole(null);
      }
    }
  }, []);

  const login = (user: string, pass: string, durationMinutes: number = 960) => {
    if (user === "admin" && pass === "1234") {
      const expiryTime = Date.now() + durationMinutes * 60 * 1000;
      localStorage.setItem("auth", "true");
      localStorage.setItem("expiry", expiryTime.toString());
      localStorage.setItem("role", "developer");
      setIsAuth(true);
      setRole("developer");
      return true;
    } else if (user === "user" && pass === "1234") {
      const expiryTime = Date.now() + durationMinutes * 60 * 1000;
      localStorage.setItem("auth", "true");
      localStorage.setItem("expiry", expiryTime.toString());
      localStorage.setItem("role", "viewer");
      setIsAuth(true);
      setRole("viewer");
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("expiry");
    localStorage.removeItem("role");
    setIsAuth(false);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ isAuth, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};
