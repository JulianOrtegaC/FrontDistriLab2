import { Component, OnInit, ViewChild } from '@angular/core';
//mport * as XLSX from 'xlsx';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { InscripcionService } from 'src/app/service/InscripcionesService';
import { Inscripcion } from '../../models/Inscripcion';

/*const ELEMENT_DATA: Inscripcion[] = [
  {id_inscripcion: 1, cod_materia: 11121, cod_estudiante: '20191299'},
  {id_inscripcion: 1, cod_materia: 11121, cod_estudiante: '20191299'},
  {id_inscripcion: 1, cod_materia: 11121, cod_estudiante: '20191299'},
  {id_inscripcion: 1, cod_materia: 11121, cod_estudiante: '20191299'},
  {id_inscripcion: 1, cod_materia: 11121, cod_estudiante: '20191299'},
  {id_inscripcion: 1, cod_materia: 11121, cod_estudiante: '20191299'}
];*/

@Component({
  selector: 'app-estudiantes',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})

export class InscripcionComponent implements OnInit {
  loaderSpinner = false;
  showTable = false;
  showPaginator = false;
  error = false;

  displayedColumns: string[] = ['idInscription', 'codStudent', 'codSubject', 'dateRegistration']
  dataSource = new MatTableDataSource<Inscripcion>();

  constructor(public inscripcionService: InscripcionService){}

  exportToExcel() {
    exportToExcel();
  }
  
  ngOnInit(): void {
    this.getInscripcion();
  }

  getInscripcion() {
    this.loaderSpinner = true;
    this.inscripcionService.getInscripcion().subscribe(data => {
      this.dataSource = new MatTableDataSource<Inscripcion>(data);
      this.dataSource.paginator = this.paginator;
      this.loaderSpinner = false;
      this.error = false;
      this.showTable = true;
      this.showPaginator = (this.dataSource.data.length > 0);
    },
      error => {
        this.loaderSpinner = false;
        this.error = true;
        this.showTable = false;
        this.showPaginator = false;
        console.error("error es: " + error);
      });
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
