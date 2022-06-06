import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Calendario } from '../Calendario/Calendario';
import { Pacientes } from '../Pacientes/Pacientes';


const navbarRouting = [
  {
    path: "calendario",
    content: "Calendario",
    element: Calendario,
  },
  {
    path: "pacientes",
    content: "Pacientes",
    element: Pacientes,
  },
];

export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Pacientes />}></Route>
      {/* Navbar */}
      {navbarRouting.map(navItem=>
        <Route path={navItem.path} element={navItem.element()}></Route>
        )}

    </Routes>

   
  )
}


