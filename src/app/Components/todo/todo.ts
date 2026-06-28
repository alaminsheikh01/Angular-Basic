import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ɵInternalFormsSharedModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { TodoType } from './type';

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
    priority: new FormControl(''),
  });

  todos: TodoType[] = [];
  selectedTodo: TodoType | null = null;
  filteredTodos: TodoType[] = []

  onCreate() {
    const values = this.todoForm.value;

    const newTodo: TodoType = {
      id: Date.now(),
      title: values?.title ?? '',
      description: values?.description ?? '',
      priority: values?.priority ?? 'Medium',
      dueDate: values?.dueDate ?? '',
      completed: values?.completed ?? false,
    };
    this.todos.push(newTodo);
     this.filteredTodos = [...this.todos];
  }
  onUpdate() {
    if (!this.selectedTodo) return;

    const index = this.todos.findIndex((todo) => todo.id === this.selectedTodo!.id);

    if (index !== -1) {
      this.todos[index] = {
        ...this.todoForm.value,
        id: this.selectedTodo.id,
      } as TodoType;

      this.todoForm.reset({
        id: 0,
        priority: 'Medium',
        completed: false,
      });
      this.selectedTodo = null;
    }
  }

  onSubmit() {
    if (this.selectedTodo) {
      this.onUpdate();
    } else {
      this.onCreate();
    }
  }

  onEdit(data: TodoType) {
    this.selectedTodo = data;
    this.todoForm.patchValue({
      id: data?.id,
      title: data?.title,
      description: data?.description,
      priority: data?.priority,
      dueDate: data?.dueDate,
      completed: data?.completed,
    });
  }
  onDelete(item: TodoType) {
    const isConfirm = confirm('Are you sure want to delete!');
    console.log("item",item)

    if (!isConfirm) {
      return;
    }
    this.todos = this.todos.filter((todo) => todo.id !== item?.id);
  }

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value.toLocaleLowerCase();

    if (!value) {
    this.filteredTodos = [...this.todos];
    return;
  }

    this.filteredTodos = this.todos.filter(todo => 
      todo.title.toLocaleLowerCase().includes(value) ||
      todo.description.toLocaleLowerCase().includes(value)
    )
  }
}
