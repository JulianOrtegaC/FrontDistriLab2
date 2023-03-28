import { Component, OnInit } from '@angular/core';

export interface Inscripcion {
  id_inscripcion: number,
  cod_materia: number;
  cod_estudiante: string
}

const ELEMENT_DATA: Inscripcion[] = [
  {id_inscripcion: 1, cod_materia: 11121, cod_estudiante: '20191299'},
  {id_inscripcion: 1, cod_materia: 11121, cod_estudiante: '20191299'},
  {id_inscripcion: 1, cod_materia: 11121, cod_estudiante: '20191299'},
  {id_inscripcion: 1, cod_materia: 11121, cod_estudiante: '20191299'},
  {id_inscripcion: 1, cod_materia: 11121, cod_estudiante: '20191299'},
];

@Component({
  selector: 'app-estudiantes',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent implements OnInit {
  displayedColumns: string[] = ['ID_INSCRIPCION', 'CODIGO_MATERIA', 'CODIGO_ESTUDIANTE']
  dataSource: Inscripcion[] = ELEMENT_DATA;

  ngOnInit() {
  }

}