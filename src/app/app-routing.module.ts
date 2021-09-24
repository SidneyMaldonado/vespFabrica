import { ListarRoupaComponent } from './listar-roupa/listar-roupa.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarFuncionarioComponent } from './listar-funcionario/listar-funcionario.component';
import { ListarRoupaTecidoComponent } from './listar-roupa-tecido/listar-roupa-tecido.component';

const routes: Routes = [
  {path:'listarroupas', component: ListarRoupaComponent},
  {path:'listarfuncionario', component: ListarFuncionarioComponent},
  {path:'listarroupatecido', component: ListarRoupaTecidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
