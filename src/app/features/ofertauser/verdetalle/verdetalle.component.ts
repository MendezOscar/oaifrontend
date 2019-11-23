import { Component, OnInit } from '@angular/core';
import { ConsultaMatriculaDetalle } from 'src/app/models/ConsultaMatriculaDetalle';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultamatriculadetalleService } from 'src/app/services/consultamatriculadetalle/consultamatriculadetalle.service';
import { ConsultamatriculaService } from 'src/app/services/consultamatricula/consultamatricula.service';

@Component({
  selector: 'app-verdetalle',
  templateUrl: './verdetalle.component.html',
  styleUrls: ['./verdetalle.component.css']
})
export class VerdetalleComponent implements OnInit {
  detalles: ConsultaMatriculaDetalle[];

  matriculaId: string;
  cuenta: string;

  constructor(private consultaMatriculaService: ConsultamatriculaService, private router: Router,
              private solicitudMatriculaDetalle: ConsultamatriculadetalleService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line: radix
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.matriculaId = id.toString();
  }

  getDetalles() {
    this.solicitudMatriculaDetalle.getConsultaMatriculaDetalleByMatricula(this.matriculaId, this.cuenta)
    .subscribe(data => {
      this.detalles = data;
    });
  }

  deteleDetalle(id: number) {
    const res = confirm('Are you sure delete this item?');
    if (res) {
      this.solicitudMatriculaDetalle.deleteConsultaMatriculaDetalle(id).subscribe(()=> {
        this.getDetalles();
      });
    }
  }

}
