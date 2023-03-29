import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class InscripcionService {

    baseUrl: string = 'https://localhost:7111/inscripcion'

    constructor(private http: HttpClient) { }

    getInscripcion(): Observable<any> {
        return this.http.get(this.baseUrl + '/getInscriptions');
    }

}