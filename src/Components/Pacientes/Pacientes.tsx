import {useState} from 'react';
import { useSelector } from 'react-redux';

import './Pacientes.scss';

import { SearchBar } from '../SearchBar/SearchBar';
import { ModalAddPatient } from './Modals/ModalAddPatient';
import { ModalEditPatient } from './Modals/ModalEditPatient';

import { dummyData } from './dummy-data';
import { ModalPatientClinicalHistory } from './Modals/ModalPatientClinicalHistory';
import { storePatient } from '../../Logic/Patient/storePatient';


export const Pacientes = () => {
  let [isShowingAddModal, setShowingAddModal] = useState(false);
  let [isShowingEditModal, setShowingEditModal] = useState(false);
  let [isShowingClinicalHistoryModal, setShowingClinicalHistoryModal] = useState(false);
  let [patient, setPatient] = useState(null);
  let [patientId, setPatientId] = useState(null)
  const patients = useSelector((state:any)=>state.patient)
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

  function handleShowEditModal(patientId:any){
    setShowingEditModal(true)
    setPatientId(patientId)
  }
  function handleShowClinicalHistory(patient:any){
    setShowingClinicalHistoryModal(true);
    setPatient(patient)
  }
  
    return (
    <div className='flex justify-center flex-col'>
      <SearchBar></SearchBar>
      <button  onClick={()=>setShowingAddModal(true)} className='main-green self-end m-2 pr-3 hover:bg-green-500 transition-all hover:transition-all'><i className="fa-solid fa-plus"></i>Agregar</button>
      
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
          {patients.map((patient:any, index:number)=>
            <tr key={index}>
              <td className="max-w-fit">{patient.id}</td>
              <td>{patient.firstName} {patient.lastName}</td>
              <td>{patient.bloodType}</td>
              <td style={{color:'#002A54'}}>
              <a href={"https://api.whatsapp.com/send?phone=1" + patient.phone} target="_blank" rel="noreferrer" className='underline'><i className="fa-brands fa-whatsapp"></i> {patient.phone}</a>
              <br/>
              <a href={"mailto:"+patient.email} target="_blank" rel="noreferrer" className='underline'  ><i className="fa-solid fa-envelope"></i>{patient.email}</a>
              </td>
              <td className='space-x-2'>
                <button onClick={()=>handleShowClinicalHistory(patient)} aria-label='Historial clínico' title='Historial clínico' className='w-14 bg-blue-500 border border-blue-500 hover:border-white transition-all hover:transition-all'><i className="fa-solid fa-clipboard-list"></i></button>
                <button onClick={()=>handleShowEditModal(patient.id)} aria-label='Editar paciente' title='Editar paciente' className='w-14 bg-green-500 border border-green-500 hover:border-white transition-all hover:transition-all '><i className="fa-solid fa-pen-to-square"></i></button>
                <button aria-label='Eliminar paciente' title='Eliminar paciente' className='w-14 bg-red-500 border border-red-500 hover:border-white transition-all hover:transition-all '><i className="fa-solid fa-user-xmark"></i></button>
              </td>
            </tr>
            )}
        </tbody>
      </table>
      :
      <table>
        <tbody>
          {dummyData.map((dummy, index)=>
            
          <tr key={index}>
            <td className='rounded-md shadow-2xl'>
              <strong>💳</strong> {dummy.id} <br/>
              {dummy.gender === "Male"?"👨":
               dummy.gender === "Female"?"👩":"😄"} {dummy.firstName} {dummy.lastName}  <br/>
              <strong>💉🩸</strong> {dummy.bloodType.toUpperCase()} <br/>
              <strong>📞</strong> <a href={"https://api.whatsapp.com/send?phone=1" + dummy.phone.replaceAll(/([() -])/g, "")} target="_blank" rel="noreferrer" className='underline'>{dummy.phone}</a> <br/>
              <strong>📨</strong> <a href={"mailto:"+dummy.email} target="_blank" rel="noreferrer" className='underline'>{dummy.email}</a><br/>
            </td>
          </tr>
            )}
        </tbody>
      </table>
      }
      {isShowingAddModal && 
      <ModalAddPatient setShowingModal={setShowingAddModal} />
      }
      {
        isShowingEditModal &&
        <ModalEditPatient setShowingModal={setShowingEditModal} patientId={patientId} patients={patients} />
      }
      {
        isShowingClinicalHistoryModal &&
        <ModalPatientClinicalHistory setShowingModal={setShowingClinicalHistoryModal} patient={patient} />
      }
    </div>
    
  )
}
