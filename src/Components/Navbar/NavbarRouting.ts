import { Calendario } from "../Calendario/Calendario";
import { Pacientes } from "../Pacientes/Pacientes";
import { MedicoView } from "../../Views/Medico/MedicoView";
export const navbarRouting = [
  {
    path: "medico",
    content: "Médico",
    element: MedicoView,
    children: [
      {
        path: "calendario",
        content: "Calendario",
        element: Calendario,
      },
      {
        path: "pacientes",
        content: "Pacientes",
        element: Pacientes,
      },
    ],
  },
];
