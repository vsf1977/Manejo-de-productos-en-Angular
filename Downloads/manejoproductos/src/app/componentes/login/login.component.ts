import { Usermodel } from '../../modelos/modelos/modelos.module';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatosService } from '../../servicios/datos.service';
import { DatabaseService } from '../../servicios/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  error_login: boolean;
  usuario: Usermodel = new Usermodel();
  constructor(private datos: DatosService, private router: Router) {
    this.error_login = false;
    if (this.datos.VerificarSesion() != null) {
      this.router.navigate(['main']);
    }
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.datos.VerificarUsuario(this.usuario);
  }

}
