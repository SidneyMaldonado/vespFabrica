import { Component, OnInit } from '@angular/core';
import { Tecido } from '../entities/tecido';
import { TecidoService } from '../services/tecido.service';

@Component({
  selector: 'app-listar-tecido',
  templateUrl: './listar-tecido.component.html',
  styleUrls: ['./listar-tecido.component.css']
})
export class ListarTecidoComponent implements OnInit {
  
  tecidos: Tecido[] = [];

  constructor(private servicoTecido: TecidoService) { }

  ngOnInit(): void {
    this.servicoTecido.listar().subscribe(
      dados => {this.tecidos = dados, console.log(this.tecidos)},
      error => { console.log("Erro ao recuperar tecidos", error)}
    )
  }

}
