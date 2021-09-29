import { ViewFuncaoVendaPrecoComponent } from './view-funcao-venda-preco/view-funcao-venda-preco.component';
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
import { IncluirRoupaTecidoComponent } from './incluir-roupa-tecido/incluir-roupa-tecido.component';
import { IncluirFuncionarioComponent } from './incluir-funcionario/incluir-funcionario.component';
import { IncluirSetorComponent } from './incluir-setor/incluir-setor.component';
import { IncluirLojaComponent } from './incluir-loja/incluir-loja.component';
import { AlterarRoupaComponent } from './alterar-roupa/alterar-roupa.component';
import { IncluirFuncaoComponent } from './incluir-funcao/incluir-funcao.component';
import { AlterarTecidoComponent } from './alterar-tecido/alterar-tecido.component';
import { AlterarSetorComponent } from './alterar-setor/alterar-setor.component';
import { AlterarFuncionarioComponent } from './alterar-funcionario/alterar-funcionario.component';
import { AlterarFuncaoComponent } from './alterar-funcao/alterar-funcao.component';
import { AlterarLojaComponent } from './alterar-loja/alterar-loja.component';
import { AlterarRoupaTecidoComponent } from './alterar-roupa-tecido/alterar-roupa-tecido.component';
import { AlterarVendaComponent } from './alterar-venda/alterar-venda.component';
import { IncluirVendaComponent } from './incluir-venda/incluir-venda.component';
import { ViewQuantidadeVendasSetorService } from './services/view-quantidade-vendas-setor.service';
import { ViewQuantidadeVendasSetorComponent } from './view-quantidade-vendas-setor/view-quantidade-vendas-setor.component';
import { ViewQuantidadeTecidoComponent } from './view-quantidade-tecido/view-quantidade-tecido.component';

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
  {path:'alterartecido/id:', component: AlterarTecidoComponent},
  {path:'alterarsetor/:id', component: AlterarSetorComponent}, 
  {path:'alterarroupa/:id', component: AlterarRoupaComponent},
  {path:'incluirfuncao', component: IncluirFuncaoComponent},
  {path:'alterarfuncionario/:id',component: AlterarFuncionarioComponent},
  {path:'incluirfuncao', component: IncluirFuncaoComponent},  
  {path:'alterarfuncao/:id', component: AlterarFuncaoComponent},
  {path:'alterartecido/:id', component: AlterarTecidoComponent},
  {path:'alterarfuncao', component: AlterarFuncaoComponent},
  {path:'alterartecido/:id', component: AlterarTecidoComponent},
  {path:'alterarloja/:id', component: AlterarLojaComponent },
  {path:'alterarroupatecido/:id', component: AlterarRoupaTecidoComponent},
  {path:'alterarvenda/:id', component: AlterarVendaComponent},
  {path:'viewfuncaovendapreco', component: ViewFuncaoVendaPrecoComponent},
  {path:'viewquantidadevendassetor', component: ViewQuantidadeVendasSetorComponent},
  {path:'viewquantidadetecido', component: ViewQuantidadeTecidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
