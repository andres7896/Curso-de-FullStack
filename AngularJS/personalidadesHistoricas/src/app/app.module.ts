import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { from } from 'rxjs';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PersonalitiesComponent } from './components/personalities/personalities.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';

const appRoutes: Routes = [
  {path: 'index', component: HomeComponent},
  {path: 'personalidades', component: PersonalitiesComponent},
  {path: 'contacto', component: ContactComponent},
  {path: 'acerca', component: AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CarouselComponent,
    FooterComponent,
    HomeComponent,
    PersonalitiesComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
