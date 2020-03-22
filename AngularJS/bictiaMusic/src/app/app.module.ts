import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { MusicComponent } from './components/music/music.component';
import { from } from 'rxjs';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
  { path: 'todaLaMusica', component: MusicComponent },
  { path: '', component: SaludoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    MusicComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
