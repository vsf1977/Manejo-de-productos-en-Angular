import { Component } from '@angular/core';
import { DatosService } from '../../servicios/datos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent {

  nombre = '';
  constructor(private datos: DatosService, private router: Router) {
    if (this.datos.VerificarSesion() == null) {
        this.router.navigate(['login']);
      } else {
        this.nombre = localStorage.getItem('nombre');
      }
  }


  CerrarSesion()  {
    this.datos.CerrarSesion();
    this.router.navigate(['login']);
  }

}
