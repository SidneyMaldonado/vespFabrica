import { Loja } from '../entities/loja';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LojaService {

  rotaBase: String = "http://localhost:8080/loja"

  constructor(private http: HttpClient) { }

  listar(): Observable<any>{

     return this.http.get<Loja[]>(`${this.rotaBase}/listar`);
    
  }

  incluir(loja: Loja): Observable<Loja>{
    return this.http.post<Loja>(`${this.rotaBase}/incluir`, loja);
  }

  alterar(loja: Loja): Observable<Loja>{
    return this.http.post<Loja>(`${this.rotaBase}/alterar`, loja)
  }

  consultar(id: number): Observable<Loja>{
    return this.http.get<Loja>(`${this.rotaBase}/${id}`)
  }
}
