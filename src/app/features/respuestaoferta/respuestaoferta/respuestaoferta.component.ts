import { Component, OnInit } from '@angular/core';
import { ConsultamatriculaService } from 'src/app/services/consultamatricula/consultamatricula.service';
import { ConsultamatriculadetalleService } from 'src/app/services/consultamatriculadetalle/consultamatriculadetalle.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ConsultaMatriculaDetalle } from 'src/app/models/ConsultaMatriculaDetalle';

@Component({
  selector: 'app-respuestaoferta',
  templateUrl: './respuestaoferta.component.html',
  styleUrls: ['./respuestaoferta.component.css']
})
export class RespuestaofertaComponent implements OnInit {

  ngOnInit() {
  }
}
