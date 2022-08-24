import React from 'react'
import { Link } from 'react-router-dom'
import { bloodTypes } from '../../../Assets/blood-types'
import { userRoles } from '../../../Assets/user-roles'
import { handleCustomValidation } from '../../../Logic/custom-input-validation'
import { isMobile } from '../../../Logic/isMobile'
import './Register.scss'
export const Register = () => {
    return isMobile() ? null : (
        <div className="h-[98vh] flex">
    
          <div className="left-side-register">
            <form action="" className="flex flex-col space-y-2">
              <h3>Regístrate</h3>
              <label htmlFor="inputRegisterId">Ingresa tu cédula de identidad:</label>
              <input className='no-number-spin' id='inputRegisterId' type="number" />

              <label htmlFor="inputRegisterFirstName">Ingresa tu/s nombre/s:</label>
              <input id='inputRegisterFirstName' type="text" />

              <label htmlFor="inputRegisterLastName">Ingresa tu/s apellido/s:</label>
              <input id='inputRegisterLastName' type="text" />

              <div className="flex space-x-2 mt-2">
            <div className='flex flex-col'>
              <label htmlFor="inputSelectGender">Género:</label>
              <select
                required={true}
                name="gender"
                // onChange={onChangePatientInfoHandler}
                id="inputSelectGender"
                defaultValue=""
                onInvalid={e=> handleCustomValidation(e, "Por favor, seleccione una opción.")}
                // onInput={handleSelectInputValidation}
                
              >
                <option value="" disabled>
                  -- Seleccionar género --
                </option>
                <option value="Male">Masculino</option>
                <option value="Female">Femenino</option>
                <option value="Other">Otro</option>
                <option value="Rather not say">Prefiero no responder</option>
              </select>
            </div>

            <div className='flex flex-col'>
              <label htmlFor="inputSelectUserRole">Tu rol:</label>
              <select
                title="Seleccionar tipo"
                name="userRole"
                // onChange={onChangePatientInfoHandler}
                id="inputSelectUserRole"
                defaultValue=""
                onInvalid={e=> handleCustomValidation(e, "Por favor, seleccione un rol.")}
                // onInput={handleSelectInputValidation}
                required
              >
                <option value="" disabled>
                  -- Seleccionar rol --
                </option>
                {userRoles.map((userRole) => (
                  <option key={userRole} value={userRole}>
                    {userRole}
                  </option>
                ))}
              </select>
            </div>
          </div>
              
          <Link to='/login' className="hyperlink flex">
          <caption className="hyperlink">¿Ya tienes tu cuenta? ¡Ingresa!</caption>
            </Link>
              <button className="bg-[#3454cf]">Registrarse</button>
    
            </form>
          </div>
          <div className="right-side-register bg-1">
            <div className="bg-opaque text-center ">
              <h3>Lorem, ipsum dollorem30
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto facere obcaecati id iste.
                or.</h3>
              <h6>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta modi
                voluptatum quas.
              </h6>
            </div>
          </div>
        </div>
        )
}
