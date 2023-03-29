import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EstudiantesService } from 'src/app/service/EstudiantesService';
import { Estudiantes } from '../../models/Materias';

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

  displayedColumns: string[] = ['codStudent', 'firstNameStudent', 'lastNameStudent', 'typeDocument', 'numDocument', 'statusStudent', 'genderStudent']
  dataSource = new MatTableDataSource<Estudiantes>();

  constructor(public materiasService: EstudiantesService) {
    
   }

  ngOnInit(): void {
    this.getSubjects();
    
  }

  getSubjects() {
    this.loaderSpinner = true;
    this.materiasService.getStudent().subscribe(data => {
      this.dataSource = new MatTableDataSource<Estudiantes>(data);
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
  }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
}

