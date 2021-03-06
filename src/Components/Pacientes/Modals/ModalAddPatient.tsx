import { useState } from "react";
import { useDispatch } from "react-redux";
import { allergies } from "../../../Assets/allergies";
import { bloodTypes } from "../../../Assets/blood-types";
import { pathologies } from "../../../Assets/pathologies";
import { actionPATIENT } from "../../../Logic/Patient/actionsPATIENT";
import "./Modals.scss";

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
    pathologies: [],
    allergies: [],
    created: Date.now(),
    lastModification: Date.now(),
  });

  function onChangePatientInfoHandler(e: any) {
    setPatientInfo({ ...patientInfo, [e.target.name]: e.target.value });
  }

  function onChangeMultiplePatientInfoHandler(e: any) {
    setPatientInfo({
      ...patientInfo,
      [e.target.name]: Array.from(
        e.target.selectedOptions,
        (option: any) => option.value
      ),
    });
  }
  function handleAddPatient(e: any) {
    e.preventDefault();
    setShowingModal(false);
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
        <h4 className="self-start">Agregar paciente</h4>
        <hr className="mt-1" />

        <form onSubmit={handleAddPatient} className="modalFormatInput">
          <label htmlFor="inputAddIdentification">Cédula o pasaporte:</label>
          <input
            required
            name="id"
            onChange={onChangePatientInfoHandler}
            id="inputAddIdentification"
            type="text"
          />

          <label htmlFor="inputAddFirstName">Primer nombre:</label>
          <input
            required
            name="firstName"
            onChange={onChangePatientInfoHandler}
            id="inputAddFirstName"
            type="text"
          />

          <label htmlFor="inputAddLastName">Primer Apellido:</label>
          <input
            required
            name="lastName"
            onChange={onChangePatientInfoHandler}
            id="inputAddLastName"
            type="text"
          />

          <div className="flex flex-row justify-around">
            <div>
              <label htmlFor="inputSelectGender">Género:</label>
              <select
                required
                name="gender"
                onChange={onChangePatientInfoHandler}
                id="inputSelectGender"
                defaultValue=""
              >
                <option value="" disabled>
                  -- Seleccionar género --
                </option>
                <option value="Male">Masculino</option>
                <option value="Female">Femenino</option>
                <option value="Other">Otro</option>
              </select>
            </div>

            <div>
              <label htmlFor="inputSelectBloodTypes">Tipo de sangre:</label>
              <select
                title="Seleccionar tipo"
                name="bloodType"
                onChange={onChangePatientInfoHandler}
                id="inputSelectBloodTypes"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  -- Seleccionar tipo --
                </option>
                {bloodTypes.map((bloodType) => (
                  <option key={bloodType} value={bloodType}>
                    {bloodType}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex space-x-2 mt-2">
            <div>
              <label htmlFor="inputSelectAllergies">Alergias:</label>
              <select
                onChange={onChangeMultiplePatientInfoHandler}
                name="allergies"
                defaultValue="Ninguna alergia"
                id="inputSelectAllergies"
                multiple
              >
                <option value="Ninguna alergia" disabled>
                  -- Seleccionar alergias --
                </option>
                <option value="Ninguna alergia">Ninguna</option>
                {allergies.map((allergy) => (
                  <option key={allergy} value={allergy}>
                    {allergy.charAt(0).toUpperCase() + allergy.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="inputSelectPathologies">Patologías:</label>
              <select
                onChange={onChangeMultiplePatientInfoHandler}
                defaultValue="Ninguna patología"
                name="pathologies"
                id="inputSelectPathologies"
                multiple={true}
              >
                <option value="Ninguna patología" disabled>
                  -- Seleccionar patologías --
                </option>
                <option value="Ninguna patología">Ninguna</option>
                {pathologies.map((pathology: any, index: number) => (
                  <option key={index} value={pathology}>
                    {pathology}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <label htmlFor="inputAddPhone">Teléfono o celular:</label>
          <input
            name="phone"
            onChange={onChangePatientInfoHandler}
            id="inputAddPhone"
            type="tel"
          />

          <label htmlFor="inputAddEmail">Email:</label>
          <input
            name="email"
            onChange={onChangePatientInfoHandler}
            id="inputAddEmail"
            type="email"
          />

          <button className="main-green m-2 justify-self-end pr-3 transition-all hover:transition-all hover:bg-green-500 ">
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
