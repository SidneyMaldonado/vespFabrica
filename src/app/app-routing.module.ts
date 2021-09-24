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


const routes: Routes = [
  {path:'listarroupas', component: ListarRoupaComponent},
<<<<<<< HEAD
  {path:'listarfuncao', component: ListarFuncaoComponent},
=======
  {path:'listarfuncionario', component: ListarFuncionarioComponent},
  {path:'listarroupatecido', component: ListarRoupaTecidoComponent},
>>>>>>> d825cc4cf0e2e1187577b5c052abf82ce2630506
  {path:'listarsetor', component: ListarSetorComponent},  
  {path:'listarvendas', component: ListarvendaComponent}, 
  {path:'listarlojas', component : ListarLojaComponent},
  {path:'listartecidos', component: ListarTecidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
