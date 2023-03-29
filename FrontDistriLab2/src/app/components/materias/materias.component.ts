import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MateriasService } from 'src/app/service/MateriasService';
import { Materias } from '../../models/Materias';
import { DialogAddSubjectComponent } from './dialogs/dialog-add-subject/dialog-add-subject.component';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {

  loaderSpinner = false;
  showTable = false;
  showPaginator = false;
  error = false;
  errorMessaje = "Error en las materias";
  displayedColumns: string[] = ['codSubject', 'nameSubject', 'quotas', 'statusSubject']
  columnsToDisplayWithExpand = [this.displayedColumns, 'expand'];
  dataSource = new MatTableDataSource<Materias>();

  constructor(public materiasService: MateriasService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getSubjects();
  }

  editRow(row: Materias) {
    const dialogRef = this.dialog.open(DialogAddSubjectComponent, {
      data: row,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.materiasService.updateMateria(result).subscribe(data => {
        this.getSubjects()
      })
    },
      error => {
        this.error = true;
        this.errorMessaje = "Error al momento de actualizar materia, vuelva a intentarlo.";
      });
  }

  getSubjects() {
    this.loaderSpinner = true;
    this.materiasService.getMaterias().subscribe(data => {
      this.dataSource = new MatTableDataSource<Materias>(data);
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
        this.errorMessaje = "Error al obtener Materias";
        console.error("error es: " + error);
      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ordenarContrario() {
    this.materiasService.getFilterDecending().subscribe(data => {
      this.dataSource = new MatTableDataSource<Materias>(data);
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
        this.errorMessaje = "Error al obtener Materias";
        console.error("error es: " + error);
      });
  }

  ordenarNormal() {
    this.materiasService.getMateriasFilterNormal().subscribe(data => {
      this.dataSource = new MatTableDataSource<Materias>(data);
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
        this.errorMessaje = "Error al ordenar materias intentelo de nuevo";
        console.error("error es: " + error);
      });

  }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
}
