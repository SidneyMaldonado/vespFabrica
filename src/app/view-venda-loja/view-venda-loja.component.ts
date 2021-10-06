import { Component, OnInit } from '@angular/core';
import { ViewVendaLojaService } from '../services/view-venda-loja.service';
import { ViewVendaLoja } from '../views/ViewVendaLoja';

@Component({
  selector: 'app-view-venda-loja',
  templateUrl: './view-venda-loja.component.html',
  styleUrls: ['./view-venda-loja.component.css']
})
export class ViewVendaLojaComponent implements OnInit {

  viewVendaLojas: ViewVendaLoja[] = []

  constructor(private viewVendaLojaService: ViewVendaLojaService) { }

  ngOnInit(): void {

    this.viewVendaLojaService.listar().subscribe(
      dados => this.viewVendaLojas = dados,
      error => alert('Erro ao recuperar view')
    )
  }

}
