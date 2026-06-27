import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ObservableService } from '../../services/observable-service';
// decorator
@Component({
  selector: 'app-my-component',
  imports: [CommonModule],
  templateUrl: './my-component.html',
  styleUrl: './my-component.css',
})
export class MyComponent {

  items: Number[] = []
  constructor(private service: ObservableService) {
    this.service.getNumber().subscribe({
      next: (data) =>{
        this.items.push(data);
      }
    });
  }
}
