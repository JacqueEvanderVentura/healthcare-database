import React, { useState } from "react";
import isLogged from "./Logic/isLogged";

import { LoginView } from "./Views/Login/LoginView";
import { Navbar } from "./Components/Navbar/Navbar";
import { Routing } from "./Routing";
import { RegisterView } from "./Views/Register/RegisterView";
import { Login } from "./Components/LoginRegister/Login/Login";

function App() {
  const [token, setToken] = useState(false);

  return (
    <React.Fragment>
      <Routing />
    </React.Fragment>
  );
}

export default App;
