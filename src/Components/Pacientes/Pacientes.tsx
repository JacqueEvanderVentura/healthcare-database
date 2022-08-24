import { useState } from "react";
import { useSelector } from "react-redux";

import "./Pacientes.scss";

import { SearchBar } from "../SearchBar/SearchBar";
import { ModalAddPatient } from "./Modals/ModalAddPatient";
import { ModalEditPatient } from "./Modals/ModalEditPatient";
import { ModalPatientClinicalHistory } from "./Modals/ModalPatientClinicalHistory";
import { ModalDeletePatient } from "./Modals/ModalDeletePatient";

import { dummyData } from "./dummy-data";
import { pattern } from "../../Logic/RegexPatterns/patterns";
import { isMobile } from "../../Logic/isMobile";

export const Pacientes = () => {
  let [isShowingAddModal, setShowingAddModal] = useState(false);
  let [isShowingClinicalHistoryModal, setShowingClinicalHistoryModal] =
    useState(false);
  let [isShowingEditModal, setShowingEditModal] = useState(false);
  let [isShowingDeleteModal, setShowingDeleteModal] = useState(false);

  let [patient, setPatient] = useState(null);
  let [patientId, setPatientId] = useState(null);

  const patients = useSelector((state: any) => state.patient);
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

  function handleShowClinicalHistory(patient: any) {
    setShowingClinicalHistoryModal(true);
    setPatient(patient);
  }
  function handleShowEditModal(patientId: any) {
    setShowingEditModal(true);
    setPatientId(patientId);
  }
  function handleDeletePatient(patientId: any) {
    setShowingDeleteModal(true);
    setPatientId(patientId);
  }

  return (
    <div className="flex justify-center flex-col">
      <button
        onClick={() => setShowingAddModal(true)}
        className="bg-main-green self-end m-2 pr-3 hover:bg-green-500 transition-all hover:transition-all"
        >
        <i className="fa-solid fa-plus"></i>Agregar
      </button>
        <SearchBar></SearchBar>

      {isMobile() ? (
      
        <table>
          <tbody>
            {dummyData.map((dummy, index) => (
              <tr key={index}>
                <td className="rounded-md shadow-2xl">
                  <strong>💳</strong> {dummy.id} <br />
                  {dummy.gender === "Male"
                    ? "👨"
                    : dummy.gender === "Female"
                    ? "👩"
                    : "😄"}{" "}
                  {dummy.firstName} {dummy.lastName} <br />
                  <strong>💉🩸</strong> {dummy.bloodType.toUpperCase()} <br />
                  <strong>📞</strong>{" "}
                  <a
                    href={
                      "https://api.whatsapp.com/send?phone=1" +
                      dummy.phone.replaceAll(/([() -])/g, "")
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    {dummy.phone}
                  </a>{" "}
                  <br />
                  <strong>📨</strong>{" "}
                  <a
                    href={"mailto:" + dummy.email}
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    {dummy.email}
                  </a>
                  <br />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
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
          {patients.length > 0 ? (
            patients.map((patient: any, index: number) => (
              <tr key={index}>
                <td className="max-w-fit">{patient.id}</td>
                <td>
                  {patient.firstName} {patient.lastName}
                </td>
                <td>{patient.bloodType}</td>
                <td>
                 {patient.phone?
                  <a
                    href={
                      "https://api.whatsapp.com/send?phone=1" + patient.phone.replace(pattern.clearNotDigits, "")
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-[#002A54] duration-300 hover:duration-300"
                  >
                    <i className="fa-brands fa-whatsapp"></i> {patient.phone.replace(pattern.clearNotDigits, "").replace(pattern.formatPhone1of2, pattern.formatPhone2of2)}
                  </a>
                  :
                  <em>No hay número telefónico asociado</em>  
                }
                  <br />
                  {patient.email?
                    <a
                    href={"mailto:" + patient.email}
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-[#002A54] duration-300 hover:duration-300"
                  >
                    <i className="fa-solid fa-envelope"></i>
                    {patient.email}
                  </a>
                  :
                  <em>No hay correo electrónico asociado</em>
                  }
                </td>
                <td className="space-x-2">
                  <button
                    onClick={() => handleShowClinicalHistory(patient)}
                    aria-label="Historial clínico"
                    title="Historial clínico"
                    className="w-14 bg-blue-500 border border-blue-500 hover:border-white duration-300 hover:duration-300"
                  >
                    <i className="fa-solid fa-clipboard-list"></i>
                  </button>
                  <button
                    onClick={() => handleShowEditModal(patient.id)}
                    aria-label="Editar paciente"
                    title="Editar paciente"
                    className="w-14 bg-green-500 border border-green-500 hover:border-white duration-300 hover:duration-300 "
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    onClick={() => handleDeletePatient(patient.id)}
                    aria-label="Eliminar paciente"
                    title="Eliminar paciente"
                    className="w-14 bg-red-500 border border-red-500 hover:border-white duration-300 hover:duration-300 "
                  >
                    <i className="fa-solid fa-user-xmark"></i>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>
                <em>No hay pacientes registrados</em>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      )}
      {isShowingAddModal && (
        <ModalAddPatient setShowingModal={setShowingAddModal} />
      )}
      {isShowingEditModal && (
        <ModalEditPatient
          setShowingModal={setShowingEditModal}
          patientId={patientId}
          patients={patients}
        />
      )}
      {isShowingClinicalHistoryModal && (
        <ModalPatientClinicalHistory
          setShowingModal={setShowingClinicalHistoryModal}
          patient={patient}
        />
      )}
      {isShowingDeleteModal && (
        <ModalDeletePatient
          setShowingModal={setShowingDeleteModal}
          patientId={patientId}
        />
      )}
    </div>
  );
};
