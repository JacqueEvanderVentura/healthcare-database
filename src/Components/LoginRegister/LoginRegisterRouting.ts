import { LoginView } from "../../Views/Login/LoginView";
import { RegisterView } from "../../Views/Register/RegisterView";

export const LoginRegisterRouting = [
        {
          path: "/login",
          content: "Ingresa",
          element: LoginView,
        },
        {
          path: "/register",
          content: "Regístrate",
          element: RegisterView,
        },
      ];