import { Component } from '@angular/core';

@Component({
  selector: 'app-creation-inscriptions',
  templateUrl: './creation-inscriptions.component.html',
  styleUrls: ['./creation-inscriptions.component.css']
})
export class CreationInscriptionsComponent {

  idInscription!: string;
  codStudent!: string;
  codSubject!: number;

}
