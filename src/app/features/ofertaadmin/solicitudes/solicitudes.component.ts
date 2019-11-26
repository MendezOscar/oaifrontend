import { Component, OnInit } from '@angular/core';
import { ConsultamatriculaService } from 'src/app/services/consultamatricula/consultamatricula.service';
import { ConsultamatriculadetalleService } from 'src/app/services/consultamatriculadetalle/consultamatriculadetalle.service';
import { ConsultaMatricula } from 'src/app/models/ConsultaMatricula';
import { ConsultaMatriculaDetalle } from 'src/app/models/ConsultaMatriculaDetalle';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {
  periodo: string;
  anio: string;
  oferta: ConsultaMatricula;
  ofertaDetalle: ConsultaMatriculaDetalle[];

  constructor(private consultaService: ConsultamatriculaService,
              private consultaDetalleService: ConsultamatriculadetalleService) { }

  ngOnInit() {
  }

  getOferta() {
    // tslint:disable-next-line: radix
    this.consultaService.getConsultaMatriculas(parseInt(this.periodo), parseInt(this.anio))
    .subscribe(data => {
      this.oferta = data;
      this.getSolicitudes(this.oferta.consultamatriculaId);
    });
  }

  getSolicitudes(id: number) {
    this.consultaDetalleService.getConsultaMatriculaDetalleByMatriculaByMatriculaId(id).
    subscribe(data => {
      this.ofertaDetalle = data;
      console.log(data);
    });
  }

}
