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

  loader = false;
  displayedColumns: string[] = ['codigo', 'NameSubject', 'Quotas', 'StatusSubject']
  dataSource = new MatTableDataSource<Materias>();

  constructor(public materiasService: MateriasService) { }

  ngOnInit(): void {
    this.loader = true;
    this.materiasService.getMaterias().subscribe(data => {
      this.dataSource = new MatTableDataSource<Materias>(data);
      this.loader = false;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
}
