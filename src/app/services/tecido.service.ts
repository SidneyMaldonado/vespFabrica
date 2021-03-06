import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tecido } from '../entities/tecido';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TecidoService {

  rotaBase: String = "http://localhost:8080/tecido"

  constructor(private http: HttpClient) { }

  listar(): Observable<any>{
    return this.http.get<Tecido[]>(`${this.rotaBase}/listar`)
  }

  incluir(tecido: Tecido): Observable<Tecido> {
    return this.http.post<Tecido>(`${this.rotaBase}/incluir`, tecido)
  }

  alterar(tecido: Tecido): Observable<Tecido> {
    return this.http.post<Tecido>(`${this.rotaBase}/alterar`, tecido)
  }
  consultar(id: number): Observable<Tecido> {
    return this.http.get<Tecido>(`${this.rotaBase}/${id}`)
  }

  }

