import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConsultaMatricula } from 'src/app/models/ConsultaMatricula';

@Injectable({
  providedIn: 'root'
})
export class ConsultamatriculaService {

  apiUrl = 'https://localhost:5001/api/ConsultaMatricula';

  constructor(private http: HttpClient) { }

  getConsultaMatricula() {
    return this.http.get<ConsultaMatricula[]>(this.apiUrl);
  }

  getConsultaMatriculaById(id: number ) {
    return this.http.get<ConsultaMatricula>(this.apiUrl + '/' + id);
  }

  deleteConsultaMatricula(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  createConsultaMatricula(obj: ConsultaMatricula) {
    return this.http.post<ConsultaMatricula>(this.apiUrl, obj);
  }

  editConsultaMatricula(obj: ConsultaMatricula) {
    return this.http.put<ConsultaMatricula>(this.apiUrl + '/' + obj.consultaMatriculaId, obj);
  }
}
