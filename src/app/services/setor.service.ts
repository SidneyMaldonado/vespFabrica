import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Setor } from '../entities/setor';
 

@Injectable({
  providedIn: 'root'
})
export class SetorService {

  rotaBase: String = "http://localhost:8080/setor"

  constructor(private http: HttpClient) { }
  listar(): Observable<any> {
    return this.http.get<Setor[]>(`${this.rotaBase}/listar`)
  }

  incluir(setor: Setor): Observable<Setor> {
    return this.http.post<Setor>(`${this.rotaBase}/incluir`, setor)
  }

  alterar(setor: Setor): Observable<Setor> {
    return this.http.post<Setor>(`${this.rotaBase}/alterar`, setor)
  }

  consultar(id: number): Observable<Setor> {
    return this.http.get<Setor>(`${this.rotaBase}/${id}`)
  }



}

