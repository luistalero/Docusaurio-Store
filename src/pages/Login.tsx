import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = () => {
    const success = login(user, pass);
    if (!success) {
      alert("Credenciales incorrectas ❌");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>🔐 Acceso Restringido</h2>
      <input
        type="text"
        placeholder="Usuario"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Contraseña"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Ingresar</button>
    </div>
  );
};

export default LoginPage;
