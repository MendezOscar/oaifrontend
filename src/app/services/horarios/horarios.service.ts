import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Horario } from 'src/app/models/Horario';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  apiUrl = 'https://localhost:5001/api/Horarios';

  constructor(private http: HttpClient) { }

  getHorarios() {
    return this.http.get<Horario[]>(this.apiUrl);
  }
}
