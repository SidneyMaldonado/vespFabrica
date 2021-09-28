import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { funcao } from '../entities/funcao';


@Injectable({
  providedIn: 'root'
})
export class FuncaoService {


  rotaBase: String = "http://localhost:8080/funcao"

  constructor(private http: HttpClient) { }

  listar(): Observable<any>{
    return this.http.get<funcao>(`${this.rotaBase}/listar`)
  }

  incluir(funcao: funcao): Observable<funcao> {
    return this.http.post<funcao>(`${this.rotaBase}/incluir`, funcao)

  }

  alterar(funcao: funcao): Observable<funcao> {
    return this.http.post<funcao>(`${this.rotaBase}/alterar`, funcao)

  }

  consulta(id: number): Observable<funcao> {
    return this.http.get<funcao>(`${this.rotaBase}/${id}`)

  }
}
