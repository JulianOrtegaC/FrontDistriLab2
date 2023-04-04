import { Component } from '@angular/core';

@Component({
  selector: 'app-creacion-estudiantes',
  templateUrl: './creacion-estudiantes.component.html',
  styleUrls: ['./creacion-estudiantes.component.css']
})
export class CreacionEstudiantesComponent  {
  firstNameStudent!:string;
  lastNameStudent!:string;
  typeDocument!:string;
  numDocument!:string;
  statusStudent!:string;
  genderStudent!:string;
  
  
  get CreacionEstudiantes()  {
    return this.firstNameStudent && this.lastNameStudent && this.typeDocument && this.numDocument && this.statusStudent && this.genderStudent;

  }
  

  crearNuevoEstudiante(){
  };
}
