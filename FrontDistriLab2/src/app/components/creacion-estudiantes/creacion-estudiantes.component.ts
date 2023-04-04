import { Component } from '@angular/core';
import { EstudiantesService } from 'src/app/service/EstudiantesService';
import { EstudiantesComponent } from '../estudiantes/estudiantes.component';
import { Estudiantes } from 'src/app/models/Materias';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creacion-estudiantes',
  templateUrl: './creacion-estudiantes.component.html',
  styleUrls: ['./creacion-estudiantes.component.css']
})
export class CreacionEstudiantesComponent {
  firstNameStudent!: string;
  lastNameStudent!: string;
  typeDocument!: string;
  numDocument!: string;
  statusStudent!: string;
  genderStudent!: string;
  constructor(private estudiantesService: EstudiantesService, private router: Router) {

  }

  get CreacionEstudiantes() {
    return this.firstNameStudent && this.lastNameStudent && this.typeDocument && this.numDocument && this.statusStudent && this.genderStudent;

  }


  crearNuevoEstudiante() {
    const auxEstudiante: Estudiantes = {
      codStudent: 0,
      firstNameStudent: this.firstNameStudent,
      lastNameStudent: this.lastNameStudent,
      typeDocument: this.typeDocument,
      numDocument: this.numDocument,
      statusStudent: this.statusStudent,
      genderStudent: this.genderStudent


    }
    this.estudiantesService.crearEstudiante(auxEstudiante).subscribe({

      next: (res: any) => {
        this.router.navigate(['estudiantes']);
      },
      error: (err) => {
        console.log(err.message)
      }
    })
  };
}
