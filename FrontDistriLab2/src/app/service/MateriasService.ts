import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
    providedIn: "root"
})
export class MateriasService {

    baseUrl: string = 'https://localhost:7111/subject'

    constructor(private http: HttpClient) { }

    getMaterias(): Observable<any> {
        return this.http.get(this.baseUrl + '/getSubject');
    }

}