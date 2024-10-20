import React, { useState } from 'react';
import axios from 'axios';
import Escudo from '../static/escudo.webp';


const Login = () => {
  // Usamos useState para manejar los inputs de email y password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // Para manejar errores
  const [loading, setLoading] = useState(false); // Para manejar el estado de carga

  // Función para manejar el login
  const handleLogin = async (e) => {
    e.preventDefault(); 
    setLoading(true); 
    setError(null); 

    try {
      const response = await axios.post('https://', {
        email,
        password
      });

      console.log('Respuesta exitosa:', response.data);
      
      window.location.href = '/';

    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Error al iniciar sesión, verifica tus credenciales.');
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div 
      className="flex items-center justify-center h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('https://scontent.fvvc1-1.fna.fbcdn.net/v/t39.30808-6/283283462_407243468081280_2490055200479528745_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=91Ks89HDzrEQ7kNvgGz3tCh&_nc_zt=23&_nc_ht=scontent.fvvc1-1.fna&_nc_gid=A8SKTI01w6lXA0PlRls9cnP&oh=00_AYC7C_V9_JjjpD1YC51-bkcQIGbnFOeHZHjjJCk4JfdihA&oe=671A5125')" }}
    >
      {/* Aplicamos el filtro de desenfoque al fondo */}
      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>

      <form 
        onSubmit={handleLogin} 
        className="bg-white p-6 rounded-lg shadow-lg w-2/5 relative z-10"
      >
        <div className='flex justify-between items-center'>
          <h2 className="text-2xl font-bold mb-4 text-center">Iniciar Sesión</h2>
          <img className='h-fit w-14' src={Escudo} alt="Escudo" />
        </div>

        {/* Mostrar mensaje de error si hay alguno */}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Input de correo electrónico */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Correo Electrónico
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-md p-2 mt-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="usuario@correo.com"
            required
          />
        </div>
        
        {/* Input de contraseña */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-md p-2 mt-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Contraseña"
            required
          />
        </div>

        {/* Botón de login */}
        <button 
          type="submit" 
          className="bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600 transition duration-300"
          disabled={loading} // Desactiva el botón si está cargando
        >
          {loading ? 'Cargando...' : 'Iniciar Sesión'}
        </button>
      </form>
    </div>
  );
};

export default Login;
