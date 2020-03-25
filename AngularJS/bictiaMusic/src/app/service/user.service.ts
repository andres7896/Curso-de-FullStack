import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService{

    apiUrl = 'http://localhost:3000/api';

    constructor(
        private http: HttpClient
    ){}

    signUp(userParams){
        const params = JSON.stringify(userParams);
        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
        return this.http.post(
            this.apiUrl + '/createUser',
            params,
            options
        ).pipe( res => res )
    }
}