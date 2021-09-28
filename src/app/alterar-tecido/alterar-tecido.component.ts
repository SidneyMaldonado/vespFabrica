import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tecido } from '../entities/tecido';
import { TecidoService } from '../services/tecido.service';

@Component({
  selector: 'app-alterar-tecido',
  templateUrl: './alterar-tecido.component.html',
  styleUrls: ['./alterar-tecido.component.css']
})
export class AlterarTecidoComponent implements OnInit {

  tecido!: Tecido

  constructor(private servicoTecido: TecidoService) { }

  ngOnInit(): void {

    this.servicoTecido.consultar( )

  }

  alterar(frm:NgForm){

    this.servicoTecido.incluir(this.tecido).subscribe(
      dados=> { alert("Tecido Cadastrado com sucesso."), console.log(dados)},
      error=> { alert("Erro ao Cadastrar Tecido"), console.log(error) }
      )
    }
  }
