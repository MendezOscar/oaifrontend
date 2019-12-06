import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OfertaGenerada } from 'src/app/models/OfertaGenerada';

@Injectable({
  providedIn: 'root'
})
export class OfertageneradaService {

  apiUrl = 'https://localhost:5001/api/OfertaGenerada';

  constructor(private http: HttpClient) { }

  getOfertaAcademica() {
    return this.http.get<OfertaGenerada[]>(this.apiUrl);
  }

  getOfertaAcademicaByPeriodo(periodo: number, anio: number) {
    return this.http.get<OfertaGenerada>(this.apiUrl + '/' + periodo + '/' + anio);
  }

  ExecOfertaAcademica(periodo: number, anio: number, max: number, min: number) {
    return this.http.get<OfertaGenerada>(this.apiUrl + '/' + periodo + '/' + anio + '/' + min + '/' + max);
  }

  deleteOfertaFenerada(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  editdeleteOfertaFenerada(obj: OfertaGenerada) {
    return this.http.put<OfertaGenerada>(this.apiUrl + '/' + obj.ofertaGeneradaId, obj);
  }
}
