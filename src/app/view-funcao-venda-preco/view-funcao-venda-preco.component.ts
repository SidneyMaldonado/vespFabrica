import { ViewFuncaoVendaPrecoService } from './../services/view-funcao-venda-preco.service';
import { ViewFuncaoVendaPreco } from '../views/ViewFuncaoVendaPreco';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-funcao-venda-preco',
  templateUrl: './view-funcao-venda-preco.component.html',
  styleUrls: ['./view-funcao-venda-preco.component.css']
})
export class ViewFuncaoVendaPrecoComponent implements OnInit {

  viewFuncaoVendaPrecos: ViewFuncaoVendaPreco[] = []

  constructor( private viewFuncaoVendaPrecoService: ViewFuncaoVendaPrecoService) { }

  ngOnInit(): void {

    this.viewFuncaoVendaPrecoService.listar().subscribe(
      dados => this.viewFuncaoVendaPrecos = dados,
      error => alert('Erro ao recuperar view')
    )

  }

}
