
export interface Materias {
    codSubject: number;
    nameSubject: string;
    quotas: number;
    statusSubject: string;
    
}
export interface Estudiantes{
    codStudent:number;
    firstNameStudent:string;
    lastNameStudent:string;
    typeDocument:string;
    numDocument:string;
    statusStudent:string;
    genderStudent:string;
    pathStudent:string | null;
}


export interface LoginInfo{
    email: string;
    password: string;
  }
export interface Registro{
    nameuser:string;
    email:string;
    password: string;
}