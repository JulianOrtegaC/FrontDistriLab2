import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { DialogInscripcionComponent } from './components/inscripcion/DialogInscripcion/dialog-inscripcion/dialog-inscripcion.component';
import { InscripcionComponent } from './components/inscripcion/inscripcion.component';
import { DialogAddSubjectComponent } from './components/materias/dialogs/dialog-add-subject/dialog-add-subject.component';
import { MateriasComponent } from './components/materias/materias.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { DialogAddSubjectsCompleteComponent } from './components/materias/dialogs/dialog-add-subjects-complete/dialog-add-subjects-complete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreacionEstudiantesComponent } from './components/creacion-estudiantes/creacion-estudiantes.component';
import { MatFormFieldModule } from '@angular/material/form-field';




@NgModule({
  declarations: [
    AppComponent,
    MateriasComponent,
    InscripcionComponent,
    PrincipalComponent,
    EstudiantesComponent,
    NavbarComponent,
    DialogAddSubjectComponent,
    DialogInscripcionComponent,
    DialogAddSubjectsCompleteComponent,
    CreacionEstudiantesComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    HttpClientModule,
    MatProgressBarModule,
    MatButtonModule,
    MatChipsModule,
    MatDialogModule,
    MatInputModule,
    SharedModule,
    FormsModule,
    AppRoutingModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }