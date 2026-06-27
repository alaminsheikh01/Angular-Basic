import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
// decorator
@Component({
  selector: 'app-my-component',
  imports: [CommonModule],
  templateUrl: './my-component.html',
  styleUrl: './my-component.css',
})
export class MyComponent {
  @Output() notify = new EventEmitter();
  message = "Hello Parent"

  sendMessage(){
    this.notify.emit(this.message)
  }
}
