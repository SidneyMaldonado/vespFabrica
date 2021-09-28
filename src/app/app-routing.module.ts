import { ListarRoupaComponent } from './listar-roupa/listar-roupa.component';
import { ListarLojaComponent } from './listar-loja/listar-loja.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarFuncaoComponent } from './listar-funcao/listar-funcao.component';
import { ListarSetorComponent } from './listar-setor/listar-setor.component';
import { ListarvendaComponent } from './listarvenda/listarvenda.component';
import { ListarFuncionarioComponent } from './listar-funcionario/listar-funcionario.component';
import { ListarRoupaTecidoComponent } from './listar-roupa-tecido/listar-roupa-tecido.component';
import { ListarTecidoComponent } from './listar-tecido/listar-tecido.component';
import { IncluirTecidoComponent } from './incluir-tecido/incluir-tecido.component';
import { IncluirRoupaComponent } from './incluir-roupa/incluir-roupa.component';
import { IncluirVendaComponent } from './incluir-venda/incluir-venda.component';
import { IncluirRoupaTecidoComponent } from './incluir-roupa-tecido/incluir-roupa-tecido.component';
import { IncluirFuncionarioComponent } from './incluir-funcionario/incluir-funcionario.component';
import { IncluirSetorComponent } from './incluir-setor/incluir-setor.component';
import { IncluirLojaComponent } from './incluir-loja/incluir-loja.component';
import { IncluirFuncaoComponent } from './incluir-funcao/incluir-funcao.component';
import { AlterarTecidoComponent } from './alterar-tecido/alterar-tecido.component';
import { AlterarFuncionarioComponent } from './alterar-funcionario/alterar-funcionario.component';

const routes: Routes = [
  {path:'listarroupas', component: ListarRoupaComponent},
  {path:'listarfuncao', component: ListarFuncaoComponent},
  {path:'listarfuncionario', component: ListarFuncionarioComponent},
  {path:'listarroupatecido', component: ListarRoupaTecidoComponent},
  {path:'listarsetor', component: ListarSetorComponent},  
  {path:'listarvendas', component: ListarvendaComponent}, 
  {path:'listarlojas', component : ListarLojaComponent},
  {path:'listartecidos', component: ListarTecidoComponent},
  {path:'incluirtecido', component: IncluirTecidoComponent},
  {path:'incluirroupa', component: IncluirRoupaComponent},
  {path:'incluirvenda', component: IncluirVendaComponent},
  {path:'incluirroupatecido', component: IncluirRoupaTecidoComponent},
  {path:'incluirfuncionario', component: IncluirFuncionarioComponent},
  {path:'incluirsetor', component: IncluirSetorComponent},
  {path:'incluirloja', component: IncluirLojaComponent},
  {path:'incluirfuncao', component: IncluirFuncaoComponent},
  {path:'alterartecido/:id',component: AlterarTecidoComponent},
  {path:'alterarfuncionario/:id',component: AlterarFuncionarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }