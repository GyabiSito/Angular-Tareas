import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TareaService } from '../../service/tarea.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea } from '../../interface/tarea.interface';


@Component({
  selector: 'app-update-tarea',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-tarea.component.html',
  styleUrl: './update-tarea.component.css'
})
export class UpdateTareaComponent implements OnInit{
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next:(param)=>{
        this.id=param.get('id');
        this.getTareaById(this.id);
      },
      error:(error)=>console.log('Error al obtener la tarea',error)
    })  
  }
  fb=inject(FormBuilder);
  ts=inject(TareaService);
  id:string | null =null;
  activatedRoute=inject(ActivatedRoute);
  router=inject(Router);

  formulario=this.fb.nonNullable.group({
    id:['',[Validators.required]],
    nombre:['',[Validators.required]]  
  })

  getTareaById(id:string | null){
    this.ts.getTareaById(id).subscribe({
      next:(tarea:Tarea)=>{
        this.formulario.controls['id'].setValue(tarea.id?.toString() || '');
        this.formulario.controls['nombre'].setValue(tarea.nombre || '');
      },
      error:(error)=>console.log('Error al obtener la tarea',error)
    });
  }

  update(){
    if(this.formulario.invalid) return;
    const tarea = {
      ...this.formulario.getRawValue(),
      id: Number(this.formulario.controls['id'].value)
    };
    this.ts.putTareas(tarea,this.id).subscribe({
      next:()=>{
        this.router.navigateByUrl('/tareas');
        console.log('Tarea actualizada',tarea);
        
      }
    })
  }
}
