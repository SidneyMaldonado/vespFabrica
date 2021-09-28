import { Component, Input, OnInit } from '@angular/core';
import { Tecido } from '../entities/tecido';

@Component({
  selector: 'app-alterar-funcao',
  templateUrl: './alterar-funcao.component.html',
  styleUrls: ['./alterar-funcao.component.css']
})
export class AlterarFuncaoComponent implements OnInit {
  
  funcao!: Funcao

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
