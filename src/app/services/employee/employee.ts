import { Component } from '@angular/core';
import { SalaryService } from '../salary-service';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {
  base = 30000;
  bonus= 4000;
  finalSalary = 0;

  constructor(private salaryService: SalaryService){
    this.finalSalary = this.salaryService.calculateSalary(this.base, this.bonus)
  } 
}
