import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OfertaAcademica } from 'src/app/models/OfertaAcademica';

@Injectable({
  providedIn: 'root'
})
export class OfertaacademicaService {

  apiUrl = 'https://localhost:5001/api/OfertaAcademica';

  constructor(private http: HttpClient) { }

  getOfertaAcademica() {
    return this.http.get<OfertaAcademica[]>(this.apiUrl);
  }

  getOfertaAcademicaByPeriodo(periodo: number, anio: number) {
    return this.http.get<OfertaAcademica>(this.apiUrl + '/' + periodo + '/' + anio);
  }
}
