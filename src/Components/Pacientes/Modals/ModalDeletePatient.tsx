import {useDispatch} from 'react-redux'
import { actionPATIENT } from '../../../Logic/Patient/actionsPATIENT';

export const ModalDeletePatient = ({setShowingModal, patientId}:any) => {
    const dispatch = useDispatch();
    
    function handleDeletePatient(){
        setShowingModal(false);
        dispatch({type: actionPATIENT.DELETE_PATIENT, payload:{id: patientId}})
    }
  return (
    <div className='modal'>
           <div className="card  w-[40%] min-w-fit">
        <button
          aria-label="Cerrar"
          className="bg-red-500 hover:bg-red-600 max-h-fit max-w-fit min-h-fit m-0 h-8 py-0  px-2 self-end transition-all hover:transition-all"
          onClick={() => setShowingModal(false)}
        >
          <i className="fa-solid fa-x"></i>
        </button>
        <h4><span className="text-red-600">Eliminar</span> paciente</h4>
        <hr />
<p>¿Está seguro de querer eliminar al paciente de Identificación {patientId}?
</p>
<p>No perderá los registros ni el historial de dicho paciente si procede...</p>
        <button className='bg-red-600'
    onClick={handleDeletePatient}
    >
      Eliminar paciente
        </button>
        </div>
    </div>
  )
}
