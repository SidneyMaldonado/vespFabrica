import { Injectable } from '@angular/core';
import { ViewQuantidadeTecido } from '../views/ViewQuantidadeTecido';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewQuantidadeTecidoService {

  rotaBase: String = "http://localhost:8080/"
  constructor(private http: HttpClient) { }

  listar(): Observable<any>{
    return this.http.get<ViewQuantidadeTecido>(`${this.rotaBase}/viewquantidadetecido`)
  }
}
