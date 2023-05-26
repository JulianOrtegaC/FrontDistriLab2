import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ResponseStudentsByCode } from 'src/app/models/ResponseMateriasByCode';
import { EstudiantesService } from 'src/app/service/EstudiantesService';
import { Estudiantes } from '../../models/Materias';
import { DialogAddEstudianteComponent } from './dialog-add-estudiantes/dialog-add-estudiante.component';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  loaderSpinner = false;
  showTable = false;
  showPaginator = false;
  error = false;


  ordenadoEstado = false;
  ordenadoNameA = false;
  ordenadoNameZ = false;
  ordenadoCod = false;


  displayedColumns: string[] = ['codStudent', 'firstNameStudent', 'lastNameStudent', 'typeDocument', 'numDocument', 'statusStudent', 'genderStudent']
  dataSource = new MatTableDataSource<Estudiantes>();
  errorMessaje = "Error en los Estudiantes";
  constructor(public estudianteService: EstudiantesService,public dialog: MatDialog) {
    
   }

  ngOnInit(): void {
    this.getStudent();
    
  }

  getStudent() {
    this.loaderSpinner = true;
    this.estudianteService.getStudent().subscribe(data => {
      this.dataSource = new MatTableDataSource<Estudiantes>(data.data);
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
        console.error("error es: " + error.errorMessaje);
      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;


  ordenarContrario() {
    this.estudianteService.getFilterDecending().subscribe(data => {
      this.ordenadoNameZ = !this.ordenadoNameZ;
      if (this.ordenadoNameZ) {
        this.getOkFilter(data);
      } else {
        this.updateDeleteFilters();
        this.getStudent();
      }
    },
      error => {
        this.errorGetData(error);
      });
  }

  ordenarNormal() {
    this.estudianteService.getEstudiantesFilterNormal().subscribe(data => {
      this.ordenadoNameA = !this.ordenadoNameA;
      if (this.ordenadoNameA) {
        this.getOkFilter(data.data);
      } else {
        this.updateDeleteFilters();
        this.getStudent();
      }
    },
      error => {
        this.errorGetData(error);
      });
  }

  ordenarEstado() {
    this.estudianteService.getEstudiantesFilterEstado().subscribe(data => {
      this.ordenadoEstado = !this.ordenadoEstado;
      if (this.ordenadoEstado) {
        this.getOkFilter(data);
      } else {
        this.updateDeleteFilters();
        this.getStudent();
      }
    },
      error => {
        this.errorGetData(error);
      });
  }

  ordenarCod() {
    this.estudianteService.getEstudiantesFilterCode().subscribe(data => {
      this.ordenadoCod = !this.ordenadoCod;
      if (this.ordenadoCod) {
        this.getOkFilter(data.data);
      } else {
        this.updateDeleteFilters();
        this.getStudent();
      }
    },
      error => {
        this.errorGetData(error);
      });
  }
  private updateDeleteFilters() {
    this.ordenadoEstado = false;
    this.ordenadoNameA = false;
    this.ordenadoNameZ = false;
    this.ordenadoCod = false;
  }

  private errorGetData(error: any) {
    this.loaderSpinner = false;
    this.error = true;
    this.showTable = false;
    this.showPaginator = false;
    this.errorMessaje = "Error al obtener materias intentelo de nuevo";
    console.error("error es: " + error);
  }

  private getOkFilterByCode(data: any) {
    const informacionMateria = data as ResponseStudentsByCode
    var array: Estudiantes[] = [informacionMateria.result]
    console.log(array);
    this.dataSource = new MatTableDataSource<Estudiantes>(array);
    this.dataSource.paginator = this.paginator;
    this.loaderSpinner = false;
    this.error = false;
    this.showTable = true;
    this.showPaginator = (this.dataSource.data.length > 0);
  }

  private getOkFilter(data: any) {
    this.dataSource = new MatTableDataSource<Estudiantes>(data);
    this.dataSource.paginator = this.paginator;
    this.loaderSpinner = false;
    this.error = false;
    this.showTable = true;
    this.showPaginator = (this.dataSource.data.length > 0);
  }
  editRow(row: Estudiantes) {
    const dialogRef = this.dialog.open(DialogAddEstudianteComponent, {
      data: row,
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   this.materiasService.updateMateria(result).subscribe(data => {
    //     this.getSubjects()
    //   })
    // },
    //   error => {
    //     this.error = true;
    //     this.errorMessaje = "Error al momento de actualizar materia, vuelva a intentarlo.";
    //   });
  }


}
