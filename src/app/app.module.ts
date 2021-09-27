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
<<<<<<< HEAD
    ListarFuncionarioComponent,
    ListarTecidoComponent,
    IncluirTecidoComponent
=======
    ListarTecidoComponent
>>>>>>> 03b13ccb1bd0bc7eb3b406b5fd3d97cc6e199798
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
