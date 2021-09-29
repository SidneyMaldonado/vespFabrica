import { Component, OnInit } from '@angular/core';
import { ViewRoupaTecidoService } from '../services/view-roupa-tecido.service';
import { ViewRoupaTecido } from '../views/ViewRoupaTecido';


@Component({
  selector: 'app-view-roupa-tecido',
  templateUrl: './view-roupa-tecido.component.html',
  styleUrls: ['./view-roupa-tecido.component.css']
})
export class ViewRoupaTecidoComponent implements OnInit {
  
    viewRoupaTecido: ViewRoupaTecido[] = []

  constructor(private viewRoupaTecidoService: ViewRoupaTecidoService) { }

  ngOnInit(): void {

    this.viewRoupaTecidoService.listar().subscribe(
      dados => this.viewRoupaTecido = dados,
      error => alert('Erro ao recuperar view')
    )
  }

}
