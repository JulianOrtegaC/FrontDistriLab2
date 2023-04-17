import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseMaterias } from 'src/app/models/ResponseMaterias';
import { MateriasService } from 'src/app/service/MateriasService';

@Component({
  selector: 'app-creacion-materias',
  templateUrl: './creacion-materias.component.html',
  styleUrls: ['./creacion-materias.component.css']
})
export class CreacionMateriasComponent {
  nameSubject!: string;
  quotas!: number;
  statusSubject!: string;

  constructor(private materiasService: MateriasService, private router: Router) {}

  get CreacionMateria() {
    return this.nameSubject && this.quotas && this.statusSubject;
  }

  crearNuevaeMateria() {
    const auxMateria: ResponseMaterias = {
      nameSubject: this.nameSubject,
      quotas: this.quotas,
      statusSubject: this.statusSubject
    }
    if(auxMateria.statusSubject.length==0){
      alert("El estado de la materia no puede ser vacio");
      return;
    }

    if(auxMateria.nameSubject.length==0){
      alert("El nombre de la materia no puede ser vacio");
      return;
    }
    this.materiasService.addMateria(auxMateria).subscribe({
      next: (res: any) => {
        this.router.navigate(['materias']);
      },
      error: (err) => {
        console.log(err.message)
      }
    })
  };
}
