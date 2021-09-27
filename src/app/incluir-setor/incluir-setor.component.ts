import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Setor } from '../entities/setor';
import { SetorService } from '../services/setor.service';

@Component({
  selector: 'app-incluir-setor',
  templateUrl: './incluir-setor.component.html',
  styleUrls: ['./incluir-setor.component.css']
})
export class IncluirSetorComponent implements OnInit {

  setor: Setor = {idSetor:0, nome:''}

  constructor(private servicoSetor: SetorService) { }

  ngOnInit(): void {
  }

  
  incluir(frm: NgForm){
    
    this.servicoSetor.incluir(this.setor).subscribe(
      dados=> alert("Tecido Cadastrado com sucesso."),
      error=> alert("Erro ao cadastrar tecido:" + error)
    )

    }


}
