import { Component, OnInit } from '@angular/core';
import { ConsultamatriculaService } from 'src/app/services/consultamatricula/consultamatricula.service';
import { ConsultamatriculadetalleService } from 'src/app/services/consultamatriculadetalle/consultamatriculadetalle.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ConsultaMatriculaDetalle } from 'src/app/models/ConsultaMatriculaDetalle';
import { OfertaAcademicaDetalle } from 'src/app/models/OfertaAcademicaDetalle';
import { OfertaacademicadetalleService } from 'src/app/services/ofertaacademicadetalle/ofertaacademicadetalle.service';
import { OfertaacademicaService } from 'src/app/services/ofertaacademica/ofertaacademica.service';
import { OfertaAcademica } from 'src/app/models/OfertaAcademica';

@Component({
  selector: 'app-respuestaoferta',
  templateUrl: './respuestaoferta.component.html',
  styleUrls: ['./respuestaoferta.component.css']
})
export class RespuestaofertaComponent implements OnInit {
  perido: string;
  anio: string;
  ofertaAcademica: OfertaAcademica;
  ofertaAcademicaDetalle: OfertaAcademicaDetalle[];

  constructor(private ofertaAcedemica: OfertaacademicaService,
              private oferaAcademicaDetalle: OfertaacademicadetalleService) {

  }

  ngOnInit() {
  }

  getOfertaAcedimica() {
    // tslint:disable-next-line: radix
    this.ofertaAcedemica.getOfertaAcademicaByPeriodo(parseInt(this.perido), parseInt(this.anio))
    .subscribe(data => {
      this.ofertaAcademica = data;
      this.getOfertaAcademicaDetalle(this.ofertaAcademica.ofertaId);
    });
  }

  getOfertaAcademicaDetalle(id: number) {
    this.oferaAcademicaDetalle.getOfertaAcademicaDetalle(id).subscribe(data => {
      this.ofertaAcademicaDetalle = data;
    });
  }
}
