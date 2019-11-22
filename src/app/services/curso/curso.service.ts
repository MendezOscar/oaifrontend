import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from 'src/app/models/Curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  apiUrl = 'https://localhost:5001/api/Curso';

  constructor(private http: HttpClient) { }

  getCursos() {
    return this.http.get<Curso[]>(this.apiUrl);
  }

}
