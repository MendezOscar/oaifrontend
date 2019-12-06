import { Component, OnInit } from '@angular/core';
import { ConsultaMatricula } from 'src/app/models/ConsultaMatricula';
import { ConsultamatriculaService } from 'src/app/services/consultamatricula/consultamatricula.service';
import { Router } from '@angular/router';
import { CursoService } from 'src/app/services/curso/curso.service';
import { Curso } from 'src/app/models/Curso';
import { ConsultaMatriculaDetalle } from 'src/app/models/ConsultaMatriculaDetalle';
import { ConsultamatriculadetalleService } from 'src/app/services/consultamatriculadetalle/consultamatriculadetalle.service';
import { Horario } from 'src/app/models/Horario';
import { HorariosService } from 'src/app/services/horarios/horarios.service';

@Component({
  selector: 'app-solicitaroferta',
  templateUrl: './solicitaroferta.component.html',
  styleUrls: ['./solicitaroferta.component.css']
})
export class SolicitarofertaComponent implements OnInit {
  consultaMatricula: ConsultaMatricula;
  solicitudes: ConsultaMatricula[];
  matriculaDetalle: ConsultaMatriculaDetalle;
  detalles: ConsultaMatriculaDetalle[];
  cursos: Curso[];
  periodo: string;
  anio: string;
  estado: string;
  cuentaAlumno: string;
  horarios: Horario[];

  curso: string;
  dia: string;
  cuenta: string;
  hora: string;
  maticulaId: string;

  constructor(private consultaMatriculaService: ConsultamatriculaService, private router: Router,
              private cursoService: CursoService,
              private solicitudMatriculaDetalle: ConsultamatriculadetalleService,
              private horarioService: HorariosService) { }

  ngOnInit() {
    this.getCusos();
    this.getSolicitudes();
    this.getHorarios();
  }

  getHorarios() {
    this.horarioService.getHorarios().subscribe (data => {
      this.horarios = data;
    });
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
      });
    }
  }

  createDetalle() {
    this.matriculaDetalle = new ConsultaMatriculaDetalle();
    // tslint:disable-next-line: radix
    this.matriculaDetalle.alumnoId = parseInt(this.cuenta);
    // tslint:disable-next-line: radix
    this.matriculaDetalle.consultaMatriculaId = parseInt(this.maticulaId);
    // tslint:disable-next-line: radix
    this.matriculaDetalle.cursoId = parseInt(this.curso);
    // tslint:disable-next-line: radix
    this.matriculaDetalle.dia = parseInt(this.dia);
    this.matriculaDetalle.hora = this.hora;
    if (this.matriculaDetalle) {
      this.solicitudMatriculaDetalle.createConsultaMatriculaDetalle(this.matriculaDetalle)
      .subscribe(() => {
        this.getDetalles(this.maticulaId, this.cuenta);
      });
    }
  }

  getDetalles(consultaMatricula: string, cuenta: string) {
    this.solicitudMatriculaDetalle.getConsultaMatriculaDetalleByMatricula(consultaMatricula, cuenta)
    .subscribe(data => {
      this.detalles = data;
    });
  }

  getCusos() {
    this.cursoService.getCursos().subscribe ( data => {
      this.cursos = data;
    });
  }

  cancel() {
    this.router.navigate(['/ofertauser']);
  }

}
