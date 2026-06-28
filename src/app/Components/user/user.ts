import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  userForm: FormGroup = new FormGroup({
    userId: new FormControl(0),
    userName: new FormControl(''),
    emailId: new FormControl(''),
    fullName: new FormControl(''),
    password: new FormControl(''),
  });

  http = inject(HttpClient);

  userList$: Observable<any[]>;
  constructor() {
    this.userList$ = this.http
      .get<any[]>('https://api.freeprojectapi.com/api/BankLoan/GetAllUsers')
      .pipe(map((res: any) => res.data));
  }

  onSaveUser() {
    const formValue = this.userForm.value;

    this.http
      .post('https://api.freeprojectapi.com/api/BankLoan/RegisterCustomer', formValue)
      .subscribe({
        next: (response: any) => {
          alert('user data saved!');
        },
        error: (error) => {},
      });
  }

  restForm(){
    this.userForm.reset()
  }
  onUpdateUser(){}

  onEdit(data:any) {
    this.userForm = new FormGroup({
      userId: new FormControl(data?.userId),
      userName: new FormControl(data?.userName),
      emailId: new FormControl(data?.emailId),
      fullName: new FormControl(data?.fullName),
      password: new FormControl(data?.password),
    });
  }
}
