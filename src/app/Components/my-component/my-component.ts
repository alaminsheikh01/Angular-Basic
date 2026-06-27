import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ObservableService } from '../../services/observable-service';
// decorator
@Component({
  selector: 'app-my-component',
  standalone:true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './my-component.html',
  styleUrl: './my-component.css',
})
export class MyComponent implements OnInit {
  users$: any
  constructor(private service: ObservableService) {}
  ngOnInit(): void {
    this.users$ = this.service.getUsers()
  }
}
