import React from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { isMobile } from "../../../Logic/isMobile";
import { actionLOGIN } from "../../../Logic/Login/actionsLOGIN";
import "./Login.scss";


export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleLogin(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    dispatch({type:actionLOGIN.SIGN_IN, payload:{
      userId: '####',
      firstName: 'John',
      lastName: 'Doe',
      isLogged: true,
      lastConnection: Date.now()
    }})
    navigate("/medico",{replace:true})

  }
  return isMobile() ? null : (
    <div className="h-[98vh] flex">
      <div className="left-side-login bg-2">
        <div className="bg-opaque text-center">
          <h3>Lorem, ipsum dolor.</h3>
          <h6>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta modi
            voluptatum quas.
          </h6>
        </div>
      </div>

      <div className="right-side-login">
        <form action="" className="flex flex-col space-y-2" onSubmit={handleLogin}>
          <h3>Ingresa</h3> 
          <label htmlFor="inputLoginUser">Introduce tu usuario o cédula de identidad:</label>
          <input id="inputLoginUser" type="text" placeholder="Digita aquí tu usuario o cédula de identidad..."/>

          <label htmlFor="inputLoginPassword">Introduce tu contraseña:</label>
          <input id="inputLoginPassword" type="password" placeholder="Digita aquí tu contraseña..." />
            <Link to='/register' className="hyperlink flex">
                <caption>
                  ¿No tienes una cuenta? ¡Regístrate!</caption>
            </Link>
          <button className="bg-[#3454cf]">Ingresar</button>

        </form>
      </div>
    </div>
  );
};
