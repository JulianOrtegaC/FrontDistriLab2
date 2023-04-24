import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Inscripcion } from "../models/Inscripcion";

@Injectable({
    providedIn: "root"
})
export class InscripcionService {

    //baseUrl: string = 'https://localhost:7111/inscripcion'
    baseUrl: string = 'https://backendinscriptions.azurewebsites.net/inscripcion'
    
    constructor(private http: HttpClient) { }

    getInscripcion(): Observable<any> {
        return this.http.get(this.baseUrl + '/getInscriptions');
    }

    updateInscripcion(inscripcion: Inscripcion): Observable<any> {
        return this.http.put(this.baseUrl + "/editInscription", inscripcion);
    }

    addInscription(inscripcion: Inscripcion): Observable<any>{
        return this.http.post(this.baseUrl + "/addInscription", inscripcion);
    }
}