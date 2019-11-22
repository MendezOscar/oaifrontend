import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alumno } from 'src/app/models/Alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  apiUrl = 'https://localhost:5001/api/Alumno';

  constructor(private http: HttpClient) { }

  getAlumnos() {
    return this.http.get<Alumno[]>(this.apiUrl);
  }

  getAlumnoById(id: number ) {
    return this.http.get<Alumno>(this.apiUrl + '/' + id);
  }

  getAlumnoByCuenta(cuenta: string, clave: string) {
    return this.http.get<Alumno>(this.apiUrl + '/' + cuenta + '/' + clave);
  }
}
