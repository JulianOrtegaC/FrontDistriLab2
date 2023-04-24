import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreacionEstudiantesComponent } from './components/creacion-estudiantes/creacion-estudiantes.component';
import { CreacionMateriasComponent } from './components/creacion-materias/creacion-materias.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { InscripcionComponent } from './components/inscripcion/inscripcion.component';
import { MateriasComponent } from './components/materias/materias.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { CreationInscriptionsComponent } from './components/creation-inscriptions/creation-inscriptions.component';



const routes: Routes = [ 
  {path: 'materias', component: MateriasComponent},
  {path: 'estudiantes', component: EstudiantesComponent},
  {path: 'inscripciones', component: InscripcionComponent},
  {path: 'crearNuevoEstudiante', component: CreacionEstudiantesComponent},
  {path: 'crearNuevaMateria', component: CreacionMateriasComponent},
  {path: 'createNewInscription', component: CreationInscriptionsComponent},
  {path: "**", component: PrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
