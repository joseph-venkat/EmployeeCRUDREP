import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './Employeemodel/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'https://localhost:44393/api/Employees'; 

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}`);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.baseUrl}`, employee);
  }

  updateEmployee(employee: Employee): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${employee.id}`, employee);
  }

  deleteEmployee(id: number): Observable<Employee> {
    return this.http.delete<Employee>(`${this.baseUrl}/${id}`);
  }

  updateEmployeePatch(id: number, employee: Employee): Observable<Employee> {
    return this.http.patch<Employee>(`${this.baseUrl}/${id}`, employee);
  }
}
