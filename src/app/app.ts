import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MyComponent } from "./Components/my-component/my-component";
import { Employee } from "./services/employee/employee";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MyComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
