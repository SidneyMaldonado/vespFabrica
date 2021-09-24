import { Component, OnInit } from '@angular/core';
import { Setor } from '../entities/setor';
import { SetorService } from '../services/setor.service';

@Component({
  selector: 'app-listar-setor',
  templateUrl: './listar-setor.component.html',
  styleUrls: ['./listar-setor.component.css']
})
export class ListarSetorComponent implements OnInit {

  setores: Setor[] = [];
  
  constructor (private servicoSetor: SetorService ) { }

  ngOnInit(): void {

    this.servicoSetor.listar().subscribe(
      dados => { this.setores= dados, console.log(this.setores) },
      error => { console.log("Erro ao recuperar setores ", error)}
    )



  }

}
