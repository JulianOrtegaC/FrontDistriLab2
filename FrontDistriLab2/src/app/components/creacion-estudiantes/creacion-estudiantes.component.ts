import { Component } from '@angular/core';
import { EstudiantesService } from 'src/app/service/EstudiantesService';
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

  imageSrc!: string; // Variable para almacenar la URL de datos de la imagen

  onFileDrop(event: DragEvent) {
    event.preventDefault();
    const files = (event.dataTransfer as DataTransfer).files;
    this.uploadFiles(files);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  uploadFiles(files: FileList) {
    // Leer la imagen como una URL de datos
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageSrc = event.target.result;
    };
    reader.readAsDataURL(files[0]);
  }
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
