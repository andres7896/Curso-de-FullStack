import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user'; //Importamos el modelo
import { UserService } from '../../service/user.service'; //Importamos el servicio
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User;

  constructor(private service: UserService) { 
    this.user = new User();
  }

  ngOnInit(): void {
  }

  login(){
    this.service.login(this.user).subscribe( (res: any) =>{
      switch ( res.statusCode ) {
        case 400:
          alert('El usuario no esta registrado');
          break;
        case 401:
          alert('Los datos no son correctos');
          break;
        case 200:
          alert('Bienvenido!');
          localStorage.setItem('dataUser', JSON.stringify(res.dataUser));
          break;
        default:
          alert('Error de conexión');
          break;
      }
    } );
  }

}
