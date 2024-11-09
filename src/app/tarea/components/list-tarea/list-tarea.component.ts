import { Component, inject, OnInit } from '@angular/core';
import { Tarea } from '../../interface/tarea.interface';
import { AddTareaComponent } from "../add-tarea/add-tarea.component";
import { TareaService } from '../../service/tarea.service';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-tarea',
  standalone: true,
  imports: [AddTareaComponent, RouterLink],
  templateUrl: './list-tarea.component.html',
  styleUrl: './list-tarea.component.css'
})
export class ListTareaComponent implements OnInit{
  
  
  tareaService=inject(TareaService);

  listaTareas: Tarea[] = [];

  ngOnInit(): void {
    this.listarTareas();
  }

  listTareas(tarea: Tarea){
    //El spread operator (...) se utiliza para copiar un objeto o un array, pero solo copia el primer nivel, si el objeto o array tiene más niveles, estos no se copiarán.
    //En ese caso, usar structuredClone()
    const task=structuredClone(tarea);
    //this.listaTareas.push({...tarea});
    this.listaTareas.push(task);
  }

  listarTareas(){
    this.tareaService.getTareas().subscribe({
      next: (tareas: Tarea[]) => this.listaTareas = tareas,
      error: (error) => console.log('Error al listar tareas', error)
    })
  }

  delete(id: string) {
    this.tareaService.deleteTareaById(id).subscribe({
      next: () => {
        console.log('Tarea eliminada con éxito');
        this.listarTareas();
      },
      error: (error: HttpErrorResponse) => {
        console.error(`Error al eliminar la tarea:`, error.message);
        console.error('Status:', error.status);
        console.error('Response:', error.error);
      }
    });
  }  
}
