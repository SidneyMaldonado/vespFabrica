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
    IncluirRoupaComponent,
    IncluirRoupaTecidoComponent,
    IncluirSetorComponent,      
    IncluirRoupaComponent,
    IncluirFuncionarioComponent

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
