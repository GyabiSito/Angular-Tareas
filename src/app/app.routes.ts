import { Routes } from '@angular/router';
import { TareaPageComponent } from './tarea/pages/tarea-page/tarea-page.component';
import { PadreComponent } from './input/padre/padre.component';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { UpdateTareaPageComponent } from './tarea/pages/update-tarea-page/update-tarea-page.component';

export const routes: Routes = [
    {
        path:'',
        component:InicioPageComponent
    },
    {
        path:'tareas',
        component:TareaPageComponent
    },
    {
        path:'update',
        component:UpdateTareaPageComponent
    },
    {
        path:'tareas/update/:id',
        component:UpdateTareaPageComponent
    },
    {
        path:'padre',
        component:PadreComponent
    },
    
    {
        path:'**',
        redirectTo:''
    }
];
