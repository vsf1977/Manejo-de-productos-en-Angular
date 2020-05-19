import { Injectable } from '@angular/core';
import { Usermodel, Productmodel } from '../modelos/modelos/modelos.module';
import { DatabaseService } from './database.service';
import { Router } from '@angular/router';
import { Observable} from 'rxjs';


@Injectable()
export class DatosService {

  constructor(private database: DatabaseService, private router: Router) {
  }

  public productos: Productmodel[];
  producto: Productmodel;

  VerificarUsuario(user: Usermodel) {
    let login = false;
    let key: any;
    this.database.getUsers().subscribe((data) => {
      for (key in data) {
        // tslint:disable-next-line: triple-equals
        if (user.correo == data[key].correo && user.clave == data[key].clave) {
          localStorage.setItem('usuario', user.correo);
          localStorage.setItem('nombre', data[key].nombre);
          this.router.navigate(['main']);
          login = true;
        }
      }
      if (!login) {
        alert('Correo ó contraseña equivocada');
      }
    });

  }


  VerificarSesion() {
    // tslint:disable-next-line: variable-name
    let usuario_log: string;
    usuario_log = localStorage.getItem('usuario');
    if (usuario_log != null) {
      return usuario_log;
    } else  {
      return null;
    }
  }

  CerrarSesion() {
    localStorage.removeItem('usuario');
    localStorage.removeItem('nombre');
  }

  IngresarProducto(producto: Productmodel )  {
    if (confirm('Desea ingresar este item?')) {
      let key: any;
      let found = false;
      this.database.getProducts().subscribe((data) => {
        for (key in data) {
          // tslint:disable-next-line: triple-equals
          if (data[key].id == producto.id) {
            found = true;
          }
        }
        if (!found) {
          this.database.saveProduct(producto).subscribe(() => {
              alert('Producto ingresado!!!');
              this.router.navigate(['main']);
            }, () => {
              alert('Ocurrio un error al ingresar');
            }
          );
        } else {
          alert('Ya existe un producto con este id');
        }
      });
    }
  }

  EditarProducto(producto: Productmodel ) {
    if (confirm('Desea editar este item?')) {
      let key: any;
      this.database.getProducts().subscribe((data) => {
        for (key in data) {
          // tslint:disable-next-line: triple-equals
          if (data[key].id == producto.id) {
            this.database.editProduct(producto, key).subscribe(() => {
                alert('Producto Editado!!!');
                this.router.navigate(['main']);
              }, () =>  {
                alert('Ocurrio un error al ingresar');
              }
            );
          }
        }
      });
    }
  }



}
