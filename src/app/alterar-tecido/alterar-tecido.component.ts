<<<<<<< HEAD
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Tecido } from '../entities/tecido';
import { TecidoService } from '../services/tecido.service';
=======
import { Component, OnInit } from "@angular/core"
import { NgForm } from "@angular/forms"
import { ActivatedRoute } from "@angular/router"
import { Tecido } from "../entities/tecido"
import { TecidoService } from "../services/tecido.service"

>>>>>>> dacf2be552d45533b13f9b65818fff41216b8326

@Component({
  selector: 'app-alterar-tecido',
  templateUrl: './alterar-tecido.component.html',
  styleUrls: ['./alterar-tecido.component.css']
})
export class AlterarTecidoComponent implements OnInit {
<<<<<<< HEAD
  
  tecido!: Tecido

  @Input() id?:Number


  constructor(private route:ActivatedRoute, private servicoTecido: TecidoService) { }

  ngOnInit(): void {

    const id= Number(this.route.snapshot.paramMap.get('id'))
    this.servicoTecido.consultar(id).subscribe(
      dados => this.tecido =dados,
      erros => alert("erro ao ler tecido")
    )
  }

  alterar(frm: NgForm){

    this.servicoTecido.alterar(this.tecido).subscribe(
      dados=> { alert("Tecido Alterado com sucesso."), console.log(dados)},
      error=> { alert("Erro ao Alterar Tecido"), console.log(error) }
    )
  }

}
=======

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
  

>>>>>>> dacf2be552d45533b13f9b65818fff41216b8326
