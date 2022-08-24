import { Navigate, Route, Routes } from 'react-router-dom';
import { navbarRouting } from './Components/Navbar/NavbarRouting';
import { LoginRegisterRouting } from './Components/LoginRegister/LoginRegisterRouting';



export const Routing = () => {
  return (
    <Routes>

      <Route path='/' element={<Navigate to="/login" replace/>}/>

      {/* Navbar */}
      <Route path='/medico' element={<Navigate to='/medico/pacientes' replace />}></Route>
      {navbarRouting.map(navItem=>
        <Route key={navItem.path} path={navItem.path} element={navItem.element()}>
          {navItem.children.map(child=>
          <Route key={child.path} path={child.path} element={child.element()}></Route>
            )}
        </Route>
        )}


      {/* Login */}
      {LoginRegisterRouting.map(loginRegisterItem=>
        <Route key={loginRegisterItem.path} path={loginRegisterItem.path} element={loginRegisterItem.element()}></Route>
        )}

    </Routes>

   
  )
}


