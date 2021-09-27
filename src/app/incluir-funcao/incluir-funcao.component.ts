import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-incluir-funcao',
  templateUrl: './incluir-funcao.component.html',
  styleUrls: ['./incluir-funcao.component.css']
})
export class IncluirFuncaoComponent implements OnInit {
  
  funcao: Funcao = {idfuncao:0, nome:''}

  constructor( private servicoFuncao: FuncaoService) { }

  ngOnInit(): void {
  }

  incluir(frm: NgForm) { 
    this.servicoFuncao.incluir(this.funcao).subscribe(
   dados => alert ("Cadastrou nome com sucesso"),
   error => alert ("Erro ao cadatrar o nome")
 )}

}
