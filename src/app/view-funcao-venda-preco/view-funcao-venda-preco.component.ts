import { ViewFuncaoVendaPrecoService } from './../services/view-funcao-venda-preco.service';
<<<<<<< HEAD
import { ViewFuncaoVendaPreco } from './../views/ViewFuncaoVendaPreco';
=======
import { ViewFuncaoVendaPreco } from '../views/ViewFuncaoVendaPreco';
>>>>>>> a9c7343ad90933a3bdde3ec541d2c1315f3e1fb9
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
