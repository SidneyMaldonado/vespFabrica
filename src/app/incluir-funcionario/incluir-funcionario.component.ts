import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Funcionario } from '../entities/funcionario';
import { FuncionarioService } from '../services/funcionario.service';

@Component({
  selector: 'app-incluir-funcionario',
  templateUrl: './incluir-funcionario.component.html',
  styleUrls: ['./incluir-funcionario.component.css']
})
export class IncluirFuncionarioComponent implements OnInit {

funcionario: Funcionario={idfuncionario:0,nome:'',cpf:'',idSetor:0,email:'',salario:0,idFuncao:0,datadeContratacao: new Date()}

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
  }
  
  incluir(frm: NgForm){
    this.funcionarioService.incluir(this.funcionario).subscribe(
      () => alert("Funcionario cadastrado com sucesso"),
      error => alert("Error ao cadastrar Funcionario")
    )
  }

}
