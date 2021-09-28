import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { funcao } from '../entities/funcao';
import { FuncaoService } from '../services/funcao.service';

@Component({
  selector: 'app-incluir-funcao',
  templateUrl: './incluir-funcao.component.html',
  styleUrls: ['./incluir-funcao.component.css']
})
export class IncluirFuncaoComponent implements OnInit {
  
  funcao: funcao = {idFuncao:0, nome:''}

  constructor( private servicoFuncao: FuncaoService) { }

  ngOnInit(): void {
  }

  incluir(frm: NgForm) { 
    this.servicoFuncao.incluir(this.funcao).subscribe(
      dados => {alert ("Cadastrou nome com sucesso"), console.log(dados)},
      error => alert ("Erro ao cadastrar o nome" + error)
 )
}

}
