import {useState} from 'react';

import './Pacientes.scss';

import { SearchBar } from '../SearchBar/SearchBar';

import { bloodTypes } from '../../Assets/blood_types';
import { dummyData } from './dummy-data';

export const Pacientes = () => {
  let [isShowingModal, setShowingModal] = useState(false);
  // const dismissMap = (event: MouseEvent)=> {
  //   const element = <HTMLElement>event.target;
  //   if (element.matches('#map-container') || element.closest('#map-container'))
  //     return;
  //   this.brigadeLocation = false;
  // };

  // function dismissModal(event: MouseEvent){
  //   const element = event.target as HTMLElement;
  //   if (element?.matches("modalAddPatient") || element?.closest("modalAddPatient"))
  //     return;
  //   setShowingModal(false);
  // };

    return (
    <div className='flex justify-center flex-col'>
      <SearchBar></SearchBar>
      <button  onClick={()=>setShowingModal(true)} className='main-green self-end m-2 pr-3 hover:bg-green-500 transition-all hover:transition-all'><i className="fa-solid fa-plus"></i>Agregar</button>
      
      {window.innerWidth > 710?
      <table>
        <thead>
          <tr>
            <th>Identificación</th>
            <th>Nombre completo</th>
            <th>Tipificación</th>
            <th>Contacto</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((dummy, index)=>
            <tr key={index}>
              <td className="max-w-fit">{dummy.id}</td>
              <td>{dummy.first_name} {dummy.last_name}</td>
              <td>{dummy.blood_type.toUpperCase()}</td>
              <td style={{color:'#002A54'}}>
              <a href={"https://api.whatsapp.com/send?phone=1" + dummy.phone.replaceAll(/([() -])/g, "")} target="_blank" rel="noreferrer" className='underline'><i className="fa-brands fa-whatsapp"></i> {dummy.phone}</a>
              <br/>
              <a href={"mailto:"+dummy.email} target="_blank" rel="noreferrer" className='underline'  ><i className="fa-solid fa-envelope"></i>{dummy.email}</a>
              </td>
              <td className='space-x-2'>
                <button aria-label='Historial clínico' title='Historial clínico' className='w-14 bg-blue-500 border border-blue-500 hover:border-white transition-all hover:transition-all'><i className="fa-solid fa-clipboard-list"></i></button>
                <button aria-label='Editar paciente' title='Editar paciente' className='w-14 bg-green-500 border border-green-500 hover:border-white transition-all hover:transition-all '><i className="fa-solid fa-pen-to-square"></i></button>
                <button aria-label='Eliminar paciente' title='Eliminar paciente' className='w-14 bg-red-500 border border-red-500 hover:border-white transition-all hover:transition-all '><i className="fa-solid fa-user-xmark"></i></button>
              </td>
            </tr>
            )}
        </tbody>
      </table>
      :
      <table>
        <tbody>
          {dummyData.map(dummy=>
            
          <tr>
            <td className='rounded-md shadow-2xl'>
              <strong>💳</strong> {dummy.id} <br/>
              {dummy.gender == "Male"?"👨":
               dummy.gender == "Female"?"👩":"😄"} {dummy.first_name} {dummy.last_name}  <br/>
              <strong>💉🩸</strong> {dummy.blood_type.toUpperCase()} <br/>
              <strong>📞</strong> <a href={"https://api.whatsapp.com/send?phone=1" + dummy.phone.replaceAll(/([() -])/g, "")} target="_blank" rel="noreferrer" className='underline'>{dummy.phone}</a> <br/>
              <strong>📨</strong> <a href={"mailto:"+dummy.email} target="_blank" rel="noreferrer" className='underline'>{dummy.email}</a><br/>
            </td>
          </tr>
            )}
        </tbody>
      </table>
      }
      {isShowingModal && 
      <div id="modalAddPatient" className='modal' >
        <div className="card  w-[40%] min-w-fit" >
          {/* <div className='flex flex-row'> */}
          <button aria-label='Cerrar' className='bg-red-500 max-w-fit max-h-fit m-0 py-1 px-2 self-end' onClick={()=>setShowingModal(false)}><span><i className="fa-solid fa-x"></i></span></button>
          <h3 className='self-start'>Agregar paciente</h3>
          {/* </div> */}
          <hr />

          {/* <form action="" method="post"> */}
          <label htmlFor="inputAddIdentification">Cédula o pasaporte:</label>
          <input id="inputAddIdentification" type="text" />

          <label htmlFor="inputAddFirstName">Primer nombre:</label>
          <input id="inputAddFirstName" type="text" />
          <label htmlFor="inputAddLastName">Primer Apellido:</label>
          <input id="inputAddLastName" type="text" />

          <label htmlFor="inputAddLastName">Tipo de sangre:</label>
         <select title='Elegir tipo' name="inputSelectBloodTypes" id="inputSelectBloodTypes">
          <option selected disabled>-- Elegir tipo --</option>
         {bloodTypes.map(bloodType=>
          <option value={bloodType}>{bloodType}</option>
          )}
         </select>

          <label htmlFor="inputAddPhone">Teléfono o celular:</label>
          <input id="inputAddPhone" type="tel" />
          
          <label htmlFor="inputAddEmail">Email:</label>
          <input id="inputAddEmail" type="email" />

         <button className='main-green m-2 self-end'><span><i className='fa-solid fa-plus'></i></span>Agregar</button>
          
          {/* </form> */}
        </div>
      </div>
      }
    </div>
    
  )
}
