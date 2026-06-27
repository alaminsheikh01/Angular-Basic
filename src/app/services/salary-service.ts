import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SalaryService {
  calculateSalary(base: number, bonus: number){
    return base + bonus;
  }
}
