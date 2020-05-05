import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { UserService } from './service/user.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { MusicComponent } from './components/music/music.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

const appRoutes: Routes = [
  { path: 'todaLaMusica', component: MusicComponent },
  { path: 'registro', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'modificarUsuario', component: UpdateUserComponent },
  { path: 'cambiarContraseña', component: ChangePasswordComponent },
  { path: '', component: SaludoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    MusicComponent,
    NavComponent,
    FooterComponent,
    SignUpComponent,
    LoginComponent,
    UpdateUserComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
