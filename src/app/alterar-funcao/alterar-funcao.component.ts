import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { funcao } from '../entities/funcao';
import { FuncaoService } from '../services/funcao.service';

@Component({
  selector: 'app-alterar-funcao',
  templateUrl: './alterar-funcao.component.html',
  styleUrls: ['./alterar-funcao.component.css']
})
export class AlterarFuncaoComponent implements OnInit {
  
  funcao!: funcao
 
  @Input() id?:number

  constructor(private route: ActivatedRoute,private servicoFuncao: FuncaoService) { }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.servicoFuncao.consultar(id).subscribe(
      dados=> this.funcao = dados,
      error=> alert("erro ao ler funcao")
    )
  }

  alterar(frm:NgForm){

    this.servicoFuncao.alterar(this.funcao).subscribe(
      dados=> { alert("Funcao cadastrado com sucesso."), console.log(dados)},
      error=> { alert("Erro ao Cadastrar Funcao"), console.log(error) }
    )

  }
}
