
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ViewFuncaoVendaPreco } from '../views/viewfuncaovendapreco';

@Injectable({
  providedIn: 'root'
})
export class ViewFuncaoVendaPrecoService {

  rotaBase: String = "http://localhost:8080/"
  constructor(private http: HttpClient) { }

  listar(): Observable<any>{
    return this.http.get<ViewFuncaoVendaPreco>(`${this.rotaBase}/viewfuncaovendapreco`)
  }

}
