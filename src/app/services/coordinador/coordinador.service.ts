import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coordinador } from 'src/app/models/Coordinador';

@Injectable({
  providedIn: 'root'
})
export class CoordinadorService {

  apiUrl = 'https://localhost:5001/api/Coordinador';

  constructor(private http: HttpClient) { }

  getCoordinadores() {
    return this.http.get<Coordinador[]>(this.apiUrl);
  }

  getCoordinadorById(id: number ) {
    return this.http.get<Coordinador>(this.apiUrl + '/' + id);
  }

  getCoordinadorByCuenta(cuenta: string, clave: string) {
    return this.http.get<Coordinador>(this.apiUrl + '/' + cuenta + '/' + clave);
  }
}
