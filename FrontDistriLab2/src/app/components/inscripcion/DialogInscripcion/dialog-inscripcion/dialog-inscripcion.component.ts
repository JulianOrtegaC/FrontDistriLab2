import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InscripcionR } from 'src/app/models/InscripcionR';

@Component({
  selector: 'app-dialog-inscripcion',
  templateUrl: './dialog-inscripcion.component.html',
  styleUrls: ['./dialog-inscripcion.component.css']
})

export class DialogInscripcionComponent {
  constructor(public dialogRef: MatDialogRef<DialogInscripcionComponent>,
    @Inject(MAT_DIALOG_DATA) public inscripcion: InscripcionR) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}