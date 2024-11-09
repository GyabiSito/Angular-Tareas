import { Component, inject } from '@angular/core';
import { UpdateTareaComponent } from '../../components/update-tarea/update-tarea.component';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-update-tarea-page',
  standalone: true,
  imports: [UpdateTareaComponent],
  templateUrl: './update-tarea-page.component.html',
  styleUrl: './update-tarea-page.component.css'
})
export class UpdateTareaPageComponent {

}
