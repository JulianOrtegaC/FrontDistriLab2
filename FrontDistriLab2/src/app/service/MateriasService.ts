import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class MateriasService {

    baseUrl: string = 'https://localhost:7111/subject'

    constructor(private http: HttpClient) { }

    getMaterias() {
        this.http.get(this.baseUrl + '/getSubject').subscribe(data => {
            console.log('dataaaaa' + data.toString);
        });
    }

}