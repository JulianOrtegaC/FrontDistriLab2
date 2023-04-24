import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Materias } from "../models/Materias";
import { ResponseMaterias } from "../models/ResponseMaterias";


@Injectable({
    providedIn: "root"
})
export class MateriasService {

    //baseUrl: string = 'https://localhost:7111/subject'
    baseUrl: string = 'backenddistri.azurewebsites.net/api/subject'
    constructor(private http: HttpClient) { }

    getMaterias(pagina:number): Observable<any> {
        return this.http.get(this.baseUrl + '/getSubject?pagina='+pagina);
    }

    getMateriasFilterNormal(pagina:number): Observable<any> {
        return this.http.get(this.baseUrl + '/getSubjectNormal?pagina='+pagina);
    }

    getMateriasFilterEstado(pagina:number): Observable<any> {
        return this.http.get(this.baseUrl + '/getSubjectFilterState?pagina='+pagina);
    }

    getMateriasFilterCode(pagina:number): Observable<any> {
        return this.http.get(this.baseUrl + '/getSubjectFilterCod?pagina='+pagina);
    }

    getMateriasByCode(numberCode: number): Observable<any> {
        return this.http.get(this.baseUrl + '/getSubject/' + numberCode);
    }

    getFilterDecending(pagina:number): Observable<any> {
        return this.http.get(this.baseUrl + '/getSubjectDecending?pagina='+pagina);
    }


    updateMateria(materia: Materias): Observable<any> {
        return this.http.put(this.baseUrl + "/editSubject", materia);
    }

    addMateria(materia: ResponseMaterias): Observable<any> {
        return this.http.post(this.baseUrl + "/addSubject", materia);
    }

}