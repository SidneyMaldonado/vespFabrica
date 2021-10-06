import { Component, OnInit } from '@angular/core';
import { ViewQuantidadeTecidoService } from '../services/view-quantidade-tecido.service';
import { ViewQuantidadeTecido } from '../views/ViewQuantidadeTecido';

@Component({
  selector: 'app-view-quantidade-tecido',
  templateUrl: './view-quantidade-tecido.component.html',
  styleUrls: ['./view-quantidade-tecido.component.css']
})
export class ViewQuantidadeTecidoComponent implements OnInit {

  viewQuantidadeTecidos: ViewQuantidadeTecido[] = []

  constructor( private viewQuantidadeTecidoService: ViewQuantidadeTecidoService) { }

  ngOnInit(): void {

    this.viewQuantidadeTecidoService.listar().subscribe(
      dados => {this.viewQuantidadeTecidos = dados, console.log(dados)},
      error => alert('Erro ao recuperar view')
    )

  }


}
