import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Venda } from '../entities/venda';
import { VendaService } from '../services/venda.service';

@Component({
  selector: 'app-alterar-venda',
  templateUrl: './alterar-venda.component.html',
  styleUrls: ['./alterar-venda.component.css']
})
export class AlterarVendaComponent implements OnInit {
  
  
  venda!: Venda

  @Input() id?:Number


  constructor(private route:ActivatedRoute, private servicoVenda: VendaService) { }

  ngOnInit(): void {

    const id= Number(this.route.snapshot.paramMap.get('id'))
    this.servicoVenda.consulta(id).subscribe(
      dados => this.venda =dados,
      erros => alert("erro ao ler tecido")
    )
  }

  alterar(frm: NgForm){

    this.servicoVenda.alterar(this.venda).subscribe(
      dados=> { alert("Venda Alterada com sucesso."), console.log(dados)},
      error=> { alert("Erro ao Alterar Venda"), console.log(error) }
    )
  }

}
