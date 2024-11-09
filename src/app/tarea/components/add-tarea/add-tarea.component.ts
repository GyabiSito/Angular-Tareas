import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Tarea } from '../../interface/tarea.interface';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TareaService } from '../../service/tarea.service';
@Component({
  selector: 'app-add-tarea',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-tarea.component.html',
  styleUrl: './add-tarea.component.css'
})
export class AddTareaComponent {

  @Output()
  emitirTarea: EventEmitter<Tarea> = new EventEmitter();
  tareaService = inject(TareaService);

  fb = inject(FormBuilder);
  formulario = this.fb.nonNullable.group({
    id: [0, [Validators.required]],
    nombre: ['', [Validators.required, Validators.minLength(3)]]
  })
  addTarea() {
    if (this.formulario.invalid) return;
    const tarea = this.formulario.getRawValue();
    this.addTareaDB(tarea);
    this.emitirTarea.emit(tarea);
  }

  addTareaDB(tarea: Tarea) {
    this.tareaService.postTareas(tarea).subscribe({
      next: (tarea) => console.log('Tarea añadida', tarea),
      error: (error) => console.log('Error al añadir tarea', error)
    })
  }
}
