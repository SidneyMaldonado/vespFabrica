import { Component, OnInit } from '@angular/core';
import { RoupaTecido } from '../entities/roupatecido';
import { RoupaTecidoService } from '../services/roupa-tecido.service';

@Component({
  selector: 'app-listar-roupa-tecido',
  templateUrl: './listar-roupa-tecido.component.html',
  styleUrls: ['./listar-roupa-tecido.component.css']
})
export class ListarRoupaTecidoComponent implements OnInit {

  roupastecidos: RoupaTecido[] = [];

  constructor(private servicoRoupaTecido: RoupaTecidoService) { }

  ngOnInit(): void {
    
    this.servicoRoupaTecido.listar().subscribe(
      dados => { this.roupastecidos= dados, console.log(this.roupastecidos) },
      error => { console.log("Erro ao recuperar roupas ", error)}
    )
  }

}
