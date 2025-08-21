import React from "react";
import { useAuth } from "../context/AuthContext";

interface Props {
  allowedRoles: string[];
  children: React.ReactNode;
}

const AuthWrapper: React.FC<Props> = ({ allowedRoles, children }) => {
  const { isAuth, role } = useAuth();

  if (!isAuth) {
    return <p>⚠️ Debes iniciar sesión para ver este contenido.</p>;
  }

  if (!role || !allowedRoles.includes(role)) {
    return <p>🚫 No tienes permisos para ver este contenido.</p>;
  }

  return <>{children}</>;
};

export default AuthWrapper;
