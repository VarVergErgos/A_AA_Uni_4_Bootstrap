import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css'],
})
export class ListStudentComponent {
  constructor(private student: StudentsService) {}

  studentData: any = [];
  deleteStudent(student_id : any){
    console.log(student_id);
    this.student.deleteStudentById(student_id).subscribe((result)=>{
     // console.log(result);
     //Refresh the table
     this.ngOnInit();
    })
  }

  ngOnInit(): void {
    this.student.getAllStudents().subscribe((allData) => {
      // console.log(allData);
      this.studentData = allData;
    });
  }
}
