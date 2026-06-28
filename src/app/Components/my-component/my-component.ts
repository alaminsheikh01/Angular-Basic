import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// decorator
@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './my-component.html',
  styleUrl: './my-component.css',
})
export class MyComponent {
  selected: string = '';

  isStudentActive = signal<boolean>(true)

  changeStatus(status:boolean){
    this.isStudentActive.set(status)
  }
}
