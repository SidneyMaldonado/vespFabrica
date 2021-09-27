import { Loja } from '../entities/loja';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LojaService {

  constructor(private http: HttpClient) { }

  listar(): Observable<any>{

     return this.http.get<Loja[]>("http://localhost:8080/loja/listar");
    
  }
  incluir(loja: Loja): Observable<Loja>{
    return this.http.post<Loja>("http://localhost:8080/loja/incluir", loja);
  }
}
