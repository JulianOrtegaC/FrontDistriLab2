import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InscripcionService } from 'src/app/service/InscripcionesService';

@Component({
  selector: 'app-creation-inscriptions',
  templateUrl: './creation-inscriptions.component.html',
  styleUrls: ['./creation-inscriptions.component.css']
})
export class CreationInscriptionsComponent {
  idInscription!: string;
  codStudent!: string;
  codSubject!: number;

  constructor(private inscriptionService: InscripcionService, private router: Router) {}

  get CreationInscription() {
    return this.idInscription && this.codStudent && this.codSubject;
  }
  createInscripcion(){
    
  }

}
