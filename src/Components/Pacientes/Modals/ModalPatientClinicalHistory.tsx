export const ModalPatientClinicalHistory = ({
  setShowingModal,
  patient,
}: any) => {
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
        <h4 className="self-center">Perfil clínico</h4>
        <hr className="mt-1" />
        <div className="text-center space-y-1">
          <div>
            <h6>Identificación</h6>
            <span><i className="fa-solid fa-id-card text-amber-300"></i> {patient.id}</span>
          </div>

          <div>
            <h6>Nombre completo:</h6>
            <span>
            { patient.gender === "Male"?"👨"  :
              patient.gender === "Female"?"👩":"😄"} {patient.firstName} {patient.lastName}
            </span>
          </div>
          
          <div>
            <h6>Tipificación:</h6>
            <span><i className="fa-solid fa-droplet text-red-600"></i> {patient.bloodType}</span>
          </div>
          
          <div>
            <h6>Telefono/Celular:</h6>
            <a href={"https://api.whatsapp.com/send?phone=1" + patient.phone.replaceAll(/([() -])/g, "")} target="_blank" rel="noreferrer" className='underline'><i className="fa-brands fa-whatsapp text-green-600"></i> {patient.phone}</a>
          </div>
          
          <div>
            <h6>Email:</h6>
            <a href={"mailto:"+patient.email} target="_blank" rel="noreferrer" className='underline'  ><i className="fa-solid fa-envelope text-blue-500"></i>{patient.email}</a>
          </div>
        
          <div>
            <h6>Alergias:</h6>
            {patient.allergies > 0?
            patient.allergies.map((allergy:any)=>
             <span key={allergy} className="allergies-and-pathologies">{allergy || "No tiene"}</span>
             )
             :
             <span className="allergies-and-pathologies">Ninguna</span>
          }
          </div>

          <div  >
            <h6>Patologías:</h6>
            <div >

            {patient.pathologies.length > 0?
            patient.pathologies.map((pathology:any)=>
             <span key={pathology} className="allergies-and-pathologies only-3-items-per-row">{ pathology }</span>
             )
            :
            <span className="allergies-and-pathologies only-3-items-per-row">Ninguna</span>
          }         
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
