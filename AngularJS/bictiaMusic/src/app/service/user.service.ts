import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService{

    apiUrl = 'http://localhost:3000/api';

    constructor(
        private http: HttpClient
    ){}

    /**
     * Función para registrar un nuevo usuario
     * @param userParams Datos del usuario
     */
    signUp(userParams){
        const params = JSON.stringify(userParams);
        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
        return this.http.post(
            this.apiUrl + '/createUser',
            params,
            options
        ).pipe( res => res )
    }

    /**
     * Funcón creada para conectarme con la API e inciar sesión
     * @param userParams Datos recibidos desde el formulario. email y password
     */
    login(userParams){
        const params = JSON.stringify(userParams);
        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
        return this.http.post(
            this.apiUrl + '/loginUser',
            params,
            options
        ).pipe( res => res )
    }

    updateUser(userParams){
        const params = JSON.stringify(userParams);
        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
        return this.http.put(
            `${this.apiUrl}/updateUser/${userParams._id}`,
            params,
            options
        ).pipe( res => res );
    }

    saveImage(image: File, idUser) {
        const formData = new FormData();
        formData.append('image', image);
        return this.http.put(
          `${this.apiUrl}/saveImage/${idUser}`,
          formData
        ).pipe( res => res );
      }

    updatePassword(password, idUser){
        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.put(
            `${this.apiUrl}/changePassword/${idUser}`,
            password,
            options
        ).pipe( res => res );
    }  
}