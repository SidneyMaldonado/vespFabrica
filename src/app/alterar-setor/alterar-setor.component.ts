import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Setor } from '../entities/setor';
import { SetorService } from '../services/setor.service';

@Component({
  selector: 'app-alterar-setor',
  templateUrl: './alterar-setor.component.html',
  styleUrls: ['./alterar-setor.component.css']
})
export class AlterarSetorComponent implements OnInit {

  setor!: Setor

  @Input() id?: number

  constructor(private route: ActivatedRoute, private servicoSetor: SetorService) { }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.servicoSetor.consultar(id).subscribe(
      dados => this.setor = dados,
      error => alert("Erro ao ler setor")
    )

  }


  alterar(frm: NgForm) {
    this.servicoSetor.alterar(this.setor).subscribe(
      dados => { alert("Setor alterado com sucesso"), console.log(dados) },
      error => { alert("Erro ao cadastrar setor"), console.log(error) }
    )
  }

}
