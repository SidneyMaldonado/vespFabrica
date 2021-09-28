import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Roupa } from '../entities/roupa';
import { Tecido } from '../entities/tecido';
import { RoupaService } from './roupa.service';

@Injectable({
  providedIn: 'root'
})
export class TecidoService {
  consultar() {
    throw new Error('Method not implemented.');
  }

  rotaBase: String = "http://localhost:8080/tecido"

  constructor(private http: HttpClient) { }

  listar(): Observable<any>{
    return this.http.get<RoupaService[]>(`${this.rotaBase}/listar`)
  }

  incluir(tecido: Tecido): Observable<Tecido> {
    return this.http.post<Tecido>(`${this.rotaBase}/incluir`, tecido)
  }

  alterar(tecido: Tecido): Observable<Tecido> {
    return this.http.post<Tecido>(`${this.rotaBase}/alterar`, tecido)
  }
  consulta(id: number): Observable<Tecido> {
    return this.http.get<Tecido>(`${this.rotaBase}/${id}`)
  }

}

