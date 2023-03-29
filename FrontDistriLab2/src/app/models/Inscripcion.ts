import { Estudiantes, Materias } from "./Materias";

export interface Inscripcion {
  idInscription: number;
  codStudent: string;
  codSubject: number;
  dateRegistration: string;
}
