import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Materias } from "../models/Materias";

@Injectable({
    providedIn: "root"
})
export class MateriasService {

    baseUrl: string = 'https://localhost:7111/subject'

    constructor(private http: HttpClient) { }

    getMaterias(): Observable<any> {
        return this.http.get(this.baseUrl + '/getSubject');
    }

    updateMateria(materia: Materias): Observable<any> {
        return this.http.put(this.baseUrl + "/editSubject", materia);
    }

}