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
    getEstudiantesFilterNormal(): Observable<any> {
        return this.http.get(this.myAppUrl + '/getSubjectNormal');
    }

    getEstudiantesFilterEstado(): Observable<any> {
        return this.http.get(this.myAppUrl + '/getSubjectFilterState');
    }

    getEstudiantesFilterCode(): Observable<any> {
        return this.http.get(this.myAppUrl + '/getSubjectFilterCod');
    }

    getEstudiantesByCode(numberCode: number): Observable<any> {
        return this.http.get(this.myAppUrl + '/getSubject/' + numberCode);
    }

    getFilterDecending(): Observable<any> {
        return this.http.get(this.myAppUrl + '/getSubjectDecending');
    }


}