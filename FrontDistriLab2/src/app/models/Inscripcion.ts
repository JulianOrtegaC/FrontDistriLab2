import { Estudiantes, Materias } from "./Materias";

export interface Inscripcion {
  idInscription: number;
  codStudent: string;
  nameStudent: string;
  codSubject: number;
  nameSubject: string;
  dateRegistration: string;
}
