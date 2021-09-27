import { Component, OnInit } from '@angular/core';
import { Venda } from '../entities/venda';
import { VendaService } from '../services/venda.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-incluir-venda',
  templateUrl: './incluir-venda.component.html',
  styleUrls: ['./incluir-venda.component.css']
})
export class IncluirVendaComponent implements OnInit {

  venda: Venda = { idVenda:0, idFuncionario:0, idLoja:0, idRoupa:0}

  constructor(private servicoVenda: VendaService) {}

  ngOnInit(): void {
  }

  incluir(frm: NgForm){

    this.servicoVenda.incluir(this.venda).subscribe(
      dados=> { alert("Tecido Cadastrado com sucesso."), console.log(dados)},
      error=> { alert("Erro ao Cadastrar Tecido"), console.log(error) }
    )
  }

 

}
