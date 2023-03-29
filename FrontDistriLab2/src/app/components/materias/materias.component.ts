import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ResponseMateriasByCode } from 'src/app/models/ResponseMateriasByCode';
import { MateriasService } from 'src/app/service/MateriasService';
import { Materias } from '../../models/Materias';
import { DialogAddSubjectComponent } from './dialogs/dialog-add-subject/dialog-add-subject.component';
import { DialogAddSubjectsCompleteComponent } from './dialogs/dialog-add-subjects-complete/dialog-add-subjects-complete.component';

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
  code = 0;

  ordenadoEstado = false;
  ordenadoNameA = false;
  ordenadoNameZ = false;
  ordenadoCod = false;

  valueCod: number = 0;

  displayedColumns: string[] = ['codSubject', 'nameSubject', 'quotas', 'statusSubject']
  columnsToDisplayWithExpand = [this.displayedColumns, 'expand'];
  dataSource = new MatTableDataSource<Materias>();

  codFormControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();
  codigoSubject: any;

  numCodeSearch = 0;

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

  addRow() {
    const dialogRef = this.dialog.open(DialogAddSubjectsCompleteComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      this.materiasService.addMateria(result).subscribe(data => {
        this.getSubjects()
      })
    },
      error => {
        this.error = true;
        this.errorMessaje = "Error al momento de agregar materia, vuelva a intentarlo.";
      });
  }

  getSubjects() {
    this.loaderSpinner = true;
    this.materiasService.getMaterias().subscribe(data => {

      this.getOkFilter(data);
    },
      error => {
        this.errorGetData(error);
      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ordenarContrario() {
    this.materiasService.getFilterDecending().subscribe(data => {
      this.ordenadoNameZ = !this.ordenadoNameZ;
      if (this.ordenadoNameZ) {
        this.getOkFilter(data);
      } else {
        this.updateDeleteFilters();
        this.getSubjects();
      }
    },
      error => {
        this.errorGetData(error);
      });
  }

  ordenarNormal() {
    this.materiasService.getMateriasFilterNormal().subscribe(data => {
      this.ordenadoNameA = !this.ordenadoNameA;
      if (this.ordenadoNameA) {
        this.getOkFilter(data);
      } else {
        this.updateDeleteFilters();
        this.getSubjects();
      }
    },
      error => {
        this.errorGetData(error);
      });
  }

  ordenarEstado() {
    this.materiasService.getMateriasFilterEstado().subscribe(data => {
      this.ordenadoEstado = !this.ordenadoEstado;
      if (this.ordenadoEstado) {
        this.getOkFilter(data);
      } else {
        this.updateDeleteFilters();
        this.getSubjects();
      }
    },
      error => {
        this.errorGetData(error);
      });
  }

  ordenarCod() {
    this.materiasService.getMateriasFilterCode().subscribe(data => {
      this.ordenadoCod = !this.ordenadoCod;
      if (this.ordenadoCod) {
        this.getOkFilter(data);
      } else {
        this.updateDeleteFilters();
        this.getSubjects();
      }
    },
      error => {
        this.errorGetData(error);
      });
  }

  getSubjectByCod() {
    if (this.valueCod !== undefined) {
      this.materiasService.getMateriasByCode(this.valueCod).subscribe(data => {
        this.getOkFilterByCode(data);
      });
    } else {
      this.loaderSpinner = false;
      this.error = true;
      this.showTable = false;
      this.showPaginator = false;
      this.errorMessaje = "Error al buscar la materia";
    }
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
    const informacionMateria = data as ResponseMateriasByCode
    var array: Materias[] = [informacionMateria.result]
    console.log(array);
    this.dataSource = new MatTableDataSource<Materias>(array);
    this.dataSource.paginator = this.paginator;
    this.loaderSpinner = false;
    this.error = false;
    this.showTable = true;
    this.showPaginator = (this.dataSource.data.length > 0);
  }

  private getOkFilter(data: any) {
    this.dataSource = new MatTableDataSource<Materias>(data);
    this.dataSource.paginator = this.paginator;
    this.loaderSpinner = false;
    this.error = false;
    this.showTable = true;
    this.showPaginator = (this.dataSource.data.length > 0);
  }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
function ResponseMateriasByCode(): any {
  throw new Error('Function not implemented.');
}

