import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import styles from "./index.module.css";
import Head from "@docusaurus/Head";

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
    <>
    <Head>
        <title>Login - Wiedii Documentation</title>
        <link rel="icon" href="/img/favicon-wiedii.png" />
      </Head>

    <div className={styles.login} >
      <div className={styles.formLogin}>
        <div className={styles.title}>
          <h2><img src="/img/wimii-form.png" alt="Wimii-wiedii" /> Iniciar Sesión</h2>
        </div>
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
    </div>
    </>
  );
};

export default LoginPage;
