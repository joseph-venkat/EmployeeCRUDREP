export class Employee {
  id: number | undefined;
  name: string | undefined;
  age: number | undefined;
  mobileNumber: string | undefined;
  salary: number | undefined;
  dateOfJoining: Date | undefined;

  constructor(data?: any) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.age = data.age;
      this.mobileNumber = data.mobileNumber;
      this.salary = data.salary;
      this.dateOfJoining= new Date(data.dateOfJoining);
    }
  }
}
