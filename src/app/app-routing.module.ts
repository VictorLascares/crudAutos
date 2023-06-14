import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './Componente/listar/listar.component';
import { AgregarComponent } from './Componente/agregar/agregar.component';
import { EditarComponent } from './Componente/editar/editar.component';

const routes: Routes = [
  { path: 'listar', component: ListarComponent },
  { path: 'agregar', component: AgregarComponent },
  { path: 'editar', component: EditarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
