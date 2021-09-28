import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venda } from '../entities/venda';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  rotaBase: String = "http://localhost:8080/venda"

  constructor(private http: HttpClient) { }
  listar(): Observable<any> {
    return this.http.get<Venda[]>(`${this.rotaBase}/listar`)
  }

  incluir(venda: Venda): Observable<Venda> {
    return this.http.post<Venda>(`${this.rotaBase}/incluir`, venda)
  }

    alterar(venda: Venda): Observable<Venda> {
      return this.http.post<Venda>(`${this.rotaBase}/alterar`, venda)
    }
    consulta(id: number): Observable<Venda> {
      return this.http.get<Venda>(`${this.rotaBase}/${id}`)
    }
}
