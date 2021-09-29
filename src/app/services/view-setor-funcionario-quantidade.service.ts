import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ViewSetorFuncionarioQuantidade } from '../views/viewsetorfuncionarioquantidade';

@Injectable({
  providedIn: 'root'
})
export class ViewSetorFuncionarioQuantidadeService {

  rotaBase: String = "http://localhost:8080/"

  constructor(private http: HttpClient) { }

  listar(): Observable<any>{
    return this.http.get<ViewSetorFuncionarioQuantidade>(`${this.rotaBase}/viewsetorfuncionarioquantidade`)
  }
}
