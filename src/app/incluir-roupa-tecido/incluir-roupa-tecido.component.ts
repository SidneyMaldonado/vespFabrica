import { Component, OnInit } from '@angular/core';
import { RoupaTecidoService } from '../services/roupa-tecido.service';
import { RoupaTecido } from '../entities/roupatecido';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-incluir-roupa-tecido',
  templateUrl: './incluir-roupa-tecido.component.html',
  styleUrls: ['./incluir-roupa-tecido.component.css']
})
export class IncluirRoupaTecidoComponent implements OnInit {

  roupatecido: RoupaTecido = { idRoupaTecido: 0, idRoupa: 0, idTecido: 0 }

  constructor(private servicoRoupaTecido: RoupaTecidoService) { }

  ngOnInit(): void {
  }
  incluir(frm: NgForm) {

    this.servicoRoupaTecido.incluir(this.roupatecido).subscribe(
      dados => alert("Tecido cadastrado com sucesso"),
      error => alert("Erro ao cadastrar roupatecido"),
    )
  }
}
