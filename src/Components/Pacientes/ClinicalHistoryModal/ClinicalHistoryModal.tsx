import React from 'react'
import { useSelector } from 'react-redux'
import './ClinicalHistoryModal.scss'
export const ClinicalHistoryModal = ({setShowingModal, id, firstName, lastName, bloodType, phone, email}:any) => {
    const pathologies = useSelector((state:any) => state.patient);
    console.log(pathologies.filter((pat:any)=>pat.id === id).map((pater:any)=>pater.pathologies))
  return (
    <div className='modal'>
        <div className="card w-[40vw] min-w-fit">
      <button onClick={()=>setShowingModal(false)} aria-label='Cerrar ventanilla añadir paciente' className='bg-red-500 max-w-fit max-h-fit m-0 py-1 px-2 self-end' ><span><i className="fa-solid fa-x"></i></span></button>

            <strong>Identificación:</strong> {id}
            <br />
            <strong>Nombre completo:</strong> {firstName + " " + lastName}
            <br />
            <strong>Tipificación</strong> {bloodType}
            <br />
            <strong>Número telefónico:</strong> {phone}
            <br />
            <strong>Email:</strong> {email}
            <br />
            <strong>Patologías</strong>
            <table>
                <tbody className='pathologies'>
     {pathologies.filter((pat:any)=>pat.id === id).map((pater:any)=><td>{pater.pathologies}</td>)}
                </tbody>
            </table>
        </div>
    </div>
  )
}
