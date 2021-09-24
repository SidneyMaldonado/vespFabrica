import { Component, OnInit } from '@angular/core';
import { LojaService } from '../services/loja.service';
import { Loja } from '../entities/loja';
@Component({
  selector: 'app-listar-loja',
  templateUrl: './listar-loja.component.html',
  styleUrls: ['./listar-loja.component.css']
})
export class ListarLojaComponent implements OnInit {

  lojas: Loja[] = [];
  constructor(private servicoLoja: LojaService) { }

  ngOnInit(): void {

    this.servicoLoja.listar().subscribe(

       dados => {this.lojas= dados, console.log(this.lojas)},
       error => { console.log("erro ao recuperar lojas", error)}

    )

  }

}
