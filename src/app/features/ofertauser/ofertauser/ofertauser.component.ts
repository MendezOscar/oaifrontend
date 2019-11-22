import { Component, OnInit } from '@angular/core';
import { ConsultaMatricula } from 'src/app/models/ConsultaMatricula';
import { ConsultamatriculaService } from 'src/app/services/consultamatricula/consultamatricula.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ofertauser',
  templateUrl: './ofertauser.component.html',
  styleUrls: ['./ofertauser.component.css']
})
export class OfertauserComponent implements OnInit {
  consultaMatricula: ConsultaMatricula[];

  constructor(private consultaMatriculaService: ConsultamatriculaService,
              private router: Router ) { }

  ngOnInit() {
    this.getSolicitudes();
  }

  getSolicitudes() {
    this.consultaMatriculaService.getConsultaMatricula().subscribe(data => {
      this.consultaMatricula = data;
    });
  }

  deleteSolicitud(id: number) {
    const res = confirm('Are you sure delete this item?');
    if (res) {
      this.consultaMatriculaService.deleteConsultaMatricula(id).subscribe(() => {
        this.getSolicitudes();
      });
    }
  }

  crear() {
    this.router.navigate(['solicitarofertauser']);
  }

  editar(id: number) {
    this.router.navigate(['editarofertauser', id]);
  }
}
