import { Component, OnInit } from '@angular/core';
import { Productmodel } from '../../modelos/modelos/modelos.module';
import { DatosService } from '../../servicios/datos.service';
import { DatabaseService } from '../../servicios/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  productos: Productmodel[] = [];
  // tslint:disable-next-line: variable-name
  f_nombre = '';
  // tslint:disable-next-line: variable-name
  f_pais = '';
  campo = '';
  orden = '';

  constructor(private database: DatabaseService, private datos: DatosService, private router: Router) {
    if (this.datos.VerificarSesion() == null) {
      this.router.navigate(['login']);
    } else {
      this.ListaProductos();
    }
  }

  ngOnInit() {
  }

  ListaProductos() {
    let key: any;
    this.database.getProducts().subscribe((data) => {
      this.productos = [];
      if (data) {
        // tslint:disable-next-line: forin
        for (key in data)  {
          this.productos.push(data[key]);
        }
      } else {
        alert('No hay productos');
      }
    });
  }

  Eliminar(id: string) {
    if (confirm('Desea eliminar este item?')) {
      let key: any;
      this.database.getProducts().subscribe((data) => {
        for (key in data) {
          // tslint:disable-next-line: radix
          if (data[key].id === parseInt(id)) {
            this.database.deleteProduct(key).subscribe(() => {
                alert('Operacion de borrado exitosa!!!');
                this.ListaProductos();
              }, () => {
                alert('Ocurrio un error al borrar el producto');
              }
            );
          }
        }
      });
    }
  }

  Agregarproducto()  {
    this.router.navigate(['add']);
  }

}
