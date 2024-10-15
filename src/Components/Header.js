import React from 'react'
//import escudo from '../escudo.webp';
import {useNavigate } from 'react-router-dom'

export default function Header({onOpenUserSideMenu}) {
  const navigate = useNavigate();

  const NavBar = () => {
    const navElements = 'flex px-5 hover:border-b-2 hover:bg-slate-300 border-black items-center'
    return(
      <nav className='flex  mx-auto hover:cursor-pointer absolute left-1/2 transform -translate-x-1/2 h-full'> 
        <ul className='flex'>
          <li className={navElements} onClick={() => navigate('/institucion')}>Institución</li>
          <li className={navElements} onClick={() => navigate('/articulos')}>Articulos</li>
          <li className={navElements} onClick={() => navigate('/noticias')}>Noticias</li>
          <li className={navElements} onClick={() => navigate('/eventos')}>Eventos</li>
          <li className={navElements} onClick={() => navigate('/sedes')}>Sedes</li>
        </ul>
      </nav>
    )
  }

  return (
    <header className='flex relative justify-between bg-white shadow-md shadow-slate-200 px-10 '> 
      <section className='flex  items-center hover:cursor-pointer my-2 gap-2 w-1/3' onClick={() => navigate('/')}>
        <img className='w-72' src='data:image/png;base64,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' 
          alt='Escudo del Colegio Rural Vanguardia'></img>
        {/*<h5 className='font-bold text-xl'>Colegio Rural Vanguardia</h5>*/}
      </section>

      <NavBar />

      <div className='my-auto'>
        <button className='px-5 py-1 rounded-full bg-blue-500 h-10 my-auto hover:bg-blue-600 text-white' onClick={() => navigate('/ingresar')} >Acceder</button>
        <button className='rounded-full w-10 h-10 bg-slate-300' onClick={() => onOpenUserSideMenu()}> P </button>
      </div>
    </header>
  )
}
