import React, {useRef, useState} from 'react';
import { dummyData } from'./dummy-data'
import './Pacientes.scss';

import { SearchBar } from '../SearchBar/SearchBar';

import { bloodTypes } from '../../Assets/blood_types';
import { useDispatch, useSelector } from 'react-redux';
import { actionPATIENT } from '../../Logic/Patient/actionsPatient';
import { storePatient } from '../../Logic/Patient/storePatient';
import { PacienteModal } from './PacienteModal/PacienteModal';
import { ClinicalHistoryModal } from './ClinicalHistoryModal/ClinicalHistoryModal';


export const Pacientes = () => {
  let [isShowingAddPatientModal, setShowingAddPatientModal] = useState(false);
  let [isShowingClinicalHistoryPatientModal, setShowingClinicalHistoryPatientModal] = useState(false);
  let [isShowingEditPatientModal, setShowingEditPatientModal] = useState(false);
  const usingDummyData = false;
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

  const dispatch = useDispatch();
  const patients = useSelector((state:any)=>state.patient)
  const inputPatientId: any = useRef(null);
const inputPatientFirstName: any = useRef(null);
const inputPatientLastName: any = useRef(null);
const inputPatientBloodType: any = useRef(null);
const inputPatientPhone: any = useRef(null);
const inputPatientEmail: any = useRef(null);

  return (
    <div className='flex justify-center flex-col'>
      {/* <SearchBar></SearchBar> */}
      <button  onClick={()=>setShowingAddPatientModal(true)} className='main-green self-end m-2'><span><i className="fa-solid fa-plus"></i></span>Agregar</button>
      
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
         
          {/* <tr>
            <td>402-1202426-5</td>
            <td>Jacque Ventura</td>
            <td>A+</td>
            <td style={{color:'#002A54'}}>
            <a href="https://api.whatsapp.com/send?phone=18299278886" target="_blank" className='underline'>829-927-8886</a>
            <br/>
              <a href="mailto:jacque.evander.ventura@gmail.com" target="_blank" className='underline'  >jacque.evander.ventura@gmail.com</a>
            </td>
            <td className='flex justify-center space-x-2 h-[100%]'>
                <button className='w-14 bg-blue-500 '><i className="fa-solid fa-clipboard-list"></i></button>
                <button className='w-14 bg-green-500'><i className="fa-solid fa-pen-to-square"></i></button>
                <button className='w-14 bg-red-500'><i className="fa-solid fa-user-xmark"></i></button>
              </td>
          </tr> */}
          {/* {usingDummyData? dummyData.map((dummy, index)=>
            <tr key={index}>
              <td className="max-w-fit">{dummy.id}</td>
              <td>{dummy.first_name} {dummy.last_name}</td>
              <td>{dummy.blood_type.toUpperCase()}</td>
              <td style={{color:'#002A54'}}>
               <a rel='noreferrer' title='Abrir en WhatsApp' href={"https://api.whatsapp.com/send?phone=1" + dummy.phone.replaceAll(/([() -])/g, "")} target="_blank" className='underline'> <i className="fa-brands fa-whatsapp"></i>{dummy.phone}</a>
              <br/>
              <a rel='noreferrer' title='Abrir en correo' href={"mailto:"+dummy.email} target="_blank" className='underline'  >{dummy.email}</a>
              </td>
              <td className='space-x-2'>
                <button aria-label='Ver historial clínico' title='Historial clínico' className='w-14 bg-blue-500 '><i className="fa-solid fa-clipboard-list"></i></button>
                <button aria-label='Editar paciente' title='Editar paciente' className='w-14 bg-green-500'><i className="fa-solid fa-pen-to-square"></i></button>
                <button aria-label='Eliminar paciente ' title='Eliminar paciente' className='w-14 bg-red-500'><i className="fa-solid fa-user-xmark"></i></button>
              </td>
            </tr>
            )
            :
            // null
             
            } */}
            {patients.map((patient:any, index:number)=>
            <tr key={index}>
              <td ref={inputPatientId} className="max-w-fit">{patient.id}</td>
              <td><span ref={inputPatientFirstName}>{patient.firstName}</span> <span ref={inputPatientLastName}>{patient.lastName}</span></td>
              <td ref={inputPatientBloodType}>{patient.bloodType.toUpperCase()}</td>
              <td style={{color:'#002A54'}}>
               <a rel='noreferrer' title='Abrir en WhatsApp' href={"https://api.whatsapp.com/send?phone=1" + patient.phone.replaceAll(/([() -])/g, "")} target="_blank" className='underline'> <i className="fa-brands fa-whatsapp"></i><span ref={inputPatientPhone}>{patient.phone}</span></a>
              <br/>
              <a ref={inputPatientEmail} rel='noreferrer' title='Abrir en correo' href={"mailto:"+patient.email} target="_blank" className='underline'  >{patient.email}</a>
              </td>
              <td className='space-x-2'>
                <button onClick={()=> setShowingClinicalHistoryPatientModal(true)} aria-label='Ver historial clínico' title='Historial clínico' className='w-14 bg-blue-500 '><i className="fa-solid fa-clipboard-list"></i></button>
                <button onClick={()=> setShowingEditPatientModal(true)} aria-label='Editar paciente' title='Editar paciente' className='w-14 bg-green-500'><i className="fa-solid fa-pen-to-square"></i></button>
                <button onClick={()=> dispatch({type: actionPATIENT.DELETE_PATIENT, payload:{id: patient.id}})} aria-label='Eliminar paciente ' title='Eliminar paciente' className='w-14 bg-red-500'><i className="fa-solid fa-user-xmark"></i></button>
              </td>
          
            </tr>
            )}
        </tbody>
      </table>
      :
      <table>
        <tbody>
        {patients.map((patient:any, index:number)=>
            
          <tr key={index}>
            <td className='rounded-md shadow-2xl'>
              <strong>💳</strong> {patient.id} <br/>
            
               {patient.firstName} {patient.lastName}  <br/>
              <strong>💉🩸</strong> {patient.bloodType.toUpperCase()} <br/>
              <strong>📞</strong> <a rel='noreferrer' href={"https://api.whatsapp.com/send?phone=1" + patient.phone.replaceAll(/([() -])/g, "")} target="_blank" className='underline'>{patient.phone}</a> <br/>
              <strong>📨</strong> <a rel='noreferrer' href={"mailto:"+patient.email} target="_blank" className='underline'>{patient.email}</a><br/>
            </td>
          </tr>
            )}
        </tbody>
      </table>
      }

      {isShowingAddPatientModal   && <PacienteModal contextTitle='Agregar' contextButton='Agregar' setShowingModal={setShowingAddPatientModal } />}
      {isShowingClinicalHistoryPatientModal && <ClinicalHistoryModal setShowingModal={setShowingClinicalHistoryPatientModal} id={inputPatientId.current.textContent} firstName={inputPatientFirstName.current.textContent} lastName={inputPatientLastName.current.textContent} bloodType={inputPatientBloodType.current.textContent} phone={inputPatientPhone.current.textContent} email={inputPatientEmail.current.textContent}/>}
      {isShowingEditPatientModal  && <PacienteModal contextTitle='Editar' contextButton='Actualizar' setShowingModal={setShowingEditPatientModal} id={inputPatientId.current.textContent} firstName={inputPatientFirstName.current.textContent} lastName={inputPatientLastName.current.textContent} bloodType={inputPatientBloodType.current.textContent} phone={inputPatientPhone.current.textContent} email={inputPatientEmail.current.textContent} />}
    </div>
    
  )
}
