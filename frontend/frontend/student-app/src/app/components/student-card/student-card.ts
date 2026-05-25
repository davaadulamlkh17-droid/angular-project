import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../../models/student.model';

@Component({
  selector: 'app-student-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-card.html',
  styleUrls: ['./student-card.css']
})
export class StudentCardComponent {
  @Input() student!: Student;
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<Student>();

  getGradeClass(): string {
    switch (this.student.grade) {
      case 'A': return 'grade-excellent';
      case 'B': return 'grade-good';
      case 'C': return 'grade-average';
      default: return 'grade-poor';
    }
  }

  onDelete(): void {
    this.delete.emit(this.student.id);
  }

  onEdit(): void {
    this.edit.emit(this.student);
  }
}