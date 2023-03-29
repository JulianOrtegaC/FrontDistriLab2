import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MateriasService } from 'src/app/service/MateriasService';
import { Materias } from '../../models/Materias';

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
  displayedColumns: string[] = ['codSubject', 'nameSubject', 'quotas', 'statusSubject']
  columnsToDisplayWithExpand = [this.displayedColumns, 'expand'];
  dataSource = new MatTableDataSource<Materias>();

  constructor(public materiasService: MateriasService) { }

  ngOnInit(): void {
    this.getSubjects();
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
        console.error("error es: " + error);
      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
}
