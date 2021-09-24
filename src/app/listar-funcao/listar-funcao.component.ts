import { Component, OnInit } from '@angular/core';
import { funcao } from '../entities/funcao';
import { FuncaoService } from '../services/funcao.service';

@Component({
  selector: 'app-listar-funcao',
  templateUrl: './listar-funcao.component.html',
  styleUrls: ['./listar-funcao.component.css']
})
export class ListarFuncaoComponent implements OnInit {

funcoes: funcao[] = []

  constructor( private servicoFuncao: FuncaoService) { }

  ngOnInit(): void {

    this.servicoFuncao.listar().subscribe(
      dados => { this.funcoes= dados, console.log(this.funcoes) },
      error => { console.log("Erro ao recuperar funcao ", error)}
    )

  }

}
