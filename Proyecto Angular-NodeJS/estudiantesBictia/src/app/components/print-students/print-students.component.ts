import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';

@Component({
  selector: 'app-print-students',
  templateUrl: './print-students.component.html',
  styleUrls: ['./print-students.component.css']
})
export class PrintStudentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
