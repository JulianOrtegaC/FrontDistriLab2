import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Inscripcion } from "../models/Inscripcion";
import { InscripcionR } from "../models/InscripcionR";

@Injectable({
    providedIn: "root"
})
export class InscripcionService {

    //baseUrl: string = 'https://localhost:7111/inscripcion'
    baseUrl: string = 'https://backendinscriptions2.azurewebsites.net/inscripcion'
    
    
    constructor(private http: HttpClient) { }

    getInscripcion(): Observable<any> {
        return this.http.get(this.baseUrl + '/getInscriptions');
    }

    updateInscripcion(inscripcion: InscripcionR): Observable<any> {
        return this.http.put(this.baseUrl + "/editInscription", inscripcion);
    }

    addInscription(inscripcion: InscripcionR): Observable<any>{
        return this.http.post(this.baseUrl + "/addInscription", inscripcion);
    }
}