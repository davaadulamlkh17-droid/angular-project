import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../models/student.model';
import { StudentService } from '../../services/student.service';
import { StudentCardComponent } from '../student-card/student-card';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, StudentCardComponent],
  templateUrl: './student-list.html',
  styleUrls: ['./student-list.css']
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];
  loading = true;
  errorMessage = '';

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.loading = true;
    this.errorMessage = '';

    this.studentService.getStudents().subscribe({
      next: (data) => {
        this.students = data;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = 'Backend-тэй холбогдоход алдаа: ' + err.message;
        this.loading = false;
        console.error('Error:', err);
      }
    });
  }

  handleDelete(id: number): void {
    this.studentService.deleteStudent(id).subscribe({
      next: () => this.loadStudents(),  // Жагсаалт дахин ачаална
      error: (err) => console.error('Delete error:', err)
    });
  }

  handleEdit(student: Student): void {
    // TODO: edit logic
    console.log('Edit student:', student);
  }

  get studentCount(): number {
    return this.students.length;
  }
}
