import { Component, OnInit } from '@angular/core';
import { RoupaTecidoService } from '../services/roupa-tecido.service';
import { RoupaTecido } from '../entities/roupatecido';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-alterar-roupa-tecido',
  templateUrl: './alterar-roupa-tecido.component.html',
  styleUrls: ['./alterar-roupa-tecido.component.css']
})
export class AlterarRoupaTecidoComponent implements OnInit {

  roupatecido!: RoupaTecido
  constructor(private route: ActivatedRoute, private servicoRoupaTecido: RoupaTecidoService) { }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.servicoRoupaTecido.consultar( id ).subscribe(
      dados => this.roupatecido = dados,
      error => alert("erro ao ler roupa")
    )
  }

  alterar(frm:NgForm){

    this.servicoRoupaTecido.incluir(this.roupatecido).subscribe(
      dados=> { alert("Tecido Cadastrado com sucesso."), console.log(dados)},
      error=> { alert("Erro ao Cadastrar Tecido"), console.log(error) }
      )
    }

}
