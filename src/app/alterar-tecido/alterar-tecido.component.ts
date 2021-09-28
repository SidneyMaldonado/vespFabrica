import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Tecido } from '../entities/tecido';
import { TecidoService } from '../services/tecido.service';

@Component({
  selector: 'app-alterar-tecido',
  templateUrl: './alterar-tecido.component.html',
  styleUrls: ['./alterar-tecido.component.css']
})
export class AlterarTecidoComponent implements OnInit {
  tecido!: Tecido  
  @Input() id?:number
  constructor(private route: ActivatedRoute ,private servicoTecido: TecidoService) { }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.servicoTecido.consultar(id).subscribe(
      dados=> this.tecido = dados,
      error=> alert("erro ao ler tecido")
    )
  }
  alterar(frm: NgForm){
    this.servicoTecido.alterar(this.tecido).subscribe(
      dados=> { alert("Tecido Alterado com sucesso."), console.log(dados)},
      error=> { alert("Erro ao Alterar Tecido"), console.log(error) }
    )
  }
}