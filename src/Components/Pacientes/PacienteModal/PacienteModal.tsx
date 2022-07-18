import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { bloodTypes } from '../../../Assets/blood_types'
import { actionPATIENT } from '../../../Logic/Patient/actionsPatient';
import { Pathologies } from '../patologias';

export const PacienteModal = ({setShowingModal, contextTitle, contextButton, id, firstName, lastName, bloodType, phone, email, pathology}:any) => {
const inputPatientId: any = useRef(null);
const [idValue, setIdValue] = useState(id);

const inputPatientFirstName: any = useRef(null);
const [firstNameValue, setFirstNameValue] = useState(firstName);

const inputPatientLastName: any = useRef(null);
const [LastNameValue, setLastNameValue] = useState(lastName);

const inputPatientBloodType: any = useRef(null);
const [BloodTypeValue, setBloodTypeValue] = useState(bloodType);

const inputPatientPhone: any = useRef(null);
const [PhoneValue, setPhoneValue] = useState(phone);

const inputPatientEmail: any = useRef(null);
const [EmailValue, setEmailValue] = useState(email);

const inputPatientPathologies: any = useRef(null);
const [PathologyValue, setPathologyValue] = useState(pathology);

const dispatch = useDispatch();
  return (
    <div id="modalAddPatient" className='modal min-w-fit'  >
    <div className="card  w-[40%] min-w-fit" >
      <button onClick={()=>setShowingModal(false)} aria-label='Cerrar ventanilla añadir paciente' className='bg-red-500 max-w-fit max-h-fit m-0 py-1 px-2 self-end' ><span><i className="fa-solid fa-x"></i></span></button>
      <h3 className='self-start'>  {contextTitle} paciente</h3>
      <hr />

      {/* <form action="" method="post"> */}
      <label htmlFor="inputAddIdentification">Cédula o pasaporte:</label>
      <input ref={inputPatientId} value={idValue} onChange={(e)=>setIdValue(e.target.value)} id="inputAddIdentification" type="text" />

      <label htmlFor="inputAddFirstName">Primer nombre:</label>
      <input ref={inputPatientFirstName}  value={firstNameValue} onChange={(e)=>setFirstNameValue(e.target.value)} id="inputAddFirstName" type="text" />
      <label htmlFor="inputAddLastName">Primer Apellido:</label>
      <input ref={inputPatientLastName} value={LastNameValue} onChange={(e)=>setLastNameValue(e.target.value)} id="inputAddLastName" type="text" />

      <label htmlFor="inputAddLastName">Tipo de sangre:</label>
      <select ref={inputPatientBloodType}  value={BloodTypeValue} onChange={(e)=>setBloodTypeValue(e.target.value)} aria-label='Elegir tipo de sangre' name="inputSelectBloodTypes" id="inputSelectBloodTypes">
      <option selected disabled>-- Elegir tipo --</option>
     {bloodTypes.map(bloodType=>
      <option key={bloodType} value={bloodType}>{bloodType}</option>
      )}
     </select>

      <label htmlFor="inputAddPhone">Teléfono o celular:</label>
      <input ref={inputPatientPhone}  value={PhoneValue} onChange={(e)=>setPhoneValue(e.target.value)}id="inputAddPhone" type="tel" />
      
      <label htmlFor="inputAddEmail">Email:</label>
      <input ref={inputPatientEmail}  value={EmailValue} onChange={(e)=>setEmailValue(e.target.value)} id="inputAddEmail" type="email" />

      <label htmlFor="inputAddPathology">Patologías</label>
      <select ref={inputPatientPathologies}   id="inputAddPathology" multiple>
      <option selected disabled>-- Elegir patología --</option>
      <option value="Ninguna" >Ninguna</option>
      {Pathologies.sort().map(pathology=><option value={pathology}>{pathology}</option>
        )}
      </select>

     <button onClick={()=>contextButton === "Agregar"? dispatch({type: actionPATIENT.ADD_PATIENT,  payload:{            id:inputPatientId.current.value, firstName: inputPatientFirstName.current.value, lastName: inputPatientLastName.current.value, bloodType: inputPatientBloodType.current.value, phone: inputPatientPhone.current.value, email: inputPatientEmail.current.value, pathologies: inputPatientPathologies.current.value}}) 
                                                     : dispatch({type: actionPATIENT.EDIT_PATIENT, payload:{prevId: id, id:inputPatientId.current.value, firstName: inputPatientFirstName.current.value, lastName: inputPatientLastName.current.value, bloodType: inputPatientBloodType.current.value, phone: inputPatientPhone.current.value , email:inputPatientEmail.current.value, pathologies: inputPatientPathologies.current.value }})} className='main-green m-2 self-end'><span><i className={contextButton == 'Agregar'? 'fa-solid fa-plus': 'fa-solid fa-check'}></i></span>{contextButton}</button>
      
      {/* </form> */}
    </div>
  </div>
  )
}
