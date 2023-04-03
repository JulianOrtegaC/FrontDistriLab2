import { EventEmitter, Injectable } from '@angular/core';
import { Estudiantes } from '../models/Materias';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {
  showModal =false;


  idPublicacionAPujar!:number;
  constructor() { }
  
}
