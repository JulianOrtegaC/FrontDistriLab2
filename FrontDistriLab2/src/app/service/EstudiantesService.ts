import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Estudiantes } from "../models/Materias";

@Injectable({
    providedIn: "root"
})
export class EstudiantesService {

   private myAppUrl: string ='https://localhost:7111/Student/';

    constructor(private http: HttpClient) { }

    getStudent(): Observable<any> {
        return this.http.get(`${this.myAppUrl}getStudent`);
    }

    crearEstudiante(estudiante: Estudiantes): Observable<any> {
        console.log(estudiante);
        return this.http.post("https://localhost:7111/Student/addStudent", estudiante);
        // return this.http.post(`${this.myAppUrl}addStudent`, estudiante);
    }

}