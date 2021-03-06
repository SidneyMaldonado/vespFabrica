import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarRoupaComponent } from './listar-roupa/listar-roupa.component';
import { ListarFuncaoComponent } from './listar-funcao/listar-funcao.component';
import { ListarSetorComponent } from './listar-setor/listar-setor.component';
import { ListarvendaComponent } from './listarvenda/listarvenda.component';
import { ListarLojaComponent } from './listar-loja/listar-loja.component';
import { ListarFuncionarioComponent } from './listar-funcionario/listar-funcionario.component';
import { ListarRoupaTecidoComponent } from './listar-roupa-tecido/listar-roupa-tecido.component';
import { ListarTecidoComponent } from './listar-tecido/listar-tecido.component';
import { IncluirTecidoComponent } from './incluir-tecido/incluir-tecido.component';
import { FormsModule } from '@angular/forms';
import { IncluirRoupaComponent } from './incluir-roupa/incluir-roupa.component';
import { IncluirLojaComponent } from './incluir-loja/incluir-loja.component';
import { IncluirRoupaTecidoComponent } from './incluir-roupa-tecido/incluir-roupa-tecido.component';
import { IncluirSetorComponent } from './incluir-setor/incluir-setor.component';
import { IncluirFuncionarioComponent } from './incluir-funcionario/incluir-funcionario.component';
import { AlterarRoupaComponent } from './alterar-roupa/alterar-roupa.component';
import { IncluirVendaComponent } from './incluir-venda/incluir-venda.component';
import { AlterarTecidoComponent } from './alterar-tecido/alterar-tecido.component';
import { AlterarSetorComponent } from './alterar-setor/alterar-setor.component';
import { AlterarFuncionarioComponent } from './alterar-funcionario/alterar-funcionario.component';
import { AlterarFuncaoComponent } from './alterar-funcao/alterar-funcao.component';
import { AlterarLojaComponent } from './alterar-loja/alterar-loja.component';
import { IncluirFuncaoComponent } from './incluir-funcao/incluir-funcao.component';
import { AlterarRoupaTecidoComponent } from './alterar-roupa-tecido/alterar-roupa-tecido.component';
import { AlterarVendaComponent } from './alterar-venda/alterar-venda.component';
import { ViewFuncaoVendaPrecoComponent } from './view-funcao-venda-preco/view-funcao-venda-preco.component';
import { ViewVendaLojaComponent } from './view-venda-loja/view-venda-loja.component';
import { ViewQuantidadeVendasSetorComponent } from './view-quantidade-vendas-setor/view-quantidade-vendas-setor.component';
import { ViewRoupaTecidoComponent } from './view-roupa-tecido/view-roupa-tecido.component';
import { ViewQuantidadeTecidoComponent } from './view-quantidade-tecido/view-quantidade-tecido.component';
import { ViewSetorFuncionarioQuantidadeComponent } from './view-setor-funcionario-quantidade/view-setor-funcionario-quantidade.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

@NgModule({
  declarations: [
    AppComponent,
    ListarRoupaComponent,
    ListarFuncaoComponent,
    ListarFuncionarioComponent,
    ListarRoupaTecidoComponent,
    ListarSetorComponent,
    ListarvendaComponent,
    ListarLojaComponent,
    ListarTecidoComponent,
    IncluirTecidoComponent,
    IncluirLojaComponent,
    IncluirSetorComponent,
    IncluirFuncaoComponent,     
    IncluirRoupaComponent,
    IncluirRoupaTecidoComponent,
    IncluirFuncionarioComponent,
    AlterarRoupaComponent,
    IncluirVendaComponent,
    IncluirSetorComponent,
    AlterarTecidoComponent,
    AlterarSetorComponent,
    AlterarFuncionarioComponent,
    AlterarFuncaoComponent,
    AlterarLojaComponent,
    AlterarRoupaTecidoComponent,
    AlterarVendaComponent,
    ViewFuncaoVendaPrecoComponent,
    ViewQuantidadeVendasSetorComponent,
    ViewRoupaTecidoComponent,    
    ViewQuantidadeTecidoComponent,
    ViewVendaLojaComponent,
    ViewQuantidadeVendasSetorComponent,    
    ViewSetorFuncionarioQuantidadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
