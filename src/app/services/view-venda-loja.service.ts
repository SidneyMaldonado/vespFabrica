import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ViewVendaLoja } from '../views/ViewVendaLoja';

@Injectable({
  providedIn: 'root'
})
export class ViewVendaLojaService {

  rotaBase: String = "http://localhost:8080/"
  constructor(private http: HttpClient) { }

  listar(): Observable<any>{
    return this.http.get<ViewVendaLoja>(`${this.rotaBase}/viewvendaloja`)
  }
}
