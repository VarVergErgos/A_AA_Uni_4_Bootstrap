import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css'],
})
export class ListStudentComponent {
  constructor(private student: StudentsService) {}


  studentData :any =[];
  ngOnInit(): void {
    this.student.getAllStudents().subscribe((allData) => {
     // console.log(allData);
    this.studentData = allData;   
    });
  }
}
