import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation(); // Obtiene la ubicación actual

  // Función para verificar si el enlace está activo
  const isActive = (pathname: string) => location.pathname === pathname;

  return (
    <div className='flex flex-row justify-center items-center bg-slate-400 py-4 w-full'>
      <div className='w-1/2 flex gap-3 justify-center items-center'>
        <Link to="/" className={isActive('/') ? 'font-bold' : ''}>INICIO</Link>
        <Link to="/productos" className={isActive('/productos') ? 'font-bold' : ''}>PRODUCTOS</Link>
        <Link to="/pedidos" className={isActive('/pedidos') ? 'font-bold' : ''}>PEDIDOS</Link>
        <Link to="/ordena" className={isActive('/ordena') ? 'font-bold' : ''}>ORDENA</Link>
        <Link to="/pedidos-cliente" className={isActive('/pedidos-cliente') ? 'font-bold' : ''}>PEDIDOS ( CLIENTE )</Link>
      </div>
    </div>
  );
}