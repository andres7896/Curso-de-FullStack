import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  public user: User;
  public userId;

  constructor( private service: UserService ) { 
    this.user = new User();
    this.userId = JSON.parse(localStorage.getItem('dataUser'))._id;
  }

  ngOnInit(): void {
  }

  comparePasswords(){
    const password = ( <HTMLInputElement>document.getElementById('password')).value;
    const confirmPassword = ( document.getElementById('confirmPassword') as HTMLInputElement ).value;

    let display = '';
    let disabled = false;

    if (password !== confirmPassword) {
      display = 'block';
      disabled = true;
    }else{
      display = 'none';
      disabled = false;
    }

    document.getElementById('msgError').style.display = display;
    (document.getElementById('btnPassword') as HTMLButtonElement).disabled = disabled;
  }

  changePassword(){
    this.service.updatePassword(this.user, this.userId).subscribe( (res: any) => {
      if (res.statusCode === 200) {
        alert('Contraseña actualizada correctamente');
      }else{
        alert('Error al cambiar la contraseña');
      }
    })
  }

}
