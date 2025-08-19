import React from "react";
import { useAuth } from "../context/AuthContext";
import styles from './HomepageFeatures/styles.module.css'; 

const LogoutButton: React.FC = () => {
  const { logout } = useAuth();

  return (
    <button onClick={logout} className={styles.buttons}>
        Cerrar sesión
    </button>
  );
};

export default LogoutButton;
