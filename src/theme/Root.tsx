import React from "react";
import type { ReactNode } from "react";
import { AuthProvider, useAuth } from "../context/AuthContext";
import LoginPage from "../pages/Login";

function AuthGate({ children }: { children: ReactNode }) {
  const { isAuth } = useAuth();
  if (!isAuth) {
    return <LoginPage />;
  }
  return <>{children}</>;
}

export default function Root({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <AuthGate>{children}</AuthGate>
    </AuthProvider>
  );
}
