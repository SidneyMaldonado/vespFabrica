import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ViewQuantidadeVendasSetor } from '../views/ViewQuantidadeVendasSetor';

@Injectable({
  providedIn: 'root'
})
export class ViewQuantidadeVendasSetorService {

  rotaBase: string = "http://localhost:8080/"

  constructor(private http: HttpClient) {}

  listar(): Observable<any>{
    return this.http.get<ViewQuantidadeVendasSetor>(`${this.rotaBase}/viewquantidadevendassetor`)
  }
}
