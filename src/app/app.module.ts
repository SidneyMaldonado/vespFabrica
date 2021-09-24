import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarRoupaComponent } from './listar-roupa/listar-roupa.component';
<<<<<<< HEAD
import { ListarFuncaoComponent } from './listar-funcao/listar-funcao.component';
=======
import { ListarSetorComponent } from './listar-setor/listar-setor.component';
import { ListarvendaComponent } from './listarvenda/listarvenda.component';
import { ListarLojaComponent } from './listar-loja/listar-loja.component';
import { ListarFuncionarioComponent } from './listar-funcionario/listar-funcionario.component';
import { ListarTecidoComponent } from './listar-tecido/listar-tecido.component';
>>>>>>> 1c79aca8caef01de8df097853032a2719da6672a

@NgModule({
  declarations: [
    AppComponent,
    ListarRoupaComponent,
<<<<<<< HEAD
    ListarFuncaoComponent
=======
    ListarSetorComponent,
    ListarvendaComponent,
    ListarLojaComponent,
    ListarFuncionarioComponent,
    ListarTecidoComponent
>>>>>>> 1c79aca8caef01de8df097853032a2719da6672a
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
