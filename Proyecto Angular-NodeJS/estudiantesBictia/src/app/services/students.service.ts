import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class StudentService{

    apiUrl = 'http://localhost:3000/api';

    constructor( private http: HttpClient ){}
    
    createStudent(studentParams){
        const params = JSON.stringify(studentParams);
        console.log('Datos estudiante servicio -->', params);
        const option = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
        return this.http.post(
            this.apiUrl + '/createStudent',
            params,
            option
        ).pipe( res => res );
    }

    getStudents(){
        return this.http.get( 
            this.apiUrl + '/student'
        ).pipe( res => res );
    }

}

