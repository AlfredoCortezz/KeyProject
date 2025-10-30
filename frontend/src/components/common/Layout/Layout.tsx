import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title = "Sistema de Reservas de Salas" }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-[#E5E5E8] flex flex-col"> {/* Cloud Gray */}
      {/* Header con tu paleta de colores */}
      <header className="bg-gradient-to-r from-[#006DFF] to-[#8E4BFB] text-white shadow-lg"> {/* LCD Blue to Ultra Violet */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <Link to="/" className="text-2xl font-bold mb-2 md:mb-0 hover:opacity-80 transition flex items-center">
              <span className="bg-[#F5F500] text-[#000] px-2 py-1 rounded-lg mr-2">⚡</span> 
              Reservas de Salas
            </Link>
            
            <nav className="flex flex-wrap gap-2">
              <Link 
                to="/" 
                className={`px-4 py-2 rounded-lg transition duration-200 font-semibold ${
                  isActive('/') 
                    ? 'bg-[#31F483] text-[#000] shadow-lg'  // Mecha Green
                    : 'hover:bg-[#F5F500] hover:text-[#000]' // Spark Yellow
                }`}
              >
                🏠 Inicio
              </Link>
              <Link 
                to="/reservas" 
                className={`px-4 py-2 rounded-lg transition duration-200 font-semibold ${
                  isActive('/reservas') 
                    ? 'bg-[#31F483] text-[#000] shadow-lg'  // Mecha Green
                    : 'hover:bg-[#F5F500] hover:text-[#000]' // Spark Yellow
                }`}
              >
                📚 Salas
              </Link>
              <Link 
                to="/reservas/crear" 
                className={`px-4 py-2 rounded-lg transition duration-200 font-semibold ${
                  isActive('/reservas/crear') 
                    ? 'bg-[#31F483] text-[#000] shadow-lg'  // Mecha Green
                    : 'hover:bg-[#F5F500] hover:text-[#000]' // Spark Yellow
                }`}
              >
                ➕ Nueva Reserva
              </Link>
              <Link 
                to="/login" 
                className={`px-4 py-2 rounded-lg transition duration-200 font-semibold ${
                  isActive('/login') 
                    ? 'bg-[#31F483] text-[#000] shadow-lg'  // Mecha Green
                    : 'hover:bg-[#F5F500] hover:text-[#000]' // Spark Yellow
                }`}
              >
                🔐 Login
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#000] text-white py-6"> {/* Negro */}
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-bold text-[#F5F500]">⚡ Reservas de Salas</h3>
              <p className="text-[#CBCBD4]">Sistema de gestión para estudiantes</p> {/* Gray Matter */}
            </div>
            <div className="text-[#CBCBD4]">
              <p>&copy; 2024 Universidad - Todos los derechos reservados</p>
              <p className="text-sm mt-1">📧 contacto@universidad.edu</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;