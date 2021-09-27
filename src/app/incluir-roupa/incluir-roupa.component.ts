import { Component, OnInit } from '@angular/core';
import { Roupa } from '../entities/roupa';
import { RoupaService } from '../services/roupa.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-incluir-roupa',
  templateUrl: './incluir-roupa.component.html',
  styleUrls: ['./incluir-roupa.component.css']
})
export class IncluirRoupaComponent implements OnInit {

  roupa : Roupa = {idroupa:0, nome:'', preco:0, medida:0}

  constructor(private servicoRoupa: RoupaService) { }

  ngOnInit(): void {
  }
   
  incluir(frm: NgForm){

    this.servicoRoupa.incluir(this.roupa).subscribe(
      dados => alert("Tecido cadastrado com sucesso"), 
      error => alert("Erro ao cadastrar roupa"), 

      )
    }

}
