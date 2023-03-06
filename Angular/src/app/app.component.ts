import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee/employee.service';
import { Employee } from './employee/Employeemodel/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employeecrud';
  Employees: Employee[] = [];

  constructor() { }

}
