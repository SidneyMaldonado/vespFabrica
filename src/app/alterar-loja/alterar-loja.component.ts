import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Loja } from '../entities/loja';
import { LojaService } from '../services/loja.service';

@Component({
  selector: 'app-alterar-loja',
  templateUrl: './alterar-loja.component.html',
  styleUrls: ['./alterar-loja.component.css']
})
export class AlterarLojaComponent implements OnInit {

  loja!: Loja

  @Input() id?:number

  constructor(private route: ActivatedRoute ,private servicoLoja: LojaService) { }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.servicoLoja.consultar(id).subscribe(
      dados=> this.loja = dados,
      error=> alert("erro ao ler tecido")
    )
  }

  alterar(frm: NgForm){

    this.servicoLoja.alterar(this.loja).subscribe(
      dados=> { alert("Loja Alterada com sucesso."), console.log(dados)},
      error=> { alert("Erro ao Alterar Loja"), console.log(error) }
    )
  }

}
