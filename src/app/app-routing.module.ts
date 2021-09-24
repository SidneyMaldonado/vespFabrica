import { ListarRoupaComponent } from './listar-roupa/listar-roupa.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarvendaComponent } from './listarvenda/listarvenda.component';

const routes: Routes = [
  {path:'listarroupas', component: ListarRoupaComponent}, 
  {path:'listarvendas', component: ListarvendaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
