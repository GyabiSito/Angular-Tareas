import { Component } from '@angular/core';
import { ListTareaComponent } from "../../components/list-tarea/list-tarea.component";

@Component({
  selector: 'app-tarea-page',
  standalone: true,
  imports: [ListTareaComponent],
  templateUrl: './tarea-page.component.html',
  styleUrl: './tarea-page.component.css'
})
export class TareaPageComponent {

}
