import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Funcionario } from '../entities/funcionario';
import { FuncionarioService } from '../services/funcionario.service';

@Component({
  selector: 'app-alterar-funcionario',
  templateUrl: './alterar-funcionario.component.html',
  styleUrls: ['./alterar-funcionario.component.css']
})
export class AlterarFuncionarioComponent implements OnInit {

  funcionario!: Funcionario

  constructor(private route: ActivatedRoute,private servicoFuncionario: FuncionarioService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.servicoFuncionario.consultar(id).subscribe(
      dados => this.funcionario = dados,
      error => {alert("Erro ao ler funcionario"), console.log(error)}
    )
  }
  
  alterar(frm: NgForm){
    this.servicoFuncionario.alterar(this.funcionario).subscribe(
      dados => {alert("Funcionario alterado com sucesso."), console.log(dados)},
      error=> {alert("Erro ao alterar funcionario"), console.log(error)}
    )
  }

}
