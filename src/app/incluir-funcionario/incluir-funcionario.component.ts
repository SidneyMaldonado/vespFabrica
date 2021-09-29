import { FuncaoService } from './../services/funcao.service';
import { Setor } from './../entities/setor';
import { SetorService } from './../services/setor.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Funcionario } from '../entities/funcionario';
import { FuncionarioService } from '../services/funcionario.service';
import { funcao } from '../entities/funcao';

@Component({
  selector: 'app-incluir-funcionario',
  templateUrl: './incluir-funcionario.component.html',
  styleUrls: ['./incluir-funcionario.component.css']
})
export class IncluirFuncionarioComponent implements OnInit {

  funcionario: Funcionario={idfuncionario:0,nome:'',cpf:'',idSetor:0,email:'',salario:0,idFuncao:0,datadeContratacao: new Date()}
  setores: Setor[] = []
  funcoes: funcao[] = []
  constructor(private funcionarioService: FuncionarioService, private setorService: SetorService, private funcaoService: FuncaoService) { }

  ngOnInit(): void {

    this.setorService.listar().subscribe(
      dados => this.setores = dados,
      error=> alert('Erro ao recuperar setores')
    )
    this.funcaoService.listar().subscribe(
      dados => this.funcoes = dados,
      error => alert('Erro a recuperar funcoes')
    )

  }
  
  incluir(frm: NgForm){
    this.funcionarioService.incluir(this.funcionario).subscribe(
      () => alert("Funcionario cadastrado com sucesso"),
      error => alert("Error ao cadastrar Funcionario")
    )
  }

}
