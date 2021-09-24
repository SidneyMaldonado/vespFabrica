import { ListarRoupaComponent } from './listar-roupa/listar-roupa.component';
import { ListarLojaComponent } from './listar-loja/listar-loja.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarSetorComponent } from './listar-setor/listar-setor.component';
import { ListarvendaComponent } from './listarvenda/listarvenda.component';
import { ListarFuncionarioComponent } from './listar-funcionario/listar-funcionario.component';
import { ListarTecidoComponent } from './listar-tecido/listar-tecido.component';

const routes: Routes = [
  {path:'listarroupas', component: ListarRoupaComponent},
  {path:'listarsetor', component: ListarSetorComponent},  
  {path:'listarvendas', component: ListarvendaComponent}, 
  {path:'listarlojas', component : ListarLojaComponent},
  {path:'listarfuncionario', component: ListarFuncionarioComponent},
  {path:'listartecidos', component: ListarTecidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
