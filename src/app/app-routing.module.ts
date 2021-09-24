import { ListarRoupaComponent } from './listar-roupa/listar-roupa.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarFuncionarioComponent } from './listar-funcionario/listar-funcionario.component';
import { ListarTecidoComponent } from './listar-tecido/listar-tecido.component';


const routes: Routes = [
  {path:'listarroupas', component: ListarRoupaComponent},
  {path:'listarfuncionario', component: ListarFuncionarioComponent},
  {path:'listartecidos', component: ListarTecidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
