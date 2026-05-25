import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  // БАГИЙН backend-ийн URL
  // Анхаарах: БАГ бүр өөрсдийн backend ажиллуулж, энийг өөрчилнө
  private apiUrl = 'http://localhost:8080/api/students';

  constructor(private http: HttpClient) { }

  // Бүх оюутан авах
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  // Шинэ оюутан нэмэх
  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student);
  }

  // Оюутан шинэчлэх
  updateStudent(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.apiUrl}/${id}`, student);
  }

  // Оюутан устгах
  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}