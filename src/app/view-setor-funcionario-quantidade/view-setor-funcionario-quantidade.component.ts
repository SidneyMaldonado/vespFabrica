import { Component, OnInit } from '@angular/core';
import { ViewSetorFuncionarioQuantidadeService } from '../services/view-setor-funcionario-quantidade.service';
import { ViewSetorFuncionarioQuantidade } from '../views/viewsetorfuncionarioquantidade';

@Component({
  selector: 'app-view-setor-funcionario-quantidade',
  templateUrl: './view-setor-funcionario-quantidade.component.html',
  styleUrls: ['./view-setor-funcionario-quantidade.component.css']
})
export class ViewSetorFuncionarioQuantidadeComponent implements OnInit {

  viewSetorFuncionarioQuantidades: ViewSetorFuncionarioQuantidade[]=[]

  constructor(private viewSetorFuncionarioQuantidadeService: ViewSetorFuncionarioQuantidadeService) { }

  ngOnInit(): void {
    this.viewSetorFuncionarioQuantidadeService.listar().subscribe(
      dados => this.viewSetorFuncionarioQuantidades = dados,
      error => alert('Erro ao recuperar view')
    )
  }

}
