import { Component, OnInit } from '@angular/core';
import { RoupaTecidoService } from '../services/roupa-tecido.service';
import { RoupaTecido } from '../entities/roupatecido';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-alterar-roupa-tecido',
  templateUrl: './alterar-roupa-tecido.component.html',
  styleUrls: ['./alterar-roupa-tecido.component.css']
})
export class AlterarRoupaTecidoComponent implements OnInit {

  roupatecido!: RoupaTecido
  constructor(private servicoRoupaTecido: RoupaTecidoService) { }

  ngOnInit(): void {

    this.servicoRoupaTecido.consultar

  }

  alterar(frm:NgForm){

    this.servicoRoupaTecido.incluir(this.roupatecido).subscribe(
      dados=> { alert("Tecido Cadastrado com sucesso."), console.log(dados)},
      error=> { alert("Erro ao Cadastrar Tecido"), console.log(error) }
      )
    }

}
