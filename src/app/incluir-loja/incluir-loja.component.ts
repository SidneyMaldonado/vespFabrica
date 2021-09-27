import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Loja } from '../entities/loja';
import { LojaService } from '../services/loja.service';

@Component({
  selector: 'app-incluir-loja',
  templateUrl: './incluir-loja.component.html',
  styleUrls: ['./incluir-loja.component.css']
})
export class IncluirLojaComponent implements OnInit {

  loja: Loja = {idloja:0, nome:'', credito:0}

  constructor(private servicoLoja: LojaService) { }

  ngOnInit(): void {
  }

  incluir(frm: NgForm){
    
    this.servicoLoja.incluir(this.loja).subscribe(
      dados=> alert("Loja Cadastrada com sucesso."),
      error=> alert("Erro ao cadastrar loja:" + error)
    )
  }
  
}
