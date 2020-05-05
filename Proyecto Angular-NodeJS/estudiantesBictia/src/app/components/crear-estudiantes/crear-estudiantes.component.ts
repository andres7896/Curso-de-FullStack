import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { StudentService } from '../../services/students.service';

@Component({
  selector: 'app-crear-estudiantes',
  templateUrl: './crear-estudiantes.component.html',
  styleUrls: ['./crear-estudiantes.component.css']
})
export class CrearEstudiantesComponent implements OnInit {

  public student: Student;

  constructor( private service: StudentService ) { }

  ngOnInit(): void {
    this.student = new Student();
  }

  createStudent(){ 
    console.log()
    this.service.createStudent(this.student).subscribe( (res: any) =>{
      if (res.statusCode !== 200) {
        alert('Error al crear al estudiante');
      }else{
        alert('Estudiante creado correctamente');
      }
    })
  }

}
