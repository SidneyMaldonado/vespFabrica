import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venda } from '../entities/venda';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  constructor( private http: HttpClient ) { }
    listar(): Observable<any> {
      return this.http.get<Venda[]>("http://localhost:8080/venda/listar");
    }

    incluir(venda: Venda): Observable<Venda> {
      return this.http.post<Venda>("http://localhost:8080/venda/incluir", venda);
    }
}
