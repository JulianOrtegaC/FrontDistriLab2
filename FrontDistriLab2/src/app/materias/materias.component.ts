import { Component } from '@angular/core';

export interface Materias {
  codigo: number,
  NameSubject: string;
  Quotas: number;
  StatusSubject: string;
}

const ELEMENT_DATA: Materias[] = [
  {codigo: 1, NameSubject: 'Filosofia', Quotas: 3, StatusSubject: 'A'},
  {codigo: 2, NameSubject: 'Calculo', Quotas: 4, StatusSubject: 'A'},
  {codigo: 3, NameSubject: 'Redes', Quotas: 5, StatusSubject: 'I'},
  {codigo: 4, NameSubject: 'Sistemas', Quotas: 4, StatusSubject: 'A'}
];

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent {
  displayedColumns: string[] = ['codigo', 'NameSubject', 'Quotas', 'StatusSubject']
  dataSource: Materias[] = ELEMENT_DATA;
}
