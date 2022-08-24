import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../Navbar/Navbar'

export const Medico = () => {
  return (
    <React.Fragment>
        <Navbar/>
        <Outlet/>
    </React.Fragment>
  )
}
