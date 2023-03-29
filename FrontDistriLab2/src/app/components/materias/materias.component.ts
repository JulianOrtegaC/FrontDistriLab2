import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MateriasService } from 'src/app/service/MateriasService';
import { Materias } from '../../models/Materias';

const ELEMENT_DATA: Materias[] = [
  {codigo: 1, NameSubject: 'Filosofia', Quotas: 3, StatusSubject: 'A'},
  {codigo: 2, NameSubject: 'Calculo', Quotas: 4, StatusSubject: 'A'},
  {codigo: 3, NameSubject: 'Redes', Quotas: 5, StatusSubject: 'I'},
  { codigo: 4, NameSubject: 'Sistemas', Quotas: 4, StatusSubject: 'A' },
  { codigo: 5, NameSubject: 'Filosofia 2', Quotas: 3, StatusSubject: 'A' },
  { codigo: 6, NameSubject: 'Calculo 2', Quotas: 4, StatusSubject: 'A' },
  { codigo: 7, NameSubject: 'Telematica', Quotas: 5, StatusSubject: 'I' },
  { codigo: 8, NameSubject: 'Sistemas Distribuidos', Quotas: 4, StatusSubject: 'A' }
];

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'NameSubject', 'Quotas', 'StatusSubject']
  dataSource = new MatTableDataSource<Materias>(ELEMENT_DATA);

  constructor(public materiasService: MateriasService) { }

  ngOnInit(): void {
    this.materiasService.getMaterias().subscribe(data => {
      console.log(data);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
}
