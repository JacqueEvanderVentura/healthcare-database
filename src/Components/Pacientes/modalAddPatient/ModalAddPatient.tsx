import { useState } from "react";
import { useDispatch } from "react-redux";
import { bloodTypes } from "../../../Assets/blood-types";
import { actionPATIENT } from "../../../Logic/Patient/actionsPATIENT";

export const ModalAddPatient = ({ setShowingModal }: any) => {
  const dispatch = useDispatch();

  const [patientInfo, setPatientInfo] = useState({
    id: "",
    firstName: "",
    lastName: "",
    gender: "",
    bloodType: "",
    phone: "",
    email: "",
    pathologies: "",
    allergies: "",
  });

	function onChangePatientInfoHandler (e: any) {
		setPatientInfo({...patientInfo, [e.target.name]: e.target.value})
	};

	function handleAddPatient(e: any) {
    e.preventDefault();
    dispatch({ type: actionPATIENT.ADD_PATIENT, payload: patientInfo });
  }
  return (
    <div id="modalAddPatient" className="modal">
      <div className="card  w-[40%] min-w-fit">
        <button
          aria-label="Cerrar"
          className="bg-red-500 hover:bg-red-600 max-h-fit max-w-fit min-h-fit m-0 h-8 py-0  px-2 self-end transition-all hover:transition-all"
          onClick={() => setShowingModal(false)}
        >
          <i className="fa-solid fa-x"></i>
        </button>
        <h3 className="self-start">Agregar paciente</h3>
        <hr className="mt-1" />

        <form onSubmit={handleAddPatient}>
          <label htmlFor="inputAddIdentification">Cédula o pasaporte:</label>
          <input name="id" onChange={onChangePatientInfoHandler} id="inputAddIdentification" type="text" />

          <label htmlFor="inputAddFirstName">Primer nombre:</label>
          <input  name="firstName" onChange={onChangePatientInfoHandler} id="inputAddFirstName" type="text" />

          <label htmlFor="inputAddLastName">Primer Apellido:</label>
          <input  name="lastName" onChange={onChangePatientInfoHandler} id="inputAddLastName" type="text" />

          <label htmlFor="inputSelectGender">Género:</label>
          <select  name="gender" onChange={onChangePatientInfoHandler} id="inputSelectGender" defaultValue="DEFAULT-GENDER">
            <option value="DEFAULT-GENDER" disabled>
              -- Elegir género --
            </option>
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
            <option value="other">Otro</option>
          </select>

          <label htmlFor="inputSelectBloodTypes">Tipo de sangre:</label>
          <select
            title="Elegir tipo"
            defaultValue="DEFAULT-BLOOD-TYPE"
            name="bloodType"
						onChange={onChangePatientInfoHandler}
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

          <label htmlFor="inputAddPhone">Teléfono o celular:</label>
          <input  name="phone" onChange={onChangePatientInfoHandler} id="inputAddPhone" type="tel" />

          <label htmlFor="inputAddEmail">Email:</label>
          <input  name="email" onChange={onChangePatientInfoHandler} id="inputAddEmail" type="email" />

          <button
            className="main-green m-2 self-end pr-3 transition-all hover:transition-all hover:bg-green-500 "
          >
            <span>
              <i className="fa-solid fa-plus"></i>
            </span>
            Agregar
          </button>
        </form>
      </div>
    </div>
  );
};
