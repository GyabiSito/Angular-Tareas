import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TareaPageComponent } from "./tarea/pages/tarea-page/tarea-page.component";
import { PadreComponent } from "./input/padre/padre.component";
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Tareas';
}
