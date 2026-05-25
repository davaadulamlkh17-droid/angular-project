import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { StudentListComponent } from './components/student-list/student-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, StudentListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  appTitle = 'Student Portal';
}