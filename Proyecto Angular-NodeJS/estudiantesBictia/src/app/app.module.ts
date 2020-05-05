import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { StudentService } from './services/students.service';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { CrearEstudiantesComponent } from './components/crear-estudiantes/crear-estudiantes.component';
import { PrintStudentsComponent } from './components/print-students/print-students.component';

const appRoutes: Routes = [
  { path: '', component: CrearEstudiantesComponent },
  { path: 'createStudents', component: CrearEstudiantesComponent },
  { path: 'printStudents', component: PrintStudentsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CrearEstudiantesComponent,
    PrintStudentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
