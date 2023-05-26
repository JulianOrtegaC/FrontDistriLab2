import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Estudiantes } from "../models/Materias";

@Injectable({
    providedIn: "root"
})
export class EstudiantesService {
    myAppUrl: string = 'https://localhost:7111/Student/'
   //private myAppUrl: string ='https://backenddistristudents.azurewebsites.net/Student/';

    constructor(private http: HttpClient) { }

    getStudent(): Observable<any> {
        return this.http.get(`${this.myAppUrl}getStudent`);
    }

    crearEstudiante(estudiante: Estudiantes): Observable<any> {
        console.log(estudiante);
        return this.http.post("https://backenddistristudents.azurewebsites.net/Student", estudiante);
        // return this.http.post(`${this.myAppUrl}addStudent`, estudiante);
    }
    getEstudiantesFilterNormal(): Observable<any> {
        return this.http.get(this.myAppUrl + 'getStudenttNormal');
    }

    getEstudiantesFilterEstado(): Observable<any> {
        return this.http.get(this.myAppUrl + 'getStudentFilterState');
    }

    getEstudiantesFilterCode(): Observable<any> {
        return this.http.get(this.myAppUrl + 'getStudentFilterCod');
    }

    getEstudiantesByCode(numberCode: number): Observable<any> {
        return this.http.get(this.myAppUrl + 'getSubject/' + numberCode);
    }

    getFilterDecending(): Observable<any> {
        return this.http.get(this.myAppUrl + 'getStudentDecending');
    }


}