import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MateriasComponent } from './components/materias/materias.component';
import { InscripcionComponent } from './components/inscripcion/inscripcion.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    MateriasComponent,
    InscripcionComponent,
    PrincipalComponent,
    EstudiantesComponent

  ],
  imports: [
    
    BrowserModule,
    MatTableModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
