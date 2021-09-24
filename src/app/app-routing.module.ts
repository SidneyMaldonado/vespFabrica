import { ListarRoupaComponent } from './listar-roupa/listar-roupa.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarSetorComponent } from './listar-setor/listar-setor.component';

const routes: Routes = [
  {path:'listarroupas', component: ListarRoupaComponent},
  {path:'listarsetor', component: ListarSetorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
