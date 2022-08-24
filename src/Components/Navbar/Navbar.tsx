import { faGear, faSignOutAlt, faUser, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { actionLOGIN } from '../../Logic/Login/actionsLOGIN';
import './Navbar.scss';

export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state:any) => state.login)
  const [isDropdownShown, setDropdownShown] = useState(false)

  function handleSignOut(){
    dispatch({type:actionLOGIN.LOG_OUT, payload:{
      userId: '####',
      firstName: 'NOT-LOGGED',
      lastName: 'NOT-LOGGED',
      isLogged: false,
      lastConnection: Date.now()
    }});
    navigate("/login",{replace:true})
  }
  function handleClickProfileDropdown(){
    setDropdownShown(prevState=>!prevState)
  }
  function handleHoverProfileDropdown(){
    setDropdownShown(true)
  }
  function handleHoverLeaveProfileDropdown(){
    setDropdownShown(false)
  }
  return (
  <React.Fragment>
      <nav className='flex flex-row justify-center mb-4 space-x-1 text-white '>
        <Link to="calendario"><button className='rounded-none w-[45vw] rounded-bl-2xl'>Calendario</button></Link>        
        {/* <Link to="pacientes"><button className='rounded-none'>Pacientes </button></Link> */}
        <Link to="pacientes"><button className='rounded-none w-[45vw] rounded-br-2xl'>Pacientes</button></Link>

    <button onClick={handleClickProfileDropdown} className='justify-center items-center absolute right-3 my-[1.9px] w-10  h-9 rounded-lg hidden sm:visible sm:flex'><FontAwesomeIcon icon={faUserDoctor} /></button>
    {
    isDropdownShown &&
    <div onMouseOver={handleHoverProfileDropdown} onMouseLeave={handleHoverLeaveProfileDropdown} className="profile-dropdown rounded-md  right-2 top-11 absolute z-10  bg-[#3454cf] h-fit w-2/12 p-2 ">
      <h6 className='text-center secondary-font'>Dr {user.firstName} {user.lastName}</h6>
      <hr />
      <span className='block cursor-pointer duration-100 hover:font-semibold hover:-translate-y-1 hover:duration-100'><FontAwesomeIcon icon={faUser}/> Perfil</span>
      <span className='block cursor-pointer duration-100 hover:font-semibold hover:-translate-y-1 hover:duration-100'><FontAwesomeIcon icon={faGear}/> Ajustes</span>
      <span onClick={handleSignOut} className='block cursor-pointer duration-100 hover:font-semibold hover:-translate-y-1 hover:duration-100'><FontAwesomeIcon icon={faSignOutAlt}/> Salir</span>
    </div>
    }
    </nav>
  </React.Fragment>
  )
}
