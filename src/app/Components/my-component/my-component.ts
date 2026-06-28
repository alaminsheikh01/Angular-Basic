import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// decorator
@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './my-component.html',
  styleUrl: './my-component.css',
})
export class MyComponent {
  // courseName : string = 'Angular';

  cityList = signal<string[]>(['Hamburg', 'Kiel']);

  studentObj = signal<any>({
    name: 'Alamin',
    city: 'Kiel',
  });

  AddCityList(name: string) {
    this.cityList.update((data) => [...data, name]);
  }

  changeCity() {
    this.studentObj.update((data: any) => ({ ...data, city: 'Hamburg' }));
  }
}
