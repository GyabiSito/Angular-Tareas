import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from '../interface/tarea.interface';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private http:HttpClient) { }
  urlBase=environment.urlBase;
  getTareas(): Observable<Tarea[]>{
    return this.http.get<Tarea[]>(this.urlBase);
  }
  getTareaById(id:string | null): Observable<Tarea>{
    return this.http.get<Tarea>(`${this.urlBase}/${id}`);
  }
  postTareas(tarea:Tarea): Observable<Tarea>{
    return this.http.post<Tarea>(this.urlBase, tarea);
  }
  putTareas(tarea:Tarea, id:string | null): Observable<Tarea>{
    return this.http.put<Tarea>(`${this.urlBase}/${id}`, tarea);
  }
  deleteTareaById(id: string): Observable<void> {
    return this.http.delete<void>(`${this.urlBase}/${id}`);
  }
  

}
