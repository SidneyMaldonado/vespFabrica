import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { funcao } from '../entities/funcao';
import { FuncaoService } from '../services/funcao.service';

@Component({
  selector: 'app-alterar-funcao',
  templateUrl: './alterar-funcao.component.html',
  styleUrls: ['./alterar-funcao.component.css']
})
export class AlterarFuncaoComponent implements OnInit {
  
  funcao!: funcao

  @Input() id?:Number

  constructor(private servicoFuncao: FuncaoService) { }

  ngOnInit(): void {

    this.servicoFuncao.consultar()

  }

  alterar(frm:NgForm){

    this.servicoFuncao.incluir(this.funcao).subscribe(
      dados=> { alert("Funcao cadastrado com sucesso."), console.log(dados)},
      error=> { alert("Erro ao Cadastrar Funcao"), console.log(error) }
    )

  }
}
