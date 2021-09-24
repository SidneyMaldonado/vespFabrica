import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Roupa } from '../entities/roupa';

@Injectable({
  providedIn: 'root'
})
export class TecidoService {

  constructor(private http: HttpClient) { }
  listar(): Observable<any>{
    return this.http.get<Roupa[]>("http://localhost:8080/tecido/listar")
  }
}
