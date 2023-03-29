import { Component, OnInit, ViewChild } from '@angular/core';
//mport * as XLSX from 'xlsx';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface Inscripcion {
  id_inscripcion: number;
  cod_materia: number;
  cod_estudiante: string;
}

const ELEMENT_DATA: Inscripcion[] = [
  {id_inscripcion: 1, cod_materia: 11121, cod_estudiante: '20191299'},
  {id_inscripcion: 1, cod_materia: 11121, cod_estudiante: '20191299'},
  {id_inscripcion: 1, cod_materia: 11121, cod_estudiante: '20191299'},
  {id_inscripcion: 1, cod_materia: 11121, cod_estudiante: '20191299'},
  {id_inscripcion: 1, cod_materia: 11121, cod_estudiante: '20191299'},
  {id_inscripcion: 1, cod_materia: 11121, cod_estudiante: '20191299'}
];

@Component({
  selector: 'app-estudiantes',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})

export class InscripcionComponent implements OnInit {
  displayedColumns: string[] = ['ID_INSCRIPCION', 'CODIGO_MATERIA', 'CODIGO_ESTUDIANTE']
  //dataSource: Inscripcion[] = ELEMENT_DATA;
  dataSource = new MatTableDataSource<Inscripcion>(ELEMENT_DATA);

  exportToExcel() {
    exportToExcel();
  }
  
  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator.pageIndex = 0;
  }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
}

export function exportToExcel(): void {
  /*const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(ELEMENT_DATA);
  const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
  const excelBuffer: any = XLSX.write(workbook, { bookType: 'xls', type: 'array' });
  saveAsExcelFile(excelBuffer, 'data');*/
}

export function saveAsExcelFile(buffer: any, fileName: string): void {
  const data: Blob = new Blob([buffer], {type: 'application/vnd.ms-excel'});
  const url: string = window.URL.createObjectURL(data);
  const link: HTMLAnchorElement = document.createElement('a');
  link.href = url;
  link.download = fileName + '.xls';
  link.click();
}

