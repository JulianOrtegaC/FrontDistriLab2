import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class EstudiantesService {

    baseUrl: string = 'https://localhost:7111/student'

    constructor(private http: HttpClient) { }

    getStudent(): Observable<any> {
        return this.http.get(this.baseUrl + '/getStudent');
    }

}