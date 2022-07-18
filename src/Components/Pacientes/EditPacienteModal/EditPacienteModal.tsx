import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { bloodTypes } from '../../../Assets/blood_types';
import { actionPATIENT } from '../../../Logic/Patient/actionsPatient';

export const EditPacienteModal = ({setShowingModal}:any) => {
    const inputPatientId: any = useRef(null);
const inputPatientFirstName: any = useRef(null);
const inputPatientLastName: any = useRef(null);
const inputPatientBloodType: any = useRef(null);
const inputPatientPhone: any = useRef(null);
const inputPatientEmail: any = useRef(null);

const dispatch = useDispatch();
  return (
    <div className='modal'>
        <div className="card w-[40%] min-w-fit">
        <button onClick={()=>setShowingModal(false)} aria-label='Cerrar ventanilla añadir paciente' className='bg-red-500 max-w-fit max-h-fit m-0 py-1 px-2 self-end' ><span><i className="fa-solid fa-x"></i></span></button>
      <h3 className='self-start'>  Editar paciente</h3>
      <hr />

      {/* <form action="" method="post"> */}
      <label htmlFor="inputAddIdentification">Cédula o pasaporte:</label>
      <input ref={inputPatientId}  id="inputAddIdentification" type="text" />

      <label htmlFor="inputAddFirstName">Primer nombre:</label>
      <input ref={inputPatientFirstName} id="inputAddFirstName" type="text" />
      <label htmlFor="inputAddLastName">Primer Apellido:</label>
      <input ref={inputPatientLastName} id="inputAddLastName" type="text" />

      <label htmlFor="inputAddLastName">Tipo de sangre:</label>
      <select ref={inputPatientBloodType} aria-label='Elegir tipo de sangre' name="inputSelectBloodTypes" id="inputSelectBloodTypes">
      <option selected disabled>-- Elegir tipo --</option>
     {bloodTypes.map(bloodType=>
      <option key={bloodType} value={bloodType}>{bloodType}</option>
      )}
     </select>

      <label htmlFor="inputAddPhone">Teléfono o celular:</label>
      <input ref={inputPatientPhone} id="inputAddPhone" type="tel" />
      
      <label htmlFor="inputAddEmail">Email:</label>
      <input ref={inputPatientEmail} id="inputAddEmail" type="email" />

     <button onClick={()=>dispatch({type: actionPATIENT.ADD_PATIENT, payload:{id:inputPatientId.current.value, firstName: inputPatientFirstName.current.value, lastName: inputPatientLastName.current.value, bloodType: inputPatientBloodType.current.value, phone: inputPatientPhone.current.value, email: inputPatientEmail.current.value}})} className='main-green m-2 self-end'><span><i className='fa-solid fa-plus'></i></span>Agregar</button>
    
        </div>
    </div>
  )
}
