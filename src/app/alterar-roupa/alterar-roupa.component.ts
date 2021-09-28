import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Roupa } from '../entities/roupa';
import { RoupaService } from '../services/roupa.service';

@Component({
  selector: 'app-alterar-roupa',
  templateUrl: './alterar-roupa.component.html',
  styleUrls: ['./alterar-roupa.component.css']
})
export class AlterarRoupaComponent implements OnInit {

  roupa!:Roupa

  @Input() id?:Number

  constructor(private route: ActivatedRoute, private servicoRoupa: RoupaService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.servicoRoupa.consultar( id ).subscribe(
      dados => this.roupa = dados,
      error => alert("erro ao ler roupa")
    )
  }
  
  alterar(frm: NgForm){
    this.servicoRoupa.incluir(this.roupa).subscribe(
      dados=> { alert("Roupa Cadastrada com sucesso."), console.log(dados)},
      error=> { alert("Erro ao Cadastrar Roupa"), console.log(error) }
    )
  }

}
