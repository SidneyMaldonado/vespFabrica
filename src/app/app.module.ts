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
import { ListarTecidoComponent } from './listar-tecido/listar-tecido.component';
import { ListarRoupaTecidoComponent } from './listar-roupa-tecido/listar-roupa-tecido.component';
import { IncluirTecidoComponent } from './incluir-tecido/incluir-tecido.component';
import { FormsModule } from '@angular/forms';
import { IncluirFuncaoComponent } from './incluir-funcao/incluir-funcao.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarRoupaComponent,
    ListarFuncaoComponent,
    ListarSetorComponent,
    ListarvendaComponent,
    ListarLojaComponent,
    ListarFuncionarioComponent,
    ListarTecidoComponent,
    ListarRoupaTecidoComponent,
    IncluirTecidoComponent,
    IncluirFuncaoComponent,
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
