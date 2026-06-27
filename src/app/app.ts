import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponent } from "./Components/my-component/my-component";
import { Employee } from "./services/employee/employee";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Employee],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  message="";
  receive(data: string){
    this.message = data
  }
}
