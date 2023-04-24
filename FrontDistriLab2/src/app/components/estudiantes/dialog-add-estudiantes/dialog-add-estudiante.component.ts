import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Estudiantes } from 'src/app/models/Materias';

@Component({
  selector: 'app-dialog-add-subject',
  templateUrl: './dialog-add-estudiante.component.html',
  styleUrls: ['./dialog-add-estudiante.component.css']
})
export class DialogAddEstudianteComponent {
  estuAux !:Estudiantes;
  showImage = false;
  constructor(public dialogRef: MatDialogRef<DialogAddEstudianteComponent>,
    @Inject(MAT_DIALOG_DATA) public estudiante: Estudiantes,) { 
      this.estuAux = estudiante;
      if(this.estuAux.pathStudent?.length != 0){
        this.showImage = true; 
      }
    }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
