import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public user: User;

  constructor(private service: UserService) {
    this.user = new User('', '', '', '', '', '');
  }

  signUp(){
    this.service.signUp( this.user ).subscribe( (res: any) =>{
      if (res.statusCode !== 200 ) {
        alert('Error al crear el usuario');
      }else{
        alert('Usuario creado correctamente');
      }
    })
  }

  ngOnInit(): void {
  }

}
