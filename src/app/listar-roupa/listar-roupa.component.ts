import { Roupa } from './../entities/roupa';
import { RoupaService } from './../services/roupa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-roupa',
  templateUrl: './listar-roupa.component.html',
  styleUrls: ['./listar-roupa.component.css']
})
export class ListarRoupaComponent implements OnInit {

roupas: Roupa[] = [];

  constructor( private servicoRoupa: RoupaService ) { }

  ngOnInit(): void {

    this.servicoRoupa.listar().subscribe(
      dados => { this.roupas= dados, console.log(this.roupas) },
      error => { console.log("Erro ao recuperar roupas ", error)}
    )

  }

}
