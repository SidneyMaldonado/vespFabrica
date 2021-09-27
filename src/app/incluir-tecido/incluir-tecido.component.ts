import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tecido } from '../entities/tecido';
import { TecidoService } from '../services/tecido.service';

@Component({
  selector: 'app-incluir-tecido',
  templateUrl: './incluir-tecido.component.html',
  styleUrls: ['./incluir-tecido.component.css']
})
export class IncluirTecidoComponent implements OnInit {

  tecido : Tecido = {idtecido:0, nome:'', preco:0, medida:0}

  constructor(private servicoTecido: TecidoService) { }

  ngOnInit(): void {
  }
   
  incluir(frm: NgForm){

    this.servicoTecido.incluir(this.tecido).subscribe(
      dados => alert("Tecido cadastrado com sucesso"), 
      error => alert("Erro ao cadastrar tecido"), 

      )

  }
}
