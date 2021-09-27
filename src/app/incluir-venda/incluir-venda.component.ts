import { Component, OnInit } from '@angular/core';
import { Venda } from '../entities/venda';
import { VendaService } from '../services/venda.service';


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

 

}
