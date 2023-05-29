import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreacionEstudiantesComponent } from './components/creacion-estudiantes/creacion-estudiantes.component';
import { CreacionMateriasComponent } from './components/creacion-materias/creacion-materias.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { InscripcionComponent } from './components/inscripcion/inscripcion.component';
import { MateriasComponent } from './components/materias/materias.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { CreationInscriptionsComponent } from './components/creation-inscriptions/creation-inscriptions.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { GuardGuard } from './Guards/guard.guard';



const routes: Routes = [ 
  {path: 'materias', component: MateriasComponent , canActivate:[GuardGuard]},
  {path: 'estudiantes', component: EstudiantesComponent, canActivate:[GuardGuard]},
  {path: 'inscripciones', component: InscripcionComponent , canActivate:[GuardGuard]},
  {path: 'crearNuevoEstudiante', component: CreacionEstudiantesComponent, canActivate:[GuardGuard]},
  {path: 'crearNuevaMateria', component: CreacionMateriasComponent, canActivate:[GuardGuard]},
  {path: 'createNewInscription', component: CreationInscriptionsComponent, canActivate:[GuardGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: "**", component: PrincipalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
