import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bloodTypes } from "../../../Assets/blood-types";
import { actionLOGIN } from "../../../Logic/Login/actionsLOGIN";
import { actionPATIENT } from "../../../Logic/Patient/actionsPATIENT";

export const ModalEditPatient = ({
  setShowingModal,
  patientId,
  patients,
}: any) => {
  const selectedPatient = patients.filter(
    (patient: any) => patient.id === patientId
  );

  const [patientInfo, setPatientInfo] = useState({
    id: selectedPatient[0].id,
    firstName: selectedPatient[0].firstName,
    lastName: selectedPatient[0].lastName,
    gender: selectedPatient[0].gender,
    bloodType: selectedPatient[0].bloodType,
    phone: selectedPatient[0].phone,
    email: selectedPatient[0].email,
    pathologies: selectedPatient[0].pathologies,
    allergies: selectedPatient[0].allergies,
    lastModification: Date.now(),
  });

  function onChangePatientInfoHandler(e: any) {
    setPatientInfo({ ...patientInfo, [e.target.name]: e.target.value });
  }
  const dispatch = useDispatch();
  function handleEditPatient(e: any) {
    e.preventDefault();
    dispatch({type:actionPATIENT.EDIT_PATIENT, payload:patientInfo})
    setShowingModal(false)
  }
  return (
    <div id="modalEditPatient" className="modal">
      <div className="card  w-[40%] min-w-fit">
        <button
          aria-label="Cerrar"
          className="bg-red-500 hover:bg-red-600 max-h-fit max-w-fit min-h-fit m-0 h-8 py-0  px-2 self-end transition-all hover:transition-all"
          onClick={() => setShowingModal(false)}
        >
          <i className="fa-solid fa-x"></i>
        </button>
        <h3 className="self-start">Editar paciente</h3>
        <hr className="mt-1" />

        <form onSubmit={handleEditPatient}>
          <label htmlFor="inputEditIdentification">Cédula o pasaporte:</label>
          <input
            disabled
            value={patientInfo.id}
            name="id"
            id="inputEditIdentification"
            type="text"
          />

          <label htmlFor="inputEditFirstName">Primer nombre:</label>
          <input
            disabled
            value={patientInfo.firstName}
            name="firstName"
            id="inputEditFirstName"
            type="text"
          />

          <label htmlFor="inputEditLastName">Primer Apellido:</label>
          <input
            disabled
            value={patientInfo.lastName}
            name="lastName"
            id="inputEditLastName"
            type="text"
          />

          <label htmlFor="inputSelectGender">Género:</label>
          <select
            disabled
            value={patientInfo.gender}
            name="gender"
            id="inputSelectGender"
            // defaultValue="DEFAULT-GENDER"
          >
            <option value="DEFAULT-GENDER" disabled>
              -- Elegir género --
            </option>
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
            <option value="other">Otro</option>
          </select>

          <label htmlFor="inputSelectBloodTypes">Tipo de sangre:</label>
          <select
            disabled
            title="Elegir tipo"
            // defaultValue="DEFAULT-BLOOD-TYPE"
            value={patientInfo.bloodType}
            onChange={onChangePatientInfoHandler}
            name="bloodType"
            id="inputSelectBloodTypes"
          >
            <option value="DEFAULT-BLOOD-TYPE" disabled>
              -- Elegir tipo --
            </option>
            {bloodTypes.map((bloodType) => (
              <option key={bloodType} value={bloodType}>
                {bloodType}
              </option>
            ))}
          </select>

          <label htmlFor="inputEditPhone">Teléfono o celular:</label>
          <input
            value={patientInfo.phone}
            onChange={onChangePatientInfoHandler}
            name="phone"
            id="inputEditPhone"
            type="tel"
          />

          <label htmlFor="inputEditEmail">Email:</label>
          <input
            value={patientInfo.email}
            onChange={onChangePatientInfoHandler}
            name="email"
            id="inputEditEmail"
            type="email"
          />

          <button className="main-green m-2 self-end pr-3 transition-all hover:transition-all hover:bg-green-500 ">
            <span>
              <i className="fa-solid fa-check"></i>
            </span>
            Actualizar
          </button>
        </form>
      </div>
    </div>
  );
};
