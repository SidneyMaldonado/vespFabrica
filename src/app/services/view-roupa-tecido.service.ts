import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ViewRoupaTecido } from '../views/ViewRoupaTecido';


@Injectable({
  providedIn: 'root'
})
export class ViewRoupaTecidoService {

  rotaBase: string = "http://localhost:8080/"

  constructor(private http: HttpClient) { }

  listar(): Observable<any>{
    return this.http.get<ViewRoupaTecido>(`${this.rotaBase}/viewroupatecido`)
  }
}
