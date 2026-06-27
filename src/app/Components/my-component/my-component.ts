import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ObservableService } from '../../services/observable-service';
import { Subscription } from 'rxjs';
// decorator
@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './my-component.html',
  styleUrl: './my-component.css',
})
export class MyComponent implements OnInit, OnDestroy {
  subcription!: Subscription;

  users: any[] = [];
  constructor(private service: ObservableService) {}
  ngOnInit(): void {
    // this.users$ = this.service.getUsers();
    this.subcription = this.service.getUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
    });
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }
}
