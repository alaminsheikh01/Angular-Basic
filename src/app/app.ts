import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MyComponent } from "./Components/my-component/my-component";
import { Employee } from "./services/employee/employee";

@Component({
  selector: 'app-root',
  imports: [MyComponent, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
