import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Student } from '../../../models/student.model';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule, FormsModulfe],
  templateUrl: './student-form.html',
  styleUrls: ['./student-form.css']
})
export class StudentFormComponent {
  @Input() student: Student = { id: 0, name: '', email: '', age: 0, grade: '' };
  @Input() isEditing = false;
  @Output() save = new EventEmitter<Student>();
  @Output() cancel = new EventEmitter<void>();

  onSubmit(): void {
    this.save.emit({ ...this.student });
  }

  onCancel(): void {
    this.cancel.emit();
  }
}