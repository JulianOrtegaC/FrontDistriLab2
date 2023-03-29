import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { InscripcionComponent } from './components/inscripcion/inscripcion.component';
import { DialogAddSubjectComponent } from './components/materias/dialogs/dialog-add-subject/dialog-add-subject.component';
import { MateriasComponent } from './components/materias/materias.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { SharedModule } from './shared/shared.module';
import { DialogInscripcionComponent } from './components/inscripcion/DialogInscripcion/dialog-inscripcion/dialog-inscripcion.component';

@NgModule({
  declarations: [
    AppComponent,
    MateriasComponent,
    InscripcionComponent,
    PrincipalComponent,
    EstudiantesComponent,
    NavbarComponent,
    DialogAddSubjectComponent,
    DialogInscripcionComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    HttpClientModule,
    MatProgressBarModule,
    MatButtonModule,
    MatDialogModule,
    SharedModule,
    AppRoutingModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }