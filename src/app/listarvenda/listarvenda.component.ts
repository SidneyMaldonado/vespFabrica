import { Component, OnInit } from '@angular/core';
import { venda } from '../entities/venda';
import { VendaService } from '../services/venda.service';

@Component({
  selector: 'app-listarvenda',
  templateUrl: './listarvenda.component.html',
  styleUrls: ['./listarvenda.component.css']
})
export class ListarvendaComponent implements OnInit {
  vendas: venda[]=[];

  constructor(private servicoVenda: VendaService) {

   }

  ngOnInit(): void {
    this.servicoVenda.listar().subscribe(
      dados => { this.vendas= dados, console.log(this.vendas) },
      error => { console.log("Erro ao recuperar vendas ", error)}
    )
  }

}
