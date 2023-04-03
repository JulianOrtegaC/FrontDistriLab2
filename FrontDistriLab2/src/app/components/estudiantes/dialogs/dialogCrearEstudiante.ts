import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Estudiantes } from 'src/app/models/Materias';
import { EstudiantesService } from 'src/app/service/EstudiantesService';

@Component({
  selector: 'app-dialog-add-subject',
  templateUrl: './dialogCrearEstudiante.html',
  styleUrls: ['./dialogCrear.css']
})
export class DialogCrearEstudiante implements OnInit{
  crearEstudianteForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,public dialogRef: MatDialogRef<DialogCrearEstudiante>,public estudianteService: EstudiantesService) { }
  ngOnInit(): void {
    this.crearEstudianteForm = this.initForm();
  }
  initForm(){
    return this.formBuilder.group({
      codStudenthotos: ['', Validators.required],
      firstNameStudent: ['', Validators.required],
      lastNameStudent: ['', Validators.required],
      typeDocument: ['', Validators.required],
      numDocument: ['', Validators.required],
      statusStudent: ['', Validators.required],
      genderStudent: ['', Validators.required],
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  
}
crearNuevoEstudiante(){
    const estuAux :Estudiantes = {
      codStudent:this.crearEstudianteForm.value.codStudenthotos,
      firstNameStudent:this.crearEstudianteForm.value.firstNameStudent,
      lastNameStudent:this.crearEstudianteForm.value.lastNameStudent,
      typeDocument:this.crearEstudianteForm.value.typeDocument,
      numDocument:this.crearEstudianteForm.value.numDocument,
      statusStudent:this.crearEstudianteForm.value.statusStudent,
      genderStudent:this.crearEstudianteForm.value.genderStudent,
    }

    this.estudianteService.crearEstudiante(estuAux).subscribe(
      
    )
  }

}
