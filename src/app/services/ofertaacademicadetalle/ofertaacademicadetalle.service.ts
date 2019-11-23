import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OfertaAcademicaDetalle } from 'src/app/models/OfertaAcademicaDetalle';

@Injectable({
  providedIn: 'root'
})
export class OfertaacademicadetalleService {

  apiUrl = 'https://localhost:5001/api/OfertaAcademicaDetalle';

  constructor(private http: HttpClient) { }

  getOfertaAcademicaDetalle(id: number) {
    return this.http.get<OfertaAcademicaDetalle[]>(this.apiUrl + '/get-by-oferta/' + id);
  }
}
