import { Roupa } from './../entities/roupa';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoupaService {

  rotaBase: String = "http://localhost:8080/roupa"
  constructor(private http: HttpClient) { }
  listar(): Observable<any>{
    return this.http.get<Roupa[]>(`${this.rotaBase}/listar`)
  }

  incluir(roupa: Roupa): Observable<Roupa> {
    return this.http.post<Roupa>(`${this.rotaBase}/incluir`, roupa);
  }

  alterar(roupa : Roupa):Observable<Roupa>{
    return this.http.post<Roupa>(`${this.rotaBase}/alterar`, roupa);
  }

  consultar(id:Number):Observable<Roupa>{
    return this.http.get<Roupa>(`${this.rotaBase}/${id}`);
  }

}
