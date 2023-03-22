import { Component, OnInit } from '@angular/core';

export interface Estudiantes {
  codigo: number,
  name: string;
  apellido: string;
  type_doc: string;
  doc: string;
  estado: string;
  genero: string;
}

const ELEMENT_DATA: Estudiantes[] = [
  {codigo: 1, name: 'Hydrogen', apellido: '', type_doc: 'CC', doc: '12309123', estado: 'A', genero: 'M'},
  {codigo: 2, name: 'Helium', apellido: '', type_doc: 'CC', doc: '12309123', estado: 'A', genero: 'M'},
  {codigo: 3, name: 'Lithium', apellido: '', type_doc: 'TI', doc: '12309123', estado: 'A', genero: 'F'},
  {codigo: 4, name: 'Beryllium', apellido: '', type_doc: 'CC', doc: '12309123', estado: 'A', genero: 'F'},
  {codigo: 5, name: 'Boron', apellido: '', type_doc: 'CC', doc: '12309123', estado: 'A', genero: 'M'},
  {codigo: 6, name: 'Carbon', apellido: '', type_doc: 'NIT', doc: '12309123', estado: 'A', genero: 'F'},
  {codigo: 7, name: 'Nitrogen', apellido: '', type_doc: 'CC', doc: '12309123', estado: 'I', genero: 'M'},
  {codigo: 8, name: 'Oxygen', apellido: '', type_doc: 'TI', doc: '12309123', estado: 'I', genero: 'F'},
  {codigo: 9, name: 'Fluorine', apellido: '', type_doc: 'CC', doc: '12309123', estado: 'A', genero: 'M'},
  {codigo: 10, name: 'Neon', apellido: '', type_doc: 'CC', doc: '12309123', estado: 'A', genero: 'M'},
];

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'name', 'apellido', 'type_doc', 'doc', 'estado', 'genero']
  dataSource: Estudiantes[] = ELEMENT_DATA;

  ngOnInit() {
  }

}

