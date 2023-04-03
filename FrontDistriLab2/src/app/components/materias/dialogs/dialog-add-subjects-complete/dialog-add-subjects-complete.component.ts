import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Materias } from 'src/app/models/Materias';


@Component({
  selector: 'app-dialog-add-subjects-complete',
  templateUrl: './dialog-add-subjects-complete.component.html',
  styleUrls: ['./dialog-add-subjects-complete.component.css']
})
export class DialogAddSubjectsCompleteComponent {

  constructor(public dialogRef: MatDialogRef<DialogAddSubjectsCompleteComponent>,
    @Inject(MAT_DIALOG_DATA) public materias: Materias) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
