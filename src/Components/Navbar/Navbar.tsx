import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

export const Navbar = () => {
  return (
    <nav className='flex flex-row justify-center mb-4 space-x-1 text-white '>
        <Link to="calendario"><button className='rounded-none w-[45vw] rounded-bl-2xl'>Calendario</button></Link>        
        {/* <Link to="pacientes"><button className='rounded-none'>Pacientes </button></Link> */}
        <Link to="pacientes"><button className='rounded-none w-[45vw] rounded-br-2xl'>Pacientes</button></Link>
    </nav>
  )
}
