import { Component, OnInit } from '@angular/core';
import { ConsultaMatricula } from 'src/app/models/ConsultaMatricula';
import { ConsultamatriculaService } from 'src/app/services/consultamatricula/consultamatricula.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aperturar',
  templateUrl: './aperturar.component.html',
  styleUrls: ['./aperturar.component.css']
})
export class AperturarComponent implements OnInit {
  consultaMatricula: ConsultaMatricula;
  solicitudes: ConsultaMatricula[];

  periodo: string;
  anio: string;
  estado: string;
  cuentaAlumno: string;

  constructor(private consultaMatriculaService: ConsultamatriculaService, private router: Router) { }

  ngOnInit() {
  }

  getSolicitudes() {
    this.consultaMatriculaService.getConsultaMatricula().subscribe(data => {
      this.solicitudes = data;
    });
  }

  create() {
    this.consultaMatricula = new ConsultaMatricula();
    // tslint:disable-next-line: radix
    this.consultaMatricula.periodo = parseInt(this.periodo);
    // tslint:disable-next-line: radix
    this.consultaMatricula.anio = parseInt(this.anio);
    this.consultaMatricula.estado = 0;
    this.consultaMatricula.cuentaalumno = this.cuentaAlumno;

    if (this.consultaMatricula) {
      this.consultaMatriculaService.createConsultaMatricula(this.consultaMatricula).subscribe (() => {
        this.getSolicitudes();
      });
    }
  }

  cancel() {
    this.router.navigate(['/ofertauser']);
  }

}
