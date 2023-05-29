import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Registro } from '../models/Materias';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {
  // private myAppUrl: string ='https://backenddistristudents.azurewebsites.net/Login/';
  private myAppUrl: string ='https://backenddistristudents.azurewebsites.net/Login/';

  userID= 0
  private userID$ = new BehaviorSubject<number>(this.userID)
  public idActual$!:number;
  constructor(private http: HttpClient) { }

  login(userName: string, hash: string): Observable<any> {
    return this.http.post(`${this.myAppUrl}?userName=${userName}&hash=${hash}`, {});
  }
  register(nameuser : string , email:string , password:string ): Observable<any> {
    return this.http.post(`${this.myAppUrl}register?userName=${nameuser}&email${email}&password${password}`,{}); 
  }

  get actualID$(): Observable<number> {
    return this.userID$.asObservable();
  }

 
  setactualID(documentNumber: number) {
    this.userID$.next(documentNumber);
    this.idActual$=documentNumber;
  }




}
