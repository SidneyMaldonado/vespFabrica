import { Component, OnInit } from '@angular/core';
import { ViewQuantidadeVendasSetorService } from '../services/view-quantidade-vendas-setor.service';
import { ViewQuantidadeVendasSetor } from '../views/ViewQuantidadeVendasSetor';

@Component({
  selector: 'app-view-quantidade-vendas-setor',
  templateUrl: './view-quantidade-vendas-setor.component.html',
  styleUrls: ['./view-quantidade-vendas-setor.component.css']
})
export class ViewQuantidadeVendasSetorComponent implements OnInit {

  viewQuantidadeVendasSetor: ViewQuantidadeVendasSetor[] = []
  
  constructor(private viewQuantidadeVendasSetorService: ViewQuantidadeVendasSetorService) { }

  ngOnInit(): void {
    this.viewQuantidadeVendasSetorService.listar().subscribe(
      dados => this.viewQuantidadeVendasSetor = dados,
      error => alert(`Erro ao recuperar view:`)
    )
  }

}
