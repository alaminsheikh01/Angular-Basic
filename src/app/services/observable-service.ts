import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObservableService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(map((users)=> users.map((u) => ({...u,name: u?.name?.toUpperCase()}))))
  }
}
