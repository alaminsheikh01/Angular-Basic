import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [CommonModule, ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  todoForm = new FormGroup({
    id: new FormControl(0),
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required]),
    dueDate: new FormControl('', [Validators.required]),
    completed: new FormControl(false),
  });

  onSubmit(){
    console.log(this.todoForm.value)
  }
}
