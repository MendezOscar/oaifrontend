import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumno/alumno.service';
import { Coordinador } from 'src/app/models/Coordinador';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/models/Alumno';
import { CoordinadorService } from 'src/app/services/coordinador/coordinador.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  coordinador: Coordinador;
  alumno: Alumno;
  clave: string;
  cuenta: string;
  isCoordinador: boolean;

  public tipos = [
    { nombre: 'Coordinador', checked: false },
    { nombre: 'Alumno', checked: false },
  ];

  constructor(private alumnoService: AlumnoService, private coordinadorService: CoordinadorService,
              private router: Router) { }

  ngOnInit() {
  }

  getAlumno() {
    this.alumnoService.getAlumnoByCuenta(this.cuenta, this.clave).subscribe(data => {
      this.alumno = data;
    });
  }

  getCoordinador() {
    this.coordinadorService.getCoordinadorByCuenta(this.cuenta, this.clave).subscribe(data => {
      this.coordinador = data;
    });
  }

  login() {
    if (this.tipos[0].nombre === 'Coordinador' && this.tipos[0].checked === true) {
      this.getCoordinador();
      if (this.coordinador) {
        localStorage.setItem('user', JSON.stringify(this.coordinador));
        this.router.navigate(['homeadmin']);
      }
    } else {
      this.getAlumno();
      if (this.alumno) {
        localStorage.setItem('user', this.alumno.cuenta);
        this.router.navigate(['homeuser', this.cuenta]);
      }
    }
  }

}
