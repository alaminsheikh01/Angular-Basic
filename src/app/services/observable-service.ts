import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Users } from '../models/Users';

@Injectable({
  providedIn: 'root',
})
export class ObservableService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http
      .get<Users[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(map((users) => users.map((u) => ({ ...u, name: u?.name?.toUpperCase() }))));
  }
}
