import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoupaTecido } from '../entities/roupatecido';

@Injectable({
  providedIn: 'root'
})
export class RoupaTecidoService {

  constructor( private http: HttpClient ) { }
    listar(): Observable<any> {
      return this.http.get<RoupaTecido[]>("http://localhost:8080/roupatecido/listar");
    }
}
