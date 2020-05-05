import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  public user: User;
  public image: File; //Guardar la imagen cargada desde el formulario
  public url; //URL de nuestra API.

  constructor( private service: UserService ) {
    this.url = service.apiUrl;
  }

  ngOnInit(): void {
    this.user = JSON.parse( localStorage.getItem('dataUser') );
  }

  updateUser(){
    this.service.updateUser(this.user).subscribe( (res: any) => {
      switch ( res.statusCode ) {
        case 500:
          alert('Error en el servidor');
          break;
        case 400:
          alert('Error al modificar el usuario');
          break;
        case 200:
          this.service.saveImage( this.image, this.user._id ).subscribe( (res: any) => {
            this.user.image = res.image;
            console.log(res);
            const image = this.url + '/showImage/' + this.user.image;
            document.getElementById('imageUser').setAttribute('src', image);
            res.dataUser.image = this.user.image;
            localStorage.setItem('dataUser', JSON.stringify( res.dataUser ));
          });
          alert('Datos actualizados correctamente');
          break;  
        default:
          alert('Algo salio mal');
          break;
      }
    });
  }

  loadImage(image: any) {
    /*console.log('target => ', image.target);
    console.log('image.target.files[0] => ', image.target.files[0]);*/
    this.image = image.target.files[0] as File;
  }


}
