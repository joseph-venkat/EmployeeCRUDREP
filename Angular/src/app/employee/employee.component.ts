import { Component } from '@angular/core';
import { Employee } from './Employeemodel/employee'
import { EmployeeService } from './employee.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
selector: 'app-employee',
templateUrl: './employee.component.html',
styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  
// Employee properties
Employees: Employee[] = [];
employeeToAdd: Employee = new Employee();
employeeToUpdate: Employee = new Employee();
employeeToDelete: Employee = new Employee();

// Modal flags
showUpdateModalFlag = false;
showDeleteModalFlag = false;
errorFlag = false;
successFlag = false;

// Modal messages
errorMessage = '';
successMessage = '';

constructor(private employeeService: EmployeeService,private snackBar: MatSnackBar) {}

ngOnInit() {
this.getAllEmployees();
}

// Get all employees
getAllEmployees() {
  this.employeeService.getAllEmployees().subscribe(
    (employees: Employee[]) => {
      this.Employees = employees;
      this.Employees.forEach(element => {
        console.log(element);
      });
    },
    (error) => {
      this.showErrorModal('Error getting employees.');
    }
  );
}

// Add employee
addEmployee() {
  this.employeeService.addEmployee(this.employeeToAdd).subscribe(
    (response) => {
      this.showSuccessModal('Employee added successfully.');
      this.getAllEmployees();
      this.employeeToAdd = new Employee();
    },
    (error) => {
      this.showErrorModal('Error adding employee.');
    }
  );
}

// Show update modal
showUpdateModal(employee: Employee) {
this.employeeToUpdate = Object.assign({}, employee);
this.showUpdateModalFlag = true;
}
onSubmit() {
  if (!this.employeeToAdd.name || !this.employeeToAdd.age || !this.employeeToAdd.mobileNumber || !this.employeeToAdd.salary || !this.employeeToAdd.dateOfJoining) {
    this.snackBar.open('Please fill all required fields', '', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
    return;
  }
 this.addEmployee();
}

// Update employee
updateEmployee() {
  this.employeeService.updateEmployee(this.employeeToUpdate).subscribe(
    (response) => {
      this.showSuccessModal('Employee updated successfully.');
      this.getAllEmployees();
      this.closeModal();
    },
    (error) => {
      this.showErrorModal('Error updating employee.');
    }
  );
}

// Show delete modal
showDeleteModal(employee: Employee) {
  this.employeeToDelete = Object.assign({}, employee);
  this.showDeleteModalFlag = true;
}

// Delete employee
deleteEmployee() {
  if (this.employeeToDelete.id != undefined) {
    this.employeeService.deleteEmployee(this.employeeToDelete.id).subscribe(
      (response) => {
        this.showSuccessModal('Employee deleted successfully.');
        this.getAllEmployees();
        this.closeModal();
      },
      (error) => {
        this.showErrorModal('Error deleting employee.');
      }
    );
}
}
// Show error modal
showErrorModal(message: string)
{
this.errorFlag = true;
this.errorMessage = message;
}

// Show success modal
showSuccessModal(message: string) {
this.successFlag = true;
this.successMessage = message;
}

// Close modal
closeModal() {
this.showUpdateModalFlag = false;
this.showDeleteModalFlag = false;
this.errorFlag = false;
this.successFlag = false;
}

// Get employee by ID
getEmployeeById(id: number) {
  this.employeeService.getEmployeeById(id).subscribe(
    (employee: Employee) => {
      console.log(employee);
    },
    (error) => {
      this.showErrorModal('Error getting employee.');
    }
  );
}

}