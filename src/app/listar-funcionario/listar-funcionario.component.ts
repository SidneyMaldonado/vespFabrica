
import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../entities/funcionario';
import { FuncionarioService } from '../services/funcionario.service';

@Component({
  selector: 'app-listar-funcionario',
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.css']
})
export class ListarFuncionarioComponent implements OnInit {
  title = "Lista de Funcionarios";

  funcionarios: Funcionario[] = [];
  constructor(private servicoFuncionario: FuncionarioService) { }

  ngOnInit(): void {
    this.servicoFuncionario.listar().subscribe(
      dados => { this.funcionarios= dados, console.log(this.funcionarios) },
      error => { console.log("Erro ao recuperar roupas ", error)}
    )
  }

  listaMock(): Funcionario[] {
    let registros: Funcionario[] = [
      {
        "idfuncionario": 32,
        "nome": "Matheus Tomi",
        "cpf": "65779758093",
        "idSetor": 3,
        "email": "matheus@gmail.com",
        "salario": 1200.0,
        "idFuncao": 1,
        "datadeContratacao": new Date("2019-01-01")
      },
      {
        "idfuncionario": 33,
        "nome": "Matheus Tomi",
        "cpf": "65779758093",
        "idSetor": 3,
        "email": "matheus@gmail.com",
        "salario": 1200.0,
        "idFuncao": 1,
        "datadeContratacao": new Date("2019-01-01")
      }
    ]

    return registros

  }

}
