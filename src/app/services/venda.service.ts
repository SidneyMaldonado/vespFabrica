import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { venda } from '../entities/venda';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  constructor( private http: HttpClient ) { }
    listar(): Observable<any> {
      return this.http.get<venda[]>("http://localhost:8080/venda/listar");
    }
}
