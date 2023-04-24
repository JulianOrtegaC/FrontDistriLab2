import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Estudiantes } from 'src/app/models/Materias';

@Component({
  selector: 'app-dialog-add-subject',
  templateUrl: './dialog-add-estudiante.component.html',
  styleUrls: ['./dialog-add-estudiante.component.css']
})
export class DialogAddEstudianteComponent {
   private estuAux !:Estudiantes;
  constructor(public dialogRef: MatDialogRef<DialogAddEstudianteComponent>,
    @Inject(MAT_DIALOG_DATA) public estudiante: Estudiantes,) { 
      this.estuAux = estudiante;
    }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
