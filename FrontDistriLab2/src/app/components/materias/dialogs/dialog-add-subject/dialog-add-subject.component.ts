import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Materias } from 'src/app/models/Materias';

@Component({
  selector: 'app-dialog-add-subject',
  templateUrl: './dialog-add-subject.component.html',
  styleUrls: ['./dialog-add-subject.component.css']
})
export class DialogAddSubjectComponent {
  constructor(public dialogRef: MatDialogRef<DialogAddSubjectComponent>,
    @Inject(MAT_DIALOG_DATA) public materias: Materias,) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
