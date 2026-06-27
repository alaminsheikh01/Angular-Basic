import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ObservableService } from '../../services/observable-service';
// decorator
@Component({
  selector: 'app-my-component',
  imports: [CommonModule],
  templateUrl: './my-component.html',
  styleUrl: './my-component.css',
})
export class MyComponent implements OnInit {
  items: Number[] = [];
  constructor(private service: ObservableService) {}
  ngOnInit(): void {
    this.service.getNumber().subscribe({
      next: (data) => {
        this.items.push(data);
      },
    });
  }
}
