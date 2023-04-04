import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { InscripcionComponent } from './components/inscripcion/inscripcion.component';
import { MateriasComponent } from './components/materias/materias.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { CreacionEstudiantesComponent } from './components/creacion-estudiantes/creacion-estudiantes.component';



const routes: Routes = [ 
  {path: 'materias', component: MateriasComponent},
  {path: 'estudiantes', component: EstudiantesComponent},
  {path: 'inscripciones', component: InscripcionComponent},
  {path: 'crearNuevoEstudiante', component: CreacionEstudiantesComponent},
  {path: "**", component: PrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
