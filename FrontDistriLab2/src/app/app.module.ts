import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreacionEstudiantesComponent } from './components/creacion-estudiantes/creacion-estudiantes.component';
import { CreacionMateriasComponent } from './components/creacion-materias/creacion-materias.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { DialogInscripcionComponent } from './components/inscripcion/DialogInscripcion/dialog-inscripcion/dialog-inscripcion.component';
import { InscripcionComponent } from './components/inscripcion/inscripcion.component';
import { DialogAddSubjectComponent } from './components/materias/dialogs/dialog-add-subject/dialog-add-subject.component';
import { DialogAddSubjectsCompleteComponent } from './components/materias/dialogs/dialog-add-subjects-complete/dialog-add-subjects-complete.component';
import { MateriasComponent } from './components/materias/materias.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { SharedModule } from './shared/shared.module';
import { CreationInscriptionsComponent } from './components/creation-inscriptions/creation-inscriptions.component';

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
    CreacionEstudiantesComponent,
    CreacionMateriasComponent,
    CreationInscriptionsComponent
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
    MatDividerModule,
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