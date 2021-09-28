import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoupaTecido } from '../entities/roupatecido';


@Injectable({
  providedIn: 'root'
})
export class RoupaTecidoService {

  rotaBase: String = "http://localhost:8080/roupatecido"
  constructor(private http: HttpClient) { }
  listar(): Observable<any>{
    return this.http.get<RoupaTecido[]>(`${this.rotaBase}/listar`)
  }

  incluir(roupatecido: RoupaTecido): Observable<RoupaTecido> {
    return this.http.post<RoupaTecido>(`${this.rotaBase}/incluir`, roupatecido);
  }

  alterar(roupatecido : RoupaTecido):Observable<RoupaTecido>{
    return this.http.post<RoupaTecido>(`${this.rotaBase}/alterar`, roupatecido);
  }

  consultar(id:Number):Observable<RoupaTecido>{
    return this.http.get<RoupaTecido>(`${this.rotaBase}/${id}`);
  }
  }  
