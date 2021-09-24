
import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../entities/funcionario';
import { FuncionarioService } from '../services/funcionario.service';

@Component({
  selector: 'app-listar-funcionario',
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.css']
})
export class ListarFuncionarioComponent implements OnInit {

  funcionarios: Funcionario[] = [];
  constructor(private servicoFuncionario: FuncionarioService) { }

  ngOnInit(): void {
    this.servicoFuncionario.listar().subscribe(
      dados => { this.funcionarios= dados, console.log(this.funcionarios) },
      error => { console.log("Erro ao recuperar roupas ", error)}
    )
  }

}
