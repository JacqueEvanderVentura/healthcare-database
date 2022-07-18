import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

export const Navbar = () => {
  return (
    <nav className='flex flex-row justify-center mb-4 space-x-1 text-white '>
        <Link to="calendario"><button className='rounded-none rounded-bl-2xl'>Calendario</button></Link>        
        <Link to="pacientes"><button className='rounded-none'>Pacientes </button></Link>
        <Link to="nosebro"><button className='rounded-none rounded-br-2xl'>Button 3</button></Link>
    </nav>
  )
}
