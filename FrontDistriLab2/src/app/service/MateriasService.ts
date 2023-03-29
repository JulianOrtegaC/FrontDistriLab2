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

    getMateriasFilterNormal(): Observable<any> {
        return this.http.get(this.baseUrl + '/getSubjectNormal');
    }

    getMateriasFilterEstado(): Observable<any> {
        return this.http.get(this.baseUrl + '/getSubjectFilterState');
    }

    getMateriasFilterCode(): Observable<any> {
        return this.http.get(this.baseUrl + '/getSubjectFilterCod');
    }

    getMateriasByCode(numberCode: number): Observable<any> {
        return this.http.get(this.baseUrl + '/getSubject/' + numberCode);
    }

    getFilterDecending(): Observable<any> {
        return this.http.get(this.baseUrl + '/getSubjectDecending');
    }


    updateMateria(materia: Materias): Observable<any> {
        return this.http.put(this.baseUrl + "/editSubject", materia);
    }

}